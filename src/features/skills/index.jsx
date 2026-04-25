import SectionWrapper from '../../components/ui/SectionWrapper'
import { skills } from '../../data/personal'

const colorMap = {
  Python: '#facc15',
  'C++': '#3b82f6',
  C: '#3b82f6',
  Go: '#14b8a6',
  JavaScript: '#facc15',
  SQL: '#f97316',
  Bash: '#22c55e',
  PyTorch: '#ef4444',
  TensorFlow: '#f97316',
  FastAPI: '#14b8a6',
  React: '#3b82f6',
  OpenCV: '#22c55e',
  LangGraph: '#a855f7',
  Feast: '#ef4444',
  'MCP SDK': '#3b82f6',
  Docker: '#3b82f6',
  Kubernetes: '#3b82f6',
  OpenShift: '#ef4444',
  Git: '#f97316',
  Linux: '#facc15',
  AWS: '#f97316',
  CUDA: '#22c55e',
  'GitHub Actions': '#111',
  Neovim: '#22c55e',
  'Machine Learning': '#f97316',
  'Deep Learning': '#ef4444',
  'Computer Vision': '#22c55e',
  MLOps: '#ef4444',
  'Data Structures': '#3b82f6',
  Algorithms: '#14b8a6',
  'Operating Systems': '#facc15',
}

const sections = [
  { title: 'Programming Languages', key: 'languages', icon: '🔤' },
  { title: 'Frameworks & Libraries', key: 'frameworks', icon: '📦' },
  { title: 'Cloud & DevOps', key: 'tools', icon: '☁️' },
  { title: 'College Subjects', key: 'subjects', icon: '📘' },
]

export default function SkillsPage() {
  return (
    <>
      {sections.map((section) => (
        <SectionWrapper key={section.key} title={`${section.icon} ${section.title}`}>
          <div className="skills-grid">
            {skills[section.key].map((skill) => (
              <div key={skill} className="skill-card">
                <div
                  className="skill-card-bar"
                  style={{ background: colorMap[skill] || '#888' }}
                />
                <span className="skill-card-label">{skill}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      ))}
    </>
  )
}
