// Import Middleware for service and errors
const service = require('../services/blogsService');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');


//// !--- VALIDATION for blog resources ---! ////

/**
 * isValidBlog:
 *   Utilized alongside create and update methods,
 *   where blog is passed as the request body.
 *   Blogs require a title, category, text, and img
 *   Builds a custom error message and returns with 400 status
 */
async function isValidBlog(req, res, next) {
  // Acquire blog from body of create/update request
  const blog = { ...req.body };

  // Build custom error message
  let message = "";
  if (!blog.title) message += "Title required. ";
  if (!blog.category) message += "Category required. ";
  if (!blog.text) message += "Description required. ";
  if (!blog.img) message += "Image required. ";

  // Returns error or sets res.locals to pass thru
  if (message !== "") {
    return next({ status: 400, message });
  }
  res.locals.validBlog = blog;
  return next();
}
/**
 * blogExists:
 *   Looks up blog according to param or request body
 *   Passes the blog thru res.locals if found
 *   Otherwise returns error message with 404 status
 */
async function blogExists(req, res, next) {
  // Locate ID from param or request body
  let id = "";
  if (req.params.blog_id) {
    id = req.params.blog_id;
  } else if (req.body.data.blog_id) {
    id = req.body.data.blog_id;
  }

  // Read the appropriate blog,
  // then take the first item of the list
  const blogsList = await service.read(id);
  const blog = blogsList[0];

  // Return the blog if found, or return 404 message
  if (blog) {
    res.locals.foundBlog = blog;
    return next();
  }
  next({
    status: 404,
    message: `Blog ${req.params.blog_id} cannot be found.`,
  })
}

//// !--- APPEND for create requests with incomplete blog object ---! ////

/**
 * appendData:
 *   Submitted blog objects without id, topic, or date
 *   are completed and passed thru res.locals
 */
async function appendData(req, res, next) {
  // Acquire blog object from res.locals
  const blog = res.locals.validBlog;

  // Append an ID created from title if no ID provided
  if (!blog.blog_id) {
    blog.blog_id = blog.title.replace(/\s/g, "-").toLowerCase();
  }

  // Append topic "general" if no topic provided
  if (!blog.topic) blog.topic = "general";

  // Append today's date if no date provided
  if (!blog.date) {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    today = mm + "-" + dd + "-" + yyyy;
    blog.date = today;
  }

  // Pass thru completed blog object
  res.locals.validBlog = blog;
  return next();
}

//// !--- HANDLERS for HTTP requests for blog resources ---! ////

/**
 * List:
 *   @returns array of all blog objects if no query provided
 *   @returns array of all blog objects matching category if category query
 *   @returns array of all blog objects matching topic if topic query
*/
async function list(req, res) {
  // Identify queries, if any
  const category = req.query.category;
  const topic = req.query.topic;

  // Assemble data array
  // Utilizes seperate services for queries
  let data = [];
  if (category) {
    data = await service.listCategory(category);
  } else if (topic) {
    data = await service.listTopic(topic);
  } else {
    data = await service.list();
  }

  // Return data
  res.json({ data });
}
/**
 * List Featured:
 *   @returns array of all blog objects which are featured
 */
async function listFeatured(req, res) {
  let data = await service.listFeatured();
  res.json({ data });
}

/**
 * Create:
 *   @returns HTTP status 201 + the created blog object
 */
async function create(req, res) {
  // Locate validated blog object
  const blog = res.locals.validBlog;

  // Create blog entry utilizing service
  const data = await service.create(blog);

  // Return status and data
  res.status(201).json({ data });
}

/**
 * Read:
 *   @returns found blog object, if it exists
 */
function read(req, res) {
  // Locate validated blog object
  const data = res.locals.foundBlog;

  // Pass thru data
  res.json({ data })
}

/**
 * Update:
 *   @returns updated blog object
 */
 async function update(req, res) {
  const data = await service.update(res.locals.validBlog, res.locals.foundBlog.blog_id);
  res.json({ data: data[0] });
}

/**
 * Delete:
 *   @returns HTTP status 204 + the deleted (empty) blog object
 */
 async function destroy(req, res, next) {
  const id = res.locals.foundBlog.blog_id;
  const data = await service.delete(id);
  res.status(204).json({ data });
}

// Export modules
module.exports = {
  list: [asyncErrorBoundary(list)],
  listFeatured: [asyncErrorBoundary(listFeatured)],
  create: [asyncErrorBoundary(isValidBlog), appendData, create],
  read: [asyncErrorBoundary(blogExists), read],
  update: [asyncErrorBoundary(blogExists), asyncErrorBoundary(isValidBlog), update],
  delete: [asyncErrorBoundary(blogExists), destroy],
}