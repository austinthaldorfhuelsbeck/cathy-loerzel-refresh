import React, { useState } from "react"
import Blog from "./Blog"

export default function BlogsList({ blogs }) {
  const [toggle, setToggle] = useState(true)

  const renderList = () => {
    if (!toggle) return null
    return blogs.map((blog) => {
      return (
        <li className="list-group-item" key={blog.blog_id}>
          <Blog blog={blog} />
        </li>
      )
    })
  }

  const handleHide = () => setToggle(!toggle)

  return (
    <ul className="list-group py-3">
      <li className="list-group-item d-flex justify-content-between">
        <h5 className="my-auto">Blogs</h5>
        <p className="text-secondary my-auto" onClick={handleHide}>
          {toggle ? (
            "-"
          ) : (
            "+"
          )}
        </p>
      </li>
      {renderList()}
    </ul>
  )
}