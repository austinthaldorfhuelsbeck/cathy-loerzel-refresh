const testimonials = require("./01-testimonials.json")

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE testimonials RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("testimonials").insert(testimonials)
    })
}
