import { useState } from 'react'
import SectionWrapper from '../../components/ui/SectionWrapper'
import { projects } from '../../data/personal'

export default function ProjectsPage() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <SectionWrapper title="Projects">
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className={`project-card-brutal${openIdx === i ? ' open' : ''}`}>
            <div
              className="project-card-header"
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              <div className="project-card-left">
                <div className="project-card-icon">📁</div>
                <div>
                  <h3 className="project-card-name">{p.name}</h3>
                  <span className="project-card-year">{p.year}</span>
                </div>
              </div>
              <div className="project-card-actions">
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                )}
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Demo ↗
                  </a>
                )}
                <span className="project-card-toggle">
                  {openIdx === i ? '−' : '+'}
                </span>
              </div>
            </div>

            {openIdx === i && (
              <div className="project-card-body">
                <p>{p.description}</p>
                <div className="project-card-tags">
                  {p.technologies.map((t, j) => (
                    <span key={j} className="tag-brutal">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
