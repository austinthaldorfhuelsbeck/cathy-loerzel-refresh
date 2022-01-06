exports.up = function (knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("event_id")
    table.string("name")
    table.string("date")
    table.string("content", 10000)
    table.string("url")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("events")
}
