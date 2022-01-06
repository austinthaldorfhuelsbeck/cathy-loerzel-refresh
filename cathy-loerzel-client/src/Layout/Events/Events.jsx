import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents"
import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function Events() {
  return (
    <div>
      <img
        src="https://cdn.theallendercenter.org/wp-content/uploads/2016/02/intimate-mystery-banner-1600x350.jpg"
        alt="Intimate Mystery"
        className="image-blog"
      />
      <UpcomingEvents />
      <NewsletterForm />
      <FeaturedContent />
      <ProductBanner />
    </div>
  )
}