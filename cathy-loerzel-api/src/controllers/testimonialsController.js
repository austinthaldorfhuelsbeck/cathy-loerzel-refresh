// Import Middleware for service and errors
const service = require('../services/testimonialsService');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');


//// !--- VALIDATION for testimonial resources ---! ////

/**
 * isValidTestimonial:
 *   Utilized alongsize create and update methods,
 *   where testimonial is passed as the request body.
 *   Testimonials require a name, date, and content
 *   Builds a custom error message and returns with 400 status
 */
async function isValidTestimonial(req, res, next) {
  // Acquire testimonial from body of create/update request
  const testimonial = { ...req.body }

  // Build custom error message
  let message = ""
  if (!testimonial.name) message += "Name required. "
  if (!testimonial.title) message += "Title required. "
  if (!testimonial.message) message += "Message required. "

  // Returns error or sets res.locals to pass thru
  if (message !== "") {
    return next({ status: 400, message })
  }
  res.locals.validTestimonial = testimonial
  return next()
}
/**
 * testimonialExists:
 *   Looks up testimonial according to param or request body
 *   Passes the testimonial thru res.locals if found
 *   Otherwise returns error message with 404 status
 */
async function testimonialExists(req, res, next) {
  // Locate ID from param or request body
  let id = ""
  if (req.params.testimonial_id) {
    id = req.params.testimonial_id
  } else {
    id = req.body.data.testimonial_id
  }

  // Read the appropriate testimonial,
  // then take the first item of the list
  const testimonialList = await service.read(id)
  const testimonial = testimonialList[0]

  // Return the blog if found, or return 404 message
  if (testimonial) {
    res.locals.foundTestimonial = testimonial
    return next()
  }
  next({
    status: 404,
    message: `Testimonial ${req.params.testimonial_id} cannot be found.`,
  })
}

//// !--- HANDLERS for HTTP requests for blog resources ---! ////

/**
 * List:
 *   @returns array of all testimonial objects
 */
async function list(req, res) {
  let data = await service.list()
  res.json({ data })
}

/**
 * Create:
 *   @returns HTTP status 201 + the created testimonial object
 */
async function create(req, res) {
  // Locate validated testimonial object
  const testimonial = res.locals.validTestimonial;

  // Create testimonial entry utilizing service
  const data = await service.create(testimonial);

  // Return status and data
  res.status(201).json({ data });
}

/**
 * Read:
 *   @returns found testimonial object, if it exists
 */
 function read(req, res) {
  // Locate validated testimonial object
  const data = res.locals.foundTestimonial;

  // Pass thru data
  res.json({ data })
}

/**
 * Update:
 *   @returns updated testimonial object
 */
 async function update(req, res) {
  const data = await service.update(res.locals.validTestimonial, res.locals.foundTestimonial.testimonial_id);
  res.json({ data: data[0] });
}

/**
 * Delete:
 *   @returns HTTP status 204 + the deleted (empty) testimonial object
 */
 async function destroy(req, res, next) {
  const id = res.locals.foundTestimonial.testimonial_id;
  const data = await service.delete(id);
  res.status(204).json({ data });
}

// Export modules
module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [asyncErrorBoundary(isValidTestimonial), create],
  read: [asyncErrorBoundary(testimonialExists), read],
  update: [asyncErrorBoundary(testimonialExists), asyncErrorBoundary(isValidTestimonial), update],
  delete: [asyncErrorBoundary(testimonialExists), destroy],
}
