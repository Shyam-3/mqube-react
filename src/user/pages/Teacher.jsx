import { useEffect } from 'react'
import { usePageStyles } from '../../utils/usePageStyles'

export function Teacher() {
  usePageStyles(['/user/assets/css/teacher.css'])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/user/assets/js/teacherForm.js'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <section className="teacher-hero">
        <div className="teacher-hero-overlay"></div>
        <div className="teacher-hero-content">
          <h1>Teacher Registration</h1>
          <p>
            Join our community of inspiring educators.
            <br />You bring expertise, we provide the platform.
          </p>
        </div>
      </section>

      <form id="teacherForm">
        <section className="teacher-form-section">
          <div className="container">
            <div className="form-box">
              <h4 className="form-title">Profile Information</h4>
              <div className="row gx-4 gy-3 mt-2">
                <div className="col-md-6">
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-control custom-input" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Qualification *</label>
                  <select className="form-select custom-input" required>
                    <option value="">Select</option>
                    <option>High SchoolDiploma / Equivalent</option>
                    <option>Associate's Degree (A.A., A.S., or equivalent)</option>
                    <option>Bachelor's Degree (B.A., B.S., B.Ed., or equivalent)</option>
                    <option>Master's Degree (M.A., M.S., M.Ed., MBA, or equivalent)</option>
                    <option>Doctorate (Ph.D., Ed.D., J.D., M.D., or equivalent)</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Subjects *</label>
                  <select className="form-select custom-input" required>
                    <option value="">Select Subjects</option>
                    <option>Maths</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                    <option>Computer Science</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Experience *</label>
                  <select className="form-select custom-input" required>
                    <option value="">Years</option>
                    {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                    <option>15+</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Months *</label>
                  <select className="form-select custom-input" required>
                    <option value="">Months</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-box">
              <h4 className="form-title">Contact Details</h4>
              <div className="row gx-4 gy-3">
                <div className="col-md-6">
                  <label className="form-label">Contact No *</label>
                  <input id="contactNo" type="text" className="form-control custom-input" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">WhatsApp No *</label>
                  <input id="whatsappNo" type="text" className="form-control custom-input" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Id *</label>
                  <input id="emailId" type="email" className="form-control custom-input" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Skype Id</label>
                  <input type="text" className="form-control custom-input" />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea className="form-control custom-input" rows="3"></textarea>
                </div>
              </div>
            </div>

            <div className="form-box">
              <h4 className="form-title">Availability & Equipment</h4>
              <div className="row gx-4 gy-4">
                <div className="col-md-6">
                  <label className="form-label">Working Hours</label>
                  <label className="radio-option">
                    <input type="radio" name="hours" /> Full Time
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="hours" /> Part Time
                  </label>

                  <label className="form-label mt-3">High speed net connection</label>
                  <label className="radio-option">
                    <input type="radio" name="internet" /> Yes
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="internet" /> No
                  </label>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Ready to work in early morning</label>
                  <label className="radio-option">
                    <input type="radio" name="early" /> Yes
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="early" /> No
                  </label>

                  <label className="form-label mt-3">Do you have digital pen?</label>
                  <label className="radio-option">
                    <input type="radio" name="pen" /> Yes
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="pen" /> No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="form-box">
          <h4 className="form-title">Attachments</h4>
          <div className="row gx-4 gy-3">
            <div className="col-md-4">
              <label className="form-label">Resume *</label>
              <input type="file" className="form-control file-input" required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Identity proof *</label>
              <input type="file" className="form-control file-input" required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Highest degree *</label>
              <input type="file" className="form-control file-input" required />
            </div>
          </div>
        </div>

        <div className="form-box">
          <h4 className="form-title">How Did You Hear About Us?</h4>
          <div className="row gx-4 gy-3">
            <div className="col-md-3">
              <label className="radio-option">
                <input type="radio" name="hear" /> News Paper
              </label>
            </div>
            <div className="col-md-3">
              <label className="radio-option">
                <input type="radio" name="hear" /> Search Engine
              </label>
            </div>
            <div className="col-md-3">
              <label className="radio-option">
                <input type="radio" name="hear" /> Social Media
              </label>
            </div>
            <div className="col-md-3">
              <label className="radio-option">
                <input type="radio" name="hear" /> Others
              </label>
            </div>
          </div>
        </div>

        <div className="terms-submit-box text-center">
          <label className="terms-check">
            <input type="checkbox" id="agreeCheck" /> I agree to terms & conditions
          </label>

          <div className="button-row">
            <button type="button" className="btn-reset">Reset</button>
            <button type="button" className="btn-submit">Submit</button>
          </div>
        </div>
      </form>

      <div id="resetOverlay" className="overlay">
        <div className="popup-box">
          <h3 className="popup-title">Clear the form?</h3>
          <p className="popup-text">All entered details will be lost. Do you want to continue?</p>
          <div className="popup-buttons">
            <button id="resetCancel" className="btn-cancel">Cancel</button>
            <button id="resetConfirm" className="btn-yes">Yes, Reset</button>
          </div>
        </div>
      </div>

      <div id="successOverlay" className="overlay">
        <div className="popup-box">
          <h3 className="popup-title">Form Submitted!</h3>
          <p className="popup-text">Your registration was successfully sent.<br />We'll get back to you soon.</p>
          <div className="popup-buttons">
            <button id="successOk" className="btn-yes">OK</button>
          </div>
        </div>
      </div>

      {/* Legacy script injected via useEffect for SPA compatibility */}
    </>
  )
}
