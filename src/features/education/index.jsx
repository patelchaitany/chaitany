import SectionWrapper from '../../components/ui/SectionWrapper'
import { education, achievements, certifications } from '../../data/personal'

export default function EducationPage() {
  return (
    <>
      <SectionWrapper title="Education">
        {education.map((edu, i) => (
          <div key={i} className="edu-card">
            <div className="edu-card-icon">🎓</div>
            <div className="edu-card-content">
              <h3 className="edu-institution">{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-period">{edu.period}</p>
              <div className="project-card-tags" style={{ marginTop: 12 }}>
                {edu.tags.map((t, j) => (
                  <span key={j} className="tag-brutal">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
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
