import Mailchimp from "react-mailchimp-form"

export default function NewsletterForm() {
  return (
    <div id="newsletter-form" className="content-section wf-section">
      <div className="content-wrapper w-container">
        <div className="center-box">
          <div className="mini-title" data-aos="fade-up">
            connect with cathy<br />&amp;<br />Subscribe to her mailing list
          </div>
        </div>
      </div>
      <div className="content-wrapper w-container">
        <div className="_49-column-2">
          <div className="top-border-2 _10">
            <p data-aos="fade-up">Get promotions &amp; updates!</p>
            <div className="form-block-2">
              <Mailchimp
                action="https://gmail.us5.list-manage.com/subscribe/post?u=07d928836c4bfc5f2ac3958b0&amp;id=da7fe51007"
                fields={[
                  {
                    name: "EMAIL",
                    placeholder: "email",
                    type: "email",
                    required: true,
                  },
                  {
                    name: "NAME",
                    placeholder: "your name",
                    type: "text",
                    required: false,
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}