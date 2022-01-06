const blogs = require("./00-blogs.json")

exports.seed = function (knex) {
  return knex.raw("TRUNCATE TABLE blogs RESTART IDENTITY CASCADE").then(() => {
    return knex("blogs").insert(blogs)
  })
}
