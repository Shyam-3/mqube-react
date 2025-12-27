import { Link } from 'react-router-dom'
import { CONTACT, MAP_URL } from '../utils/config'

export function Footer({ mapUrl = MAP_URL }) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4 py-4">
          <div className="col-lg-2 col-md-3 col-12">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutUs">About us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/howItWorks">How it works</Link></li>
              <li><Link to="/teacher">Registration</Link></li>
              <li><Link to="/contactUs">Contact Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-12">
            <h5 className="footer-title">Connect With Us</h5>
            <div className="footer-contact">
              <p>
                <i className="bi bi-telephone-fill"></i>{' '}
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i>{' '}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
              <p>
                <i className="bi bi-globe"></i>{' '}
                <a href={CONTACT.website} target="_blank" rel="noreferrer">
                  www.mqubetuitions.com
                </a>
              </p>
            </div>
            <h5 className="footer-title mt-3">Follow</h5>
            <ul className="footer-social-links">
              <li><a href="#" target="_blank" rel="noreferrer" title="Instagram"><i className="bi bi-instagram"></i></a></li>
              <li><a href="#" target="_blank" rel="noreferrer" title="Facebook"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#" target="_blank" rel="noreferrer" title="WhatsApp"><i className="bi bi-whatsapp"></i></a></li>
              <li><a href="#" target="_blank" rel="noreferrer" title="Twitter"><i className="bi bi-twitter-x"></i></a></li>
              <li><a href="#" target="_blank" rel="noreferrer" title="LinkedIn"><i className="bi bi-linkedin"></i></a></li>
            </ul>
          </div>

          <div className="col-lg-5 col-md-5 col-12">
            <h5 className="footer-title">Location</h5>
            <div className="footer-map" aria-label="Location map">
              <iframe
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps embed"
                title="MQube location"
              ></iframe>
            </div>
            <h5 className="footer-title mt-3">Visit</h5>
            <div className="footer-address">
              <p>{CONTACT.address}</p>
            </div>
          </div>
        </div>

        <div className="footer-copywrap">
          <div className="footer-divider"></div>
          <div className="footer-copyright text-center">
            <p>&copy; Copyright {new Date().getFullYear()} MQUBE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
