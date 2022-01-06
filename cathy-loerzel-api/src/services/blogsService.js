// Import knex object for database connection
const knex = require('../db/connection');

//// !--- SERVICES for HTTP requests for blog resources ---! ////

/**
 * List:
 *   @return array of all blog objects,
 *   sorted by order number
*/
function list() {
  return knex("blogs").select("*").orderBy("order");
}
/**
 * List Category:
 *   @input string representing category
 *   @return array of all blog objects matching category,
 *   sorted by order number
 */
function listCategory(category) {
  return knex("blogs as b")
    .select("*")
    .where({ "b.category": category })
    .orderBy("b.order");
}
/**
 * List Topic:
 *   @input string representing topic
 *   @return array of all blog objects matching topic,
 *   sorted by order number
 */
function listTopic(topic) {
  return knex("blogs as b")
    .select("*")
    .where({ "b.topic": topic })
    .orderBy("b.order")
}
/**
 * List Featured:
 *   @return array of all blog object with featured=true,
 *   sorted by order number
 */
function listFeatured() {
  return knex("blogs as b")
    .select("*")
    .where({ "b.featured": true })
    .orderBy("b.order");
}

/**
 * Create:
 *   @input blog object
 *   @return created blog object from db
 */
function create(blog) {
  return knex("blogs")
    .insert(blog)
    .returning("*")
    .then((createdBlogs) => createdBlogs[0])
}

/**
 * Read:
 *   @input blog ID
 *   @return array of blogs with given ID
 */
function read(id) {
  return knex("blogs as b").select("*").where({ "b.blog_id": id });
}

/**
 * Update:
 *   @input updated blog object, original blog ID
 *   @return array of blogs with given ID (after update)
 */
function update(updatedBlog, id) {
  return knex("blogs")
    .select("*")
    .where({ blog_id: id })
    .update(updatedBlog, "*")
}

/**
 * Destroy:
 *   @input blog ID to destroy
 *   @return array of destroyed blog objects (should be empty)
 */
function destroy(id) {
  return knex("blogs").where({ blog_id: id }).del()
}

// Export modules
module.exports = {
  list,
  listCategory,
  listTopic,
  listFeatured,
  create,
  read,
  update,
  delete: destroy,
}