import { usePageStyles } from '../../utils/usePageStyles'

export function Services() {
  usePageStyles(['/user/assets/css/services.css'])

  return (
    <>
      <section className="services-header">
        <div className="services-header-overlay"></div>
        <h1>Services</h1>
      </section>

      <section className="service-cards-section">
        <div className="container py-5">
          <div className="service-card-wrapper">
            <div className="service-card card-blue-left">
              <div className="icon-box-wrapper">
                <div className="tilted-box blue-box">
                  <img src="/user/assets/images/services/tution.png" alt="Online Tuition" />
                </div>
              </div>
              <div className="card-content blue-bg">
                <h3>Online Tution Support</h3>
                <p>
                  Expert tutors skilled in their subjects, committed to helping students achieve their best through quality
                  education.
                </p>
              </div>
            </div>
          </div>

          <div className="service-card-wrapper">
            <div className="service-card card-green-right">
              <div className="icon-box-wrapper">
                <div className="tilted-box green-box">
                  <img src="/user/assets/images/services/exam.png" alt="Exam Assistance" />
                </div>
              </div>
              <div className="card-content green-bg">
                <h3>Exam and Homework Assistance</h3>
                <p>
                  Worksheets, homework, and lesson-end questions ensure student understanding and effective evaluation.
                  Students in the Middle East/Gulf can choose CBSE or ICSE syllabus as per their needs.
                </p>
              </div>
            </div>
          </div>

          <div className="service-card-wrapper">
            <div className="service-card card-blue-left">
              <div className="icon-box-wrapper">
                <div className="tilted-box blue-box">
                  <img src="/user/assets/images/services/language.png" alt="Language Mastery" />
                </div>
              </div>
              <div className="card-content blue-bg">
                <h3>Language Mastery</h3>
                <p>
                  Special classes in Tamil, Hindi, Arabic & English to build confidence in reading, writing, and speaking.
                  Our main objective is to achieve excellence in education, mastery in languages.
                </p>
              </div>
            </div>
          </div>

          <div className="service-card-wrapper">
            <div className="service-card card-green-right">
              <div className="icon-box-wrapper">
                <div className="tilted-box green-box">
                  <img src="/user/assets/images/services/music_class.png" alt="Music Classes" />
                </div>
              </div>
              <div className="card-content green-bg">
                <h3>Music Classes</h3>
                <p>We offer Carnatic, Hindustani, Vocal musical classes and musical instruments like Piano, Veena.</p>
              </div>
            </div>
          </div>

          <div className="service-card-wrapper">
            <div className="service-card card-blue-left">
              <div className="icon-box-wrapper">
                <div className="tilted-box blue-box">
                  <img src="/user/assets/images/services/free_trail.png" alt="Free Trial" />
                </div>
              </div>
              <div className="card-content blue-bg">
                <h3>Free Trial Sessions</h3>
                <p>
                  We offer an absolutely free trial class for each student right after their registration. We provide
                  lessons in all days of a week and weekends too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fast-track-section">
        <div className="container">
          <h2 className="section-title">FAST TRACK COURSE / DOUBT SESSION</h2>

          <div className="row g-4 mt-4">
            {[{
              src: '/user/assets/images/services/tamil.png',
              label: 'Tamil',
            },
            { src: '/user/assets/images/services/english.png', label: 'English' },
            { src: '/user/assets/images/services/math.png', label: 'Maths' },
            { src: '/user/assets/images/services/physics.png', label: 'Physics' },
            { src: '/user/assets/images/services/chemistry.png', label: 'Chemistry' },
            { src: '/user/assets/images/services/biology.png', label: 'Biology' },
            { src: '/user/assets/images/services/chinese.png', label: 'Chinese' },
            { src: '/user/assets/images/services/german.png', label: 'German' },
            { src: '/user/assets/images/services/hindi.png', label: 'Hindi' },
            { src: '/user/assets/images/services/IELTS_PTE_GRE.png', label: 'IELTS/PTE/GRE' },
            { src: '/user/assets/images/services/music.png', label: 'Music' },
            { src: '/user/assets/images/services/dance.png', label: 'Dance' }].map((subject) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={subject.label}>
                <div className="subject-card">
                  <img src={subject.src} alt={subject.label} />
                  <p>{subject.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
