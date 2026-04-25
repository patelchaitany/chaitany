import SectionWrapper from '../../components/ui/SectionWrapper'
import { personal, codingProfiles } from '../../data/personal'

export default function ContactPage() {
  return (
    <>
      <SectionWrapper title="Get In Touch">
        <div className="contact-grid">
          <a href={`mailto:${personal.email}`} className="contact-card">
            <div className="contact-card-icon" style={{ background: '#ef4444' }}>✉</div>
            <div>
              <h4 className="contact-card-label">Email</h4>
              <p className="contact-card-value">{personal.email}</p>
            </div>
          </a>

          <a href={personal.github} target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-card-icon" style={{ background: '#111' }}>⌨</div>
            <div>
              <h4 className="contact-card-label">GitHub</h4>
              <p className="contact-card-value">{personal.githubHandle}</p>
            </div>
          </a>

          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-card-icon" style={{ background: '#0077B5' }}>in</div>
            <div>
              <h4 className="contact-card-label">LinkedIn</h4>
              <p className="contact-card-value">{personal.linkedinHandle}</p>
            </div>
          </a>

          <a href={personal.codeforces} target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-card-icon" style={{ background: '#1F8ACB' }}>CF</div>
            <div>
              <h4 className="contact-card-label">Codeforces</h4>
              <p className="contact-card-value">{personal.codeforcesHandle}</p>
            </div>
          </a>

          <a href={personal.kaggle} target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-card-icon" style={{ background: '#20BEFF' }}>K</div>
            <div>
              <h4 className="contact-card-label">Kaggle</h4>
              <p className="contact-card-value">{personal.kaggleHandle}</p>
            </div>
          </a>

          <div className="contact-card">
            <div className="contact-card-icon" style={{ background: '#22c55e' }}>📍</div>
            <div>
              <h4 className="contact-card-label">Location</h4>
              <p className="contact-card-value">{personal.location}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <h3 style={{ marginBottom: 16 }}>Let's Work Together</h3>
          <p style={{ marginBottom: 24 }}>
            I'm always interested in ML research, open-source collaboration, and backend engineering roles.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <a href={`mailto:${personal.email}`} className="btn btn-yellow">✉ Send Email</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-black">Connect on LinkedIn</a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
