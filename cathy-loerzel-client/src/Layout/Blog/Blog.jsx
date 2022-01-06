import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"
import Card from "./Card"

export default function Blog({ category, topic }) {
  const [blogs, setBlogs] = useState([])
  const [err, setErr] = useState("")

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/blogs`
    if (category) url += `?category=${category}`
    if (topic) url += `?topic=${topic}`
    fetch(url)
      .then(res => res.json())
      .then((res) => setBlogs(res.data))
      .catch(setErr)
  }, [category, topic])

  return (
    <div className="blog-full">
      {err}
      {(category || topic) ? (
        <Link to="/blog">
          <em>&larr; Back to all blogs</em>
        </Link>
      ) : ""}
      {(category === "teaching") ? "" : <FeaturedContent />}
      <div className="flex">
        {blogs.map((blog) => <Card blog={blog} />)}
      </div>
      {(category === "teaching") ? <FeaturedContent /> : ""}
    </div>
  )
}