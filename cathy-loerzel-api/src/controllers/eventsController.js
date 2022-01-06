// Import Middleware for service and errors
const service = require('../services/eventsService');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');


//// !--- VALIDATION for event resources ---! ////

/**
 * isValidEvent:
 *   Utilized alongsize create and update methods,
 *   where event is passed as the request body.
 *   Events require a name, date, and content
 *   Builds a custom error message and returns with 400 status
 */
async function isValidEvent(req, res, next) {
  // Acquire event from body of create/update request
  const event = { ...req.body }

  // Build custom error message
  let message = ""
  if (!event.name) message += "Name required. "
  if (!event.date) message += "Date required. "
  if (!event.content) message += "Content required. "

  // Returns error or sets res.locals to pass thru
  if (message !== "") {
    return next({ status: 400, message })
  }
  res.locals.validEvent = event
  return next()
}
/**
 * eventExists:
 *   Looks up event according to param or request body
 *   Passes the event thru res.locals if found
 *   Otherwise returns error message with 404 status
 */
async function eventExists(req, res, next) {
  // Locate ID from param or request body
  let id = ""
  if (req.params.event_id) {
    id = req.params.event_id
  } else {
    id = req.body.data.event_id
  }

  // Read the appropriate event,
  // then take the first item of the list
  const eventList = await service.read(id)
  const event = eventList[0]

  // Return the blog if found, or return 404 message
  if (event) {
    res.locals.foundEvent = event
    return next()
  }
  next({
    status: 404,
    message: `Event ${req.params.event_id} cannot be found.`,
  })
}

//// !--- HANDLERS for HTTP requests for blog resources ---! ////

/**
 * List:
 *   @returns array of all event objects
 */
async function list(req, res) {
  let data = await service.list()
  res.json({ data })
}

/**
 * Create:
 *   @returns HTTP status 201 + the created event object
 */
async function create(req, res) {
  // Locate validated event object
  const event = res.locals.validEvent;

  // Create event entry utilizing service
  const data = await service.create(event);

  // Return status and data
  res.status(201).json({ data });
}

/**
 * Read:
 *   @returns found event object, if it exists
 */
 function read(req, res) {
  // Locate validated event object
  const data = res.locals.foundEvent;

  // Pass thru data
  res.json({ data })
}

/**
 * Update:
 *   @returns updated event object
 */
 async function update(req, res) {
  const data = await service.update(res.locals.validEvent, res.locals.foundEvent.event_id);
  res.json({ data: data[0] });
}

/**
 * Delete:
 *   @returns HTTP status 204 + the deleted (empty) event object
 */
 async function destroy(req, res, next) {
  const id = res.locals.foundEvent.event_id;
  const data = await service.delete(id);
  res.status(204).json({ data });
}

// Export modules
module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [asyncErrorBoundary(isValidEvent), create],
  read: [asyncErrorBoundary(eventExists), read],
  update: [asyncErrorBoundary(eventExists), asyncErrorBoundary(isValidEvent), update],
  delete: [asyncErrorBoundary(eventExists), destroy],
}
