import { CONTACT, MAP_URL } from '../../utils/config'
import { usePageStyles } from '../../utils/usePageStyles'

export function ContactUs() {
  usePageStyles(['/user/assets/css/contactUs.css'])

  return (
    <>
      <header className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container text-center hero-content">
          <h1>Contact Us</h1>
        </div>
      </header>

      <section className="contact-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h2 className="contact-title mb-4">Get in Touch</h2>

              <div className="contact-item d-flex align-items-start mb-3">
                <img src="/user/assets/images/contactUs/phone.png" alt="Phone" className="contact-icon me-3" />
                <div>
                  <h5 className="contact-label">Phone</h5>
                  <p className="contact-value">
                    <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-start mb-3">
                <img src="/user/assets/images/contactUs/mail.png" alt="Email" className="contact-icon me-3" />
                <div>
                  <h5 className="contact-label">Email</h5>
                  <p className="contact-value">
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-start mb-3">
                <img src="/user/assets/images/contactUs/web.png" alt="Website" className="contact-icon me-3" />
                <div>
                  <h5 className="contact-label">Website</h5>
                  <p className="contact-value">
                    <a href={CONTACT.website} target="_blank" rel="noreferrer">
                      www.mqubetuitions.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-start mb-3">
                <img
                  src="/user/assets/images/contactUs/location.png"
                  alt="Address"
                  className="contact-icon me-3"
                />
                <div>
                  <h5 className="contact-label">Address</h5>
                  <p className="contact-value">MQube Tuitions<br />{CONTACT.address}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="map-box">
                <iframe
                  src={MAP_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps embed"
                  className="contact-map-iframe"
                  title="MQube location map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
