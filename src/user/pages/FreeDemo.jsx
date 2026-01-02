import { useEffect } from 'react'
import { usePageStyles } from '../../utils/usePageStyles'

export function FreeDemo() {
  usePageStyles(['/user/assets/css/demo.css'])

  useEffect(() => {
    // Check if script already exists to prevent duplicates
    const existingScript = document.querySelector('script[src="/user/assets/js/demo.js"]')
    if (existingScript) return

    const script = document.createElement('script')
    script.src = '/user/assets/js/demo.js'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      // Reset initialization flag for next mount
      window.__DEMO_FORM_INITIALIZED__ = false
    }
  }, [])

  return (
    <>
      <section className="demo-hero">
        <div className="demo-hero-overlay"></div>
        <div className="demo-hero-content">
          <h1>Book a Free Demo Class</h1>
          <p>Fill in your details below – our representative will contact you soon.</p>
        </div>
      </section>

      <section className="demo-form-section">
        <div className="container">
          <div className="form-box">
            <h4 className="form-title">Profile Information</h4>
            <div className="row gx-4 gy-3 mt-2">
              <div className="col-md-6">
                <label className="form-label">I am a</label>
                <select className="form-select custom-input" id="iam">
                  <option>Select</option>
                  <option>Parent</option>
                  <option>Student</option>
                  <option>Guardian</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Full Name *</label>
                <input type="text" className="form-control custom-input" id="fullname" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <select className="form-select custom-input" id="gender">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Board *</label>
                <select className="form-select custom-input" id="board">
                  <option>Select</option>
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>ISC</option>
                  <option>State Board</option>
                  <option>Matriculation</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Grade/Level *</label>
                <select className="form-select custom-input" id="grade">
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Email Id *</label>
                <input type="email" className="form-control custom-input" id="email" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Contact No *</label>
                <input type="text" className="form-control custom-input" id="contact" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Whatsapp No *</label>
                <input type="text" className="form-control custom-input" id="whatsapp" />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea className="form-control custom-input" rows="3" id="address"></textarea>
              </div>
              <div className="col-md-6">
                <label className="form-label">Verification Code</label>
                <input type="text" className="form-control custom-input" id="vcode" />
              </div>
            </div>
          </div>

          <div className="submit-row text-center">
            <button type="button" className="btn-reset" id="resetBtn">
              Reset
            </button>
            <button type="button" className="btn-submit" id="submitBtn">
              Submit
            </button>
          </div>
        </div>
      </section>

      <div className="overlay" id="overlay"></div>
      <div className="popup-box" id="resetPopup">
        <h3 className="popup-title">Clear the form?</h3>
        <p className="popup-text">All entered details will be lost.<br />Do you want to continue?</p>
        <div className="popup-buttons">
          <button className="btn-cancel" id="cancelReset">Cancel</button>
          <button className="btn-yes" id="confirmReset">Yes, Reset</button>
        </div>
      </div>

      <div className="popup-box" id="submitPopup">
        <h3 className="popup-title">Form Submitted!</h3>
        <p className="popup-text">Your registration was successfully sent.<br />We’ll get back to you soon.</p>
        <div className="popup-buttons">
          <button className="btn-yes" id="submitOk">OK</button>
        </div>
      </div>

      {/* Legacy script injected via useEffect for SPA compatibility */}
    </>
  )
}
