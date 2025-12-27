import { usePageStyles } from '../../utils/usePageStyles'

const steps = [
  {
    title: 'Tell us your goals',
    body: 'Choose the subject, board, grade and any preferences. We listen and tailor the journey for you.',
  },
  {
    title: 'We hand-pick a tutor',
    body: 'Our academic team pairs you with an expert who matches your schedule and learning style.',
  },
  {
    title: 'Free demo class',
    body: 'Attend a live demo to experience the teaching style, ask questions, and finalize your plan.',
  },
  {
    title: 'Start your classes',
    body: 'Regular live sessions with notes, homework, and recordings so nothing gets missed.',
  },
  {
    title: 'Assess and improve',
    body: 'Monthly assessments, feedback loops, and flexible reschedules keep progress on track.',
  },
]

export function HowItWorks() {
  usePageStyles(['/user/assets/css/howItWorks.css'])

  return (
    <>
      <section className="hiw-hero">
        <div className="hiw-hero-content">
          <h1>How it Works</h1>
          <p className="mb-0">Simple steps to begin learning with MQube Tuitions</p>
        </div>
      </section>

      <section className="hiw-steps">
        <div className="container">
          <div className="row g-4">
            {steps.map((step) => (
              <div className="col-lg-4 col-md-6" key={step.title}>
                <div className="step-card h-100">
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
