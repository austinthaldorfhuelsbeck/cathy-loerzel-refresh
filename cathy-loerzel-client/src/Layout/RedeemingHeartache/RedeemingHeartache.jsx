import ReactPlayer from "react-player"

import ProductBanner from "../Components/ProductBanner"
import Testimonials from "./Testimonials"
import FeaturedBlog from "../Components/FeaturedContent/FeaturedBlog"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function RedeemingHeartache() {
  const videoSrc = "https://www.youtube.com/watch?v=sToxP2Q3hLM"

  return (
    <>
      <section className="rh-section">
        <div className="w-container py-5" data-aos="fade">
          <h1 className="lg-title">Reedeeming Heartache</h1>
          <h2>How Past Suffering Reveals Our True Calling</h2>
        </div>
        <ProductBanner />
        <div className="w-container py-5">
          <h3 data-aos="fade-up">Find freedom and healing from painful memories and relational struggles and learn how your past has uniquely prepared you to experience more joy.</h3>
          <p data-aos="fade-up">Tragedy and pain inevitably touch our lives in some way. We long to feel whole, but more often than not, the way we’ve learned to deal with our wounds pushes us away from the very restoration we need most. Renowned psychologist Dr. Dan Allender and counselor and teacher Cathy Loerzel present a life-changing process of true connection and healing with ourselves, God, and others.</p>
          <ReactPlayer url={videoSrc} className="mx-auto my-5" width="75%" data-aos="fade" />
          <p data-aos="fade-up">With a clear, biblically trustworthy method, Allender and Loerzel walk you through a journey of profound inner transformation–from the shame and hurt of old emotional wounds to true freedom and healing. Drawn from modern research and their pioneering work at The Allender Center, they will help you identify your core trauma in one of the three outcast archetypes–the widow, orphan, or stranger–and chart your path of growth into the God-given roles of priest, prophet, or leader. This book will help you learn:</p>
          <ul data-aos="fade-up">
            <li>What to do about feeling out-of-place and directionless</li>
            <li>How your coping mechanisms create a false sense of health</li>
            <li>How to embrace your divine calling and find lasting reconciliation</li>
            <li>How your heart wounds are your unique invitation to true strength and purpose.</li>
          </ul>
          <Testimonials />
          <h3 data-aos="fade-up">Your past pain does not dictate your life. Answer the call to healing and discover your life’s beautiful story and a future of hope and freedom.</h3>
          <h3 data-aos="fade-up">Don't wait. <a href="https://www.zondervan.com/p/redeeming-heartache/" target="_blank" rel="noreferrer">Pre-order today.</a></h3>
        </div>
      </section>
      <FeaturedBlog />
      <FeaturedContent />
    </>
  )
}