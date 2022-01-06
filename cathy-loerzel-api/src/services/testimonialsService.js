// Import knex object for database connection
const knex = require('../db/connection');

//// !--- SERVICES for HTTP requests for testimonial resources ---! ////

/**
 * List:
 *   @return array of all testimonial objects,
 *   sorted by testimonial ID
*/
function list() {
  return knex("testimonials").select("*").orderBy("testimonial_id")
}

/**
 * Create:
 *   @input testimonial object
 *   @return created testimonial object from db
 */
function create(testimonial) {
  return knex("testimonials")
    .insert(testimonial)
    .returning("*")
    .then((createdTestimonials) => createdTestimonials[0])
}

/**
 * Read:
 *   @input testimonial ID
 *   @return array of testimonials with given ID
 */
function read(id) {
  return knex("testimonials as t").select("*").where({ "t.testimonial_id": id });
}

/**
 * Update:
 *   @input updated testimonial object, original testimonial ID
 *   @return array of testimonials with given ID (after update)
 */
function update(updatedTestimonial, id) {
  return knex("testimonials")
    .select("*")
    .where({ testimonial_id: id })
    .update(updatedTestimonial, "*")
}

/**
 * Destroy:
 *   @input testimonial ID to destroy
 *   @return array of destroyed testimonial objects (should be empty)
 */
function destroy(id) {
  return knex("testimonials").where({ testimonial_id: id }).del()
}

// Export modules
module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
}