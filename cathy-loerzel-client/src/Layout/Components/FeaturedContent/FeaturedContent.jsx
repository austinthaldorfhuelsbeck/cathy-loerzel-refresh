import { Link } from "react-router-dom"

export default function FeaturedContent() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // TEMPORARY DATA
  const topics = [
    {
      id: "redeeming-heartache",
      name: "Redeeming Heartache",
      color: "#e4cdc2"
    },
    {
      id: "leadership",
      name: "Leadership",
      color: "#934a26"
    },
    {
      id: "sexual-abuse",
      name: "Sexual Abuse",
      color: "#a79186"
    },
    {
      id: "allender-methodology",
      name: "Allender Methodology",
      color: "#a8baba"
    },
    {
      id: "spiritual-warfare",
      name: "Spiritual Warfare",
      color: "#ac612c"
    }
  ]

  const SectionSort = () => (
    <div className="w-container" data-aos="fade-up">
      <div className="flex-center">
        <div className="intro-box">
          <div className="intro-text-box">
            <Link to="/blog/writing" className="title-link" onClick={scrollToTop}>Writing</Link>
            <div className="top-border _5">
              <Link to="/blog/writing" className="text-link" onClick={scrollToTop}>Blog posts and more...</Link>
            </div>
          </div>
        </div>
        <div className="intro-box-alt1">
          <div className="intro-text-box">
            <Link to="/blog/podcasts" className="title-link" onClick={scrollToTop}>Podcasts</Link>
            <div className="top-border _5">
              <Link to="/blog/podcasts" className="text-link" onClick={scrollToTop}>Features and guest appearances</Link>
            </div>
          </div>
        </div>
        <div className="intro-box-alt2 no-border">
          <div className="intro-text-box">
            <Link to="/blog/teaching" className="title-link" onClick={scrollToTop}>Teaching</Link>
            <div className="top-border _5">
              <Link to="/blog/teaching" className="text-link" onClick={scrollToTop}>Recorded lectures and teaching</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const TopicSort = () => (
    <ul className="category-thumbnails flex-container">
      {topics.map((topic) => (
        <li key={topic.id} className="category-item" data-aos="fade-up">
          <Link to={`/blog/topic/${topic.id}`} onClick={scrollToTop}>
            <div className={`circle-color ${topic.id}`}></div>
            <h4 className="over-img">{topic.name}</h4>
          </Link>
        </li>
      ))}
    </ul>
  )
  
  return (
    <div className="w-container">
      <section id="visual-nav" className="cards-section">
        <h1>Categories</h1>
        <SectionSort />
        <h1>Topics</h1>
        <TopicSort />
      </section>
    </div>
  )
}