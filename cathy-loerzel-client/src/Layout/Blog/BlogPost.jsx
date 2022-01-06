import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player"

export default function BlogPost({ id }) {
  const [blog, setBlog] = useState({})
  const [err, setErr] = useState("")

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/blogs/${id}`
    fetch(url)
      .then(res => res.json())
      .then((res) => setBlog(res.data))
      .catch(setErr)
  }, [id])

  const PodcastAside = () => (
    <aside className="center-box">
      <audio
        preload="none"
        controls="controls"
      >
        <source
          type="audio/mpeg"
          src={blog.audio}
        />
        <a href={blog.audio}>
          {blog.audio}
        </a>
      </audio>
      <br />
      <br />
      <a
        className="button"
        href="https://itunes.apple.com/us/podcast/the-allender-center-podcast/id936250143"
        target="_blank" rel="noreferrer"
      >
        iTunes
      </a>
      <a
        className="button"
        href="http://www.stitcher.com/podcast/the-seattle-school/the-allender-center-podcast?refid=stpr"
        target="_blank" rel="noreferrer"
      >
        Stitcher
      </a>
      <br />
      <br />
      <a
        className="button"
        href="http://theallendercenter.libsyn.com/rss"
        target="_blank" rel="noreferrer"
      >
        RSS
      </a>
      <a
        className="button"
        href="http://traffic.libsyn.com/theallendercenter/TAC171_Story_Sage_Part_Three.mp3"
        target="_blank"
        download rel="noreferrer"
      >
        Download
      </a>
    </aside>
  )

  const Signature = () => (
    <img
      src="https://storage.googleapis.com/cathy-loerzel-img/cathy-loerzel-signature.png"
      alt="Cathy Loerzel"
      className="signature"
    />
  )

  return (
    <div className="blog-post w-container">
      {err}
      <h1>{blog.title}</h1>
      <div className="col-3">
        <Link to={`/blog/${blog.category}`}>
          <em>&larr; Back to all {blog.category}</em>
        </Link>
        <Link to={`/blog/topic/${blog.topic}`}>
          <h4 className={`white-text ${blog.topic}`}>{blog.topic}</h4>
        </Link>
        <h5>Published on {blog.date && blog.date.slice(0, 10)}</h5>
      </div>
      <div className="row">
        {blog.video
          ? <ReactPlayer url={blog.video} controls />
          : <a href={blog.url} target="_blank" rel="noreferrer">
            <img
              src={blog.img}
              alt={blog.title}
              className="image-blog"
            />
          </a>
        }
        {blog.audio && <PodcastAside />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      {blog.category === "writing" && <Signature />}
    </div>
  )
}