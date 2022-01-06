// Import knex object for database connection
const knex = require('../db/connection');

//// !--- SERVICES for HTTP requests for event resources ---! ////

/**
 * List:
 *   @return array of all event objects,
 *   sorted by event ID
*/
function list() {
  return knex("events").select("*").orderBy("event_id")
}

/**
 * Create:
 *   @input event object
 *   @return created event object from db
 */
function create(event) {
  return knex("events")
    .insert(event)
    .returning("*")
    .then((createdEvents) => createdEvents[0])
}

/**
 * Read:
 *   @input event ID
 *   @return array of events with given ID
 */
function read(id) {
  return knex("events as e").select("*").where({ "e.event_id": id });
}

/**
 * Update:
 *   @input updated event object, original event ID
 *   @return array of events with given ID (after update)
 */
function update(updatedEvent, id) {
  return knex("events")
    .select("*")
    .where({ event_id: id })
    .update(updatedEvent, "*")
}

/**
 * Destroy:
 *   @input event ID to destroy
 *   @return array of destroyed event objects (should be empty)
 */
function destroy(id) {
  return knex("events").where({ event_id: id }).del()
}

// Export modules
module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
}