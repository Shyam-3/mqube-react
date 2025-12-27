import { useEffect } from 'react'
import { usePageStyles } from '../../utils/usePageStyles'

export function Testimonials() {
  usePageStyles(['/user/assets/css/testimonials.css'])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/user/assets/js/testimonials.js'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <header className="testimonial-hero">
        <div className="hero-overlay"></div>
        <div className="container text-center hero-content">
          <h1>What our students say</h1>
          <p className="top-text">Real stories - from across the world - highlighting MQube's impact</p>
        </div>
      </header>

      <section className="testimonials-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div
                className="testimonial-card d-flex align-items-center p-3"
                data-bs-toggle="modal"
                data-bs-target="#reviewModal"
                data-name="Student"
                data-text="I have been taking classes with MQube. The tutor genuinely takes interest and provides ample resources on areas I’m doubtful about."
                data-img="/user/assets/images/testimonials/person%201.png"
              >
                <div className="photo-wrap me-3">
                  <img src="/user/assets/images/testimonials/person%201.png" alt="Student 1" />
                </div>
                <div className="t-body">
                  <h5 className="t-name">Student</h5>
                  <p className="t-text">
                    I have been taking classes with MQube. The tutor genuinely takes interest and provides ample resources
                    on areas I’m doubtful about.
                  </p>
                </div>
                <img className="quote-mark" src="/user/assets/images/testimonials/quote.png" alt="Quote" />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="testimonial-card d-flex align-items-center p-3"
                data-bs-toggle="modal"
                data-bs-target="#reviewModal"
                data-name="Student"
                data-text="The coaching helped me take my next step toward my dream. Flexible classes and great support from tutors."
                data-img="/user/assets/images/testimonials/person%202.png"
              >
                <div className="photo-wrap me-3">
                  <img src="/user/assets/images/testimonials/person%202.png" alt="Student 2" />
                </div>
                <div className="t-body">
                  <h5 className="t-name">Student</h5>
                  <p className="t-text">
                    The coaching helped me take my next step toward my dream. Flexible classes and great support from
                    tutors.
                  </p>
                </div>
                <img className="quote-mark" src="/user/assets/images/testimonials/quote.png" alt="Quote" />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="testimonial-card d-flex align-items-center p-3"
                data-bs-toggle="modal"
                data-bs-target="#reviewModal"
                data-name="Student"
                data-text="MQube made learning simple. Notes, homework and monthly assessments keep me on track."
                data-img="/user/assets/images/testimonials/person%201.png"
              >
                <div className="photo-wrap me-3">
                  <img src="/user/assets/images/testimonials/person%201.png" alt="Student 3" />
                </div>
                <div className="t-body">
                  <h5 className="t-name">Student</h5>
                  <p className="t-text">MQube made learning simple. Notes, homework and monthly assessments keep me on track.</p>
                </div>
                <img className="quote-mark" src="/user/assets/images/testimonials/quote.png" alt="Quote" />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="testimonial-card d-flex align-items-center p-3"
                data-bs-toggle="modal"
                data-bs-target="#reviewModal"
                data-name="Student"
                data-text="Experienced tutors and flexible scheduling helped me improve my grades quickly."
                data-img="/user/assets/images/testimonials/person%202.png"
              >
                <div className="photo-wrap me-3">
                  <img src="/user/assets/images/testimonials/person%202.png" alt="Student 4" />
                </div>
                <div className="t-body">
                  <h5 className="t-name">Student</h5>
                  <p className="t-text">Experienced tutors and flexible scheduling helped me improve my grades quickly.</p>
                </div>
                <img className="quote-mark" src="/user/assets/images/testimonials/quote.png" alt="Quote" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="reviewModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content review-modal">
            <div className="modal-header border-0">
              <div className="d-flex align-items-center gap-3">
                <div className="modal-photo-wrap">
                  <img id="modalPhoto" alt="Reviewer" />
                </div>
                <div>
                  <h5 className="modal-name mb-0" id="modalName"></h5>
                  <small className="text-muted">Student</small>
                </div>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body pt-0">
              <img className="modal-quote" src="/user/assets/images/testimonials/quote.png" alt="Quote" />
              <p className="modal-text" id="modalText"></p>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy script injected via useEffect for SPA compatibility */}
    </>
  )
}
