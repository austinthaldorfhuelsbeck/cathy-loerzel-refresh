exports.up = function (knex) {
  return knex.schema.createTable("testimonials", (table) => {
    table.integer("testimonial_id").primary()
    table.string("name")
    table.string("title")
    table.string("message", 1000)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("testimonials")
}
