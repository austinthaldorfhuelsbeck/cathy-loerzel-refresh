import { Link } from "react-router-dom"

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer wf-section">
      <div className="content-wrapper w-container">
        <div className="flex-space">
          <div className="_90-column">
            <div className="footer-links">
              <Link to="/" className="footer-link" onClick={scrollToTop}>Home</Link>
              <Link to="/blog" className="footer-link" onClick={scrollToTop}>Blog</Link>
              <Link to="/blog/writing" className="footer-link-alt" onClick={scrollToTop}>&#10551;Writing</Link>
              <Link to="/blog/podcasts" className="footer-link-alt" onClick={scrollToTop}>&#10551;Podcasts</Link>
              <Link to="/blog/teaching" className="footer-link-alt" onClick={scrollToTop}>&#10551;Teaching</Link>
              <Link to="/redeeming-heartache" className="footer-link" onClick={scrollToTop}>Redeeming Heartache</Link>
              <Link to="/events" className="footer-link" onClick={scrollToTop}>Events</Link>
              <Link to="/coaching" className="footer-link" onClick={scrollToTop}>Coaching</Link>
              <Link to="/contact" className="footer-link" onClick={scrollToTop}>Contact</Link>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://instagram.com/cathy.loerzel" target="_blank" rel="noreferrer">
              <div className="social-icon instagram w-inline-block"></div>
            </a>
            <a href="https://twitter.com/cathyloerzel" target="_blank" rel="noreferrer">
              <div className="social-icon twitter w-inline-block"></div>
            </a>
          </div>
        </div>
        <div className="footer-notice">
          <div className="footer-notice-box"></div>
          <div className="to-top w-hidden-medium w-inline-block" onClick={scrollToTop}></div>
        </div>
      </div>
    </footer>
  )
}