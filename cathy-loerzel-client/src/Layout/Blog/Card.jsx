import { Link } from "react-router-dom"

export default function Card({ blog }) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Link
      to={`/blog/${blog.category}/${blog.blog_id}`}
      className="grow"
      key={blog.blog_id}
      onClick={scrollToTop}
    >
      <div className="card" style={{ width: '18rem' }} data-aos="fade">
        <img src={blog.img} className="card-img-top" alt={blog.title} />
        <div className={`topic-banner ${blog.topic}`}></div>
        <div className="card-body">
          <h3 className="card-title">{blog.title}</h3>
          <p className="card-text text-link-3">
            {blog.text && (
              blog.text.length < 250 ? blog.text : blog.text.slice(0, 250) + "..."
            )}
          </p>
        </div>
      </div>
    </Link>
  )
}