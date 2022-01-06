import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function FeaturedBlog() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const [featuredBlog, setFeaturedBlog] = useState({})
  const [err, setErr] = useState("")

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/blogs/featured`
    fetch(url)
      .then(res => res.json())
      .then((res) => setFeaturedBlog(res.data[0]))
      .catch(setErr)
  }, [])

  return (
    <div className="mb-4 w-container" data-aos="fade-up">
      {err}
      <h1>Featured Blog</h1>
      <Link
        to={`/blog/${featuredBlog.category}/${featuredBlog.blog_id}`}
        className="text-img-container"
        onClick={scrollToTop}
      >
        <img
          src={featuredBlog.img}
          alt="Featured Post - Cathy Loerzel's Blog"
          className="image featured-image shadow"
          style={{ width:"100%" }}
        />
        <div className="title-link featured-text">
          <p>{featuredBlog.title}</p>
        </div>
      </Link>
    </div>
  )
}