import ContactForm from "../Components/ContactForm"
import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function Coaching() {
  const img1 = "https://cdn.theseattleschool.edu/wp-content/uploads/2017/09/Cathy-2020-104-scaled-e1605727146221.jpg"
  const img2 = "https://storage.googleapis.com/cathy-loerzel/Images/sunset-wide.jpg"
  const img3 = "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
  const img4 = "https://www.battlefieldministries.org/wp-content/uploads/2019/04/U-Diagram-277x300.jpg"

  return (
    <div>
      <img
        src="https://cdn.theallendercenter.org/wp-content/uploads/2016/02/story-workshop-banner-1600x350.jpg"
        alt="Story Workshop"
        className="image-blog"
      />
      <div className="w-container">
        <h3 className="lg-title">Work with Cathy</h3>
        <div className="row my-5">
          <div className="col col-md-8">
            <h2>Intensives</h2>
            <p>Depending on her schedule and availability, Cathy can meet with you in an intensive format to do work on your stories of heartache and trauma. These can either be in person or in virtual format. They consist of 12 hours of sessions over 2 days. She can meet with an individual, group, or couple.</p>
          </div>
          <div className="col col-md-4">
            <img src={img1} alt="Cathy Headshot" />
          </div>
        </div>
        <h2>Retreats</h2>
        <p>Cathy is in the process of designing retreats that combine story and trauma work as well as body work and prayer/spiritual healing. If you are interested in bringing her in to run a retreat for your community, she would love to collaborate with you.</p>
        <div className="row my-5">
          <img src={img2} alt="Beach Sunset" />
        </div>
        <div className="row my-5">
          <div className="col col-md-4">
            <img src={img3} alt="Women laughing" />
          </div>
          <div className="col col-md-8">
            <h2>Leadership and Formational Coaching</h2>
            <p>Leading an organization, being a therapist, or running groups is difficult work that needs care and attunement to your own story as you tend to others. Cathy offers 6 coaching sessions to help you do some story work, understand where you are in your formational trajectory and gain clarity and wisdom as to your next steps.</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col col-md-8">
            <h2>Speaking/Teaching</h2>
            <p>Cathy is available to speak to your community, church, or organization. She teaches on the <em>Orphan, Widow, Stranger</em> content found in <strong>Redeeming Heartache</strong> in depth.</p>
            <p>She teaches on trauma, story and healing, spiritual warfare, and her hallmark model called the “U-Diagram” on the trajectory of healing the human heart.</p>
          </div>
          <div className="col col-md-4">
            <img src={img4} alt="Cathy Headshot" width="300px" />
          </div>
        </div>
      </div>
      <ContactForm />
      <NewsletterForm />
      <FeaturedContent />
      <ProductBanner />
    </div>
  )
}