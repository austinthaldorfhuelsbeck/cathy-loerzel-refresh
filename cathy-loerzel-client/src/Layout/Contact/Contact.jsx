import ContactForm from "../Components/ContactForm"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function Contact() {
  return (
    <div>
    <div className="hero-section mb-5">
      <div className="content-wrapper w-container">
        <div className="hero-text-box-2">
          <div>
            <h1 className="h1-white white">Interested in bringing Cathy to your community?</h1>
          </div>
        </div>
        <div class="hero-flex">
          <div class="hero-image-2 _2"></div>
        </div>
      </div>
    </div>
      <ContactForm />
      <FeaturedContent />
    </div>
  )
}