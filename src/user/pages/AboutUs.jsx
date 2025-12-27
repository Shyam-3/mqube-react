import { usePageStyles } from '../../utils/usePageStyles'

export function AboutUs() {
  usePageStyles(['/user/assets/css/aboutUs.css'])

  return (
    <>
      <header className="about-header">
        <div className="about-header-overlay"></div>
        <h1>About MQube Tutions</h1>
      </header>

      <section className="about-content container py-5">
        <div className="row align-items-center">
          <h2 className="about-title">Welcome to MQube Tuitions</h2>
          <div className="col-6 col-md-6">
            <p className="about-text">
              The right place for smart education. Be smart with smart classes and get better grades. Step into online
              tuition with our expert team. Here you can get professional and well-experienced tutors for every subject.
              We guarantee improvement in your grades. Our experts are ready to distribute their experience with you to
              delight your future now and ahead.
            </p>
          </div>

          <div className="col-6 col-md-6 text-center position-relative">
            <img
              src="/user/assets/images/aboutUs/quote-bg.jpg"
              className="quote-bg img-fluid"
              alt="Quote Background"
            />
            <div className="quote-text-box">
              <p>
                No Student Should
                <br />
                Be Left Behind
                <br />
                Without A Teacher
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="who-section">
        <div className="who-box">
          <p>
            Who
            <br />
            we
            <br />
            are?
          </p>
        </div>

        <div className="who-content-box">
          <p>
            MQube Tuitions is an online educational institute under the able guidance of Mrs. Malathi Ramchandran, one
            of the pioneers in online tutoring. Mrs. Malathi Ramachandran holds fourteen years of total experience in
            handling curriculums from 25 different countries including US, Canada, France, Spain, Sweden, India, Saudi
            Arabia, Thailand, UAE, Oman, UK, West Africa (Accra), Singapore, Malaysia, China, Hong Kong, Qatar, Bahrain,
            Russia, Australia, New Zealand, Switzerland, Poland and all over India.
          </p>
        </div>
      </section>

      <section className="offer-section container py-5">
        <h2 className="offer-title text-center">What we offer?</h2>

        <div className="offer-box">
          <div className="offer-col">
            <p>
              <span className="arrow">➜</span> MQube Tuitions is a portal, where tutoring is available for every age and
              almost every subject.
            </p>

            <p>
              <span className="arrow">➜</span> Our panel of expert tutors handle all school level subjects (including US
              common core curriculum, IGCSE, IB, CBSE, Australian and Singapore curriculum).
            </p>

            <p>
              <span className="arrow">➜</span> College level studies, Mathematical Olympiads and Competitive Exams like
              SAT, PSAT, ACT, Napplan, Mathcount, Bank entrance exams, etc.
            </p>

            <p>
              <span className="arrow">➜</span> Language proficiency – live classes in German, Tamil, Hindi, Spoken
              English, IELTS, PTE.
            </p>

            <p>
              <span className="arrow">➜</span> Music – Carnatic vocal, Veena, Hindustani vocal and instrumental.
            </p>
          </div>

          <div className="offer-col">
            <p>
              <span className="arrow">➜</span> Assistance for UPSC/TNPSC mathematics sessions.
            </p>
            <p>
              <span className="arrow">➜</span> We have experience in handling all kinds of students and curriculums.
            </p>

            <p>
              <span className="arrow">➜</span> MQube teachers are experienced, passionate and highly qualified with
              excellent teaching skills.
            </p>

            <p>
              <span className="arrow">➜</span> Free Demo Class is arranged before deciding to proceed with the teacher.
            </p>

            <p>
              <span className="arrow">➜</span> We use Skype & Online Whiteboard for delivering classes.
            </p>

            <p>
              <span className="arrow">➜</span> Notes for all classes are sent to the student after every session.
            </p>

            <p>
              <span className="arrow">➜</span> Regular homework & monthly assessments will be given.
            </p>
          </div>
        </div>
      </section>

      <section className="why-online-section">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="why-title">Why Online Tuitions?</h2>

              <ul className="why-list">
                <li>
                  With so many positive changes happening in the field of education and technology, online teaching has
                  emerged as a winner in modern times.
                </li>

                <li>
                  Online classes have solved the major problem of a conservative classroom teaching where teachers
                  cannot concentrate on each and every individual.
                </li>

                <li>
                  This troubles students with varying learning pace, capacity and difficulties.
                </li>
              </ul>
            </div>

            <div className="col-md-5 text-center">
              <img
                src="/user/assets/images/aboutUs/online-tuition-illustration.png"
                alt="Online Tuition"
                className="why-image img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="why-mqube-section">
        <div className="container text-center">
          <h2 className="why-main-title">Why MQube Tuitions?</h2>
          <p className="why-subtitle">Because every student deserves clarity, confidence, and success.</p>

          <div className="row justify-content-center mt-4">
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="feature-card">
                <h4>Live Tutoring</h4>
                <p>
                  We provide Live Online Tutoring by expert teachers in different subjects. In MQube we always seek for
                  the quality tutoring.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="feature-card">
                <h4>Expert Teachers</h4>
                <p>
                  Our tutors are carefully chosen through a tough selection process, ensuring they possess deep subject
                  knowledge.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="feature-card">
                <h4>Concept-First Approach</h4>
                <p>We teach from the root, building logic step by step until concepts are crystal clear.</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="feature-card">
                <h4>Identifying the Problem</h4>
                <p>
                  We believe that neither students nor curriculums are the problems. Lack of skill to understand the
                  subject is the real issue.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="feature-card">
                <h4>Skill Assessment</h4>
                <p>
                  Our specialists assess each student’s skill set for the course, identify the problem and start working
                  on it.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="feature-card">
                <h4>Personalized Sessions</h4>
                <p>We arrange tutoring sessions that develop the lacking skill and reinforce current coursework.</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="feature-card">
                <h4>Kind Approach</h4>
                <p>Mild and kind teaching approach ensures the best is taken out of each student.</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="feature-card">
                <h4>Flexible Support</h4>
                <p>We understand urgencies like tests and assignments, and are very flexible to help students.</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <div className="feature-card">
                <h4>Positive Learning</h4>
                <p>Smiles are shared in the form of positive feedbacks and appreciation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="thankyou-section">
        <div className="thankyou-box">
          We are thankful to our students and their parents to share the same with us in abundance. Love, support and
          good ratings are always reciprocated.
        </div>
      </section>
    </>
  )
}
