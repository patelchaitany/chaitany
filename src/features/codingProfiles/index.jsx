import SectionWrapper from '../../components/ui/SectionWrapper'
import { codingProfiles, achievements, certifications } from '../../data/personal'

export default function CodingProfilesPage() {
  return (
    <>
      <SectionWrapper title="Coding Profiles">
        <div className="profiles-grid">
          {codingProfiles.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noreferrer" className="profile-card">
              <div className="profile-card-bar" style={{ background: p.color }} />
              <h3 className="profile-card-name">{p.name}</h3>
              <p className="profile-card-handle">@{p.handle}</p>
              <span className="profile-card-arrow">↗</span>
            </a>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Achievements">
        <div className="achievements-list">
          {achievements.map((a, i) => (
            <div key={i} className="achievement-card">
              <span className="achievement-icon">{a.icon}</span>
              <div>
                <h4 className="achievement-title">{a.title}</h4>
                <p className="achievement-detail">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Certifications">
        <div className="cert-list">
          {certifications.map((c, i) => (
            <a key={i} href={c.url} target="_blank" rel="noreferrer" className="cert-card">
              <div className="cert-card-left">
                <h4 className="cert-title">{c.title}</h4>
                <p className="cert-issuer">{c.issuer}</p>
                <p className="cert-topics">{c.topics}</p>
              </div>
              <span className="cert-link">View ↗</span>
            </a>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
