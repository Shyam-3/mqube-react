import { Link } from 'react-router-dom'
import { usePageStyles } from '../../utils/usePageStyles'

export function Home() {
  usePageStyles(['/user/assets/css/home.css'])

  return (
    <>
      <header className="hero-section">
        <div className="overlay"></div>
        <div className="container text-center hero-content">
          <p className="top-text">One to One Tuition</p>

          <h1 className="fw-bold text-white mb-3">
            Looking for strong concepts and better grades? <br />
            Your search ends here.
          </h1>

          <p className="hero-subtext text-white">
            Live online classes with expert tutors across subjects, languages, competitive exams, and even music –
            flexible scheduling, notes, homework, and monthly assessments.
          </p>

          <div className="row text-white stats-row">
            <div className="col-md-4">
              <h3 className="fw-bold">20+</h3>
              <p>Years</p>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold">2000+</h3>
              <p>Students</p>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold">600+</h3>
              <p>Tutors</p>
            </div>
          </div>

          <div className="mt-3">
            <Link to="/freeDemo" className="btn btn-warning fw-semibold me-3">
              Get a Free Demo
            </Link>
            <Link to="/services" className="btn btn-outline-light fw-semibold">
              View Services
            </Link>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <h3 className="fw-bold text-primary mb-3">About us</h3>

          <div className="row align-items-center">
            <div className="col-md-7">
              <p className="about-text">
                Welcome to MQube Tuitions, The right place for the smart education. Be smart with smart classes and get
                better grades. Step into online tuition with our expert team. Here you can get professional and
                well-experienced tutors for every subject. We guarantee, it will get improvement in your grades. Our
                experts are ready to distribute their experience with you to delight your future now and ahead.
              </p>
              <Link to="/aboutUs" className="text-primary fw-semibold">
                More →
              </Link>
            </div>

            <div className="col-md-5 col-12 text-center mt-3 mt-md-0">
              <div className="quote-wrapper">
                <img src="/user/assets/images/home/quote-bg.jpg" className="quote-bg" alt="Quote background" />
                <h2 className="quote-text">
                  No Student Should
                  <br />
                  Be Left Behind
                  <br />
                  Without A Teacher
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="register-section py-5">
        <div className="container text-center">
          <h3 className="fw-bold text-white mb-4">Register Now</h3>

          <div className="row g-4">
            <div className="col-md-4">
              <Link to="/teacher" className="reg-link">
                <div className="reg-card">
                  <img src="/user/assets/images/home/teacher.png" className="reg-icon" alt="For Teachers" />
                  <p className="mt-2 text-white fw-semibold">For Teachers</p>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/student" className="reg-link">
                <div className="reg-card">
                  <img src="/user/assets/images/home/students.png" className="reg-icon" alt="For Students" />
                  <p className="mt-2 text-white fw-semibold">For Students</p>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/freeDemo" className="reg-link">
                <div className="reg-card">
                  <img src="/user/assets/images/home/demo.png" className="reg-icon" alt="For Free Demo" />
                  <p className="mt-2 text-white fw-semibold">For Free Demo</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section py-5">
        <div className="container">
          <h3 className="fw-bold text-primary mb-4">Testimonials</h3>

          <div className="testimonial-wrapper">
            <div className="arrow left-arrow">
              <span>&lt;</span>
            </div>

            <div className="testimonial-card">
              <img src="/user/assets/images/home/test1.jpg" className="t-photo" alt="Testimonial 1" />

              <div className="t-content">
                <h5 className="fw-bold">Bhayva, USA</h5>
                <p className="t-role">Tutor</p>

                <p className="t-desc">
                  I have been taking online chemistry classes with MQube Tuitions since 2016. The tutor genuinely takes
                  interest in an individual and provides ample amount of resources on the areas which I’m doubtful about.
                </p>

                <img src="/user/assets/images/home/quote-icon.png" className="quote-icon" alt="Quote" />
              </div>
            </div>

            <div className="testimonial-card">
              <img src="/user/assets/images/home/test2.jpg" className="t-photo" alt="Testimonial 2" />

              <div className="t-content">
                <h5 className="fw-bold">Rebecca Bose, Kerala</h5>
                <p className="t-role">Student</p>

                <p className="t-desc">
                  I signed up with MQube for NEET biology. The coaching really helped me put forth my next step toward my
                  dream to be a doctor.
                </p>

                <img src="/user/assets/images/home/quote-icon.png" className="quote-icon" alt="Quote" />
              </div>
            </div>

            <div className="arrow right-arrow">
              <span>&gt;</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
