import { useState } from 'react'
import SectionWrapper from '../../components/ui/SectionWrapper'
import { experience } from '../../data/personal'

const timelineColors = ['#facc15', '#f97316', '#22c55e', '#3b82f6']

export default function ExperiencePage() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <SectionWrapper title="Experience">
      <div className="timeline">
        <div className="timeline-line" />
        {experience.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-marker">
              <div
                className="timeline-number"
                style={{ background: timelineColors[i % timelineColors.length] }}
              >
                {i + 1}
              </div>
              <div className="timeline-arrow" />
            </div>

            <div className={`timeline-card${openIdx === i ? ' open' : ''}`}>
              <div
                className="timeline-card-header"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-type">{exp.type}</span>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                </div>
                <span className="timeline-toggle">{openIdx === i ? '−' : '+'}</span>
              </div>

              {openIdx === i && (
                <div className="timeline-card-body">
                  <ul>
                    {exp.content.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-card-tags">
                    {exp.technologies.map((t, j) => (
                      <span key={j} className="tag-brutal">{t}</span>
                    ))}
                  </div>
                  {exp.prs && exp.prs.length > 0 && (
                    <div className="timeline-prs">
                      <h4 style={{ marginBottom: 8, marginTop: 14 }}>Related PRs</h4>
                      {exp.prs.map((pr, j) => (
                        <a key={j} href={pr.url} target="_blank" rel="noreferrer" className="timeline-pr-link">
                          {pr.title}
                          <span className={`pr-status pr-status-${pr.status}`}>{pr.status}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
