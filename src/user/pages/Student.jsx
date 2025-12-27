import { useEffect } from 'react'
import { usePageStyles } from '../../utils/usePageStyles'

export function Student() {
  usePageStyles(['/user/assets/css/student.css'])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/user/assets/js/studentForm.js'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <section className="student-hero">
        <div className="student-hero-overlay"></div>
        <div className="student-hero-content">
          <h1>Student Registration</h1>
          <p>Register and get matched with expert tutors today.</p>
        </div>
      </section>

      <form id="studentForm">
        <section className="student-form-section">
          <div className="container">
            <div className="form-box">
              <h4 className="form-title">Profile Information</h4>
              <div className="row gx-4 gy-3 mt-2">
                <div className="col-md-6">
                  <label className="form-label">Student Name *</label>
                  <input type="text" className="form-control custom-input" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <select className="form-select custom-input">
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Parent Name *</label>
                  <input type="text" className="form-control custom-input" required />
                </div>
              </div>
            </div>

            <div className="form-box">
              <h4 className="form-title">Academic & Contact Details</h4>
              <div className="row gx-4 gy-3 mt-2">
                <div className="col-md-6">
                  <label className="form-label">Subjects *</label>
                  <select className="form-select custom-input">
                    <option value="">Select</option>
                    <option>Maths</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                    <option>Computer Science</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Grade/Level *</label>
                  <select className="form-select custom-input">
                    <option value="">Select</option>
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
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Board *</label>
                  <select className="form-select custom-input">
                    <option value="">Select</option>
                    <option>ISC</option>
                    <option>ICSE</option>
                    <option>CBSE</option>
                    <option>Stateboard</option>
                    <option>Matriculation</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">School Name *</label>
                  <input type="text" className="form-control custom-input" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Contact No *</label>
                  <input id="contactNo" type="text" className="form-control custom-input" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">WhatsApp No</label>
                  <input id="whatsappNo" type="text" className="form-control custom-input" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Id *</label>
                  <input id="emailId" type="email" className="form-control custom-input" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea className="form-control custom-input" rows="3"></textarea>
                </div>
              </div>
            </div>

            <div className="form-box">
              <h4 className="form-title">How Did You Hear About Us?</h4>
              <div className="row gx-4 gy-3 mt-2">
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
              <div className="button-row">
                <button type="button" className="btn-reset">Reset</button>
                <button type="button" className="btn-submit">Submit</button>
              </div>
            </div>
          </div>
        </section>
      </form>

      <div id="resetOverlay" className="overlay">
        <div className="popup-box">
          <h3 className="popup-title">Clear the form?</h3>
          <p className="popup-text">All entered details will be lost.<br />Do you want to continue?</p>
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
