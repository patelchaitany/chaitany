import { useState } from 'react'
import SectionWrapper from '../../components/ui/SectionWrapper'
import HeroSection from './HeroSection'
import { aboutText, whatIDo, openSourcePRs, projects, skills } from '../../data/personal'

const skillColorMap = {
  Python: '#facc15', 'C++': '#3b82f6', C: '#3b82f6', Go: '#14b8a6',
  JavaScript: '#facc15', SQL: '#f97316', Bash: '#22c55e',
  PyTorch: '#ef4444', TensorFlow: '#f97316', FastAPI: '#14b8a6',
  React: '#3b82f6', OpenCV: '#22c55e', LangGraph: '#a855f7',
  Feast: '#ef4444', 'MCP SDK': '#3b82f6', Docker: '#3b82f6',
  Kubernetes: '#3b82f6', OpenShift: '#ef4444', Git: '#f97316',
  Linux: '#facc15', AWS: '#f97316', CUDA: '#22c55e',
  'GitHub Actions': '#111', Neovim: '#22c55e',
  'Machine Learning': '#f97316', 'Deep Learning': '#ef4444',
  'Computer Vision': '#22c55e', MLOps: '#ef4444',
  'Data Structures': '#3b82f6', Algorithms: '#14b8a6',
  'Operating Systems': '#facc15',
}

const skillSections = [
  { title: 'Languages', key: 'languages' },
  { title: 'Frameworks', key: 'frameworks' },
  { title: 'Tools & DevOps', key: 'tools' },
  { title: 'Subjects', key: 'subjects' },
]

export default function AboutMe() {
  const [openProject, setOpenProject] = useState(0)

  return (
    <>
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper>
        <div className="about-split">
          <div className="about-story">
            <h3>My Story</h3>
            {aboutText.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="about-whatido">
            <h3>What I Do</h3>
            {whatIDo.map((item, i) => (
              <div className="whatido-item" key={i}>
                <div className={`whatido-icon ${item.color}`}>
                  {item.icon}
                </div>
                <div className="whatido-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Open Source PRs">
        <div className="pr-section">
          {openSourcePRs.map((repo, i) => (
            <div key={i} className="pr-repo-group">
              <div className="pr-repo-header">
                <a href={repo.repoUrl} target="_blank" rel="noreferrer" className="pr-repo-name">
                  {repo.repo}
                </a>
                <span className="pr-count">{repo.prs.length} PRs</span>
              </div>
              <div className="pr-list">
                {repo.prs.map((pr, j) => (
                  <a key={j} href={pr.url} target="_blank" rel="noreferrer" className="pr-item">
                    <span className="pr-number">#{pr.number}</span>
                    <span className="pr-title">{pr.title}</span>
                    <span className={`pr-status pr-status-${pr.status}`}>{pr.status}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
          <a href="mailto:patelchaitany93@gmail.com" className="btn btn-yellow">
            ✉ Hire Me
          </a>
          <a href="https://github.com/patelchaitany" target="_blank" rel="noreferrer" className="btn btn-default">
            📄 View All PRs
          </a>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Projects">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card-brutal${openProject === i ? ' open' : ''}`}>
              <div
                className="project-card-header"
                onClick={() => setOpenProject(openProject === i ? -1 : i)}
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
                    <a href={p.githubUrl} target="_blank" rel="noreferrer"
                      className="project-card-link" onClick={(e) => e.stopPropagation()}>
                      GitHub ↗
                    </a>
                  )}
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer"
                      className="project-card-link" onClick={(e) => e.stopPropagation()}>
                      Demo ↗
                    </a>
                  )}
                  <span className="project-card-toggle">
                    {openProject === i ? '−' : '+'}
                  </span>
                </div>
              </div>
              {openProject === i && (
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

      <SectionWrapper title="Skills">
        {skillSections.map((section) => (
          <div key={section.key} style={{ marginBottom: 20 }}>
            <h4 style={{ marginBottom: 10 }}>{section.title}</h4>
            <div className="skills-grid">
              {skills[section.key].map((skill) => (
                <div key={skill} className="skill-card">
                  <div className="skill-card-bar"
                    style={{ background: skillColorMap[skill] || '#888' }} />
                  <span className="skill-card-label">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </SectionWrapper>

    </>
  )
}
