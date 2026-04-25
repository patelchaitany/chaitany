import { NavLink } from 'react-router-dom'
import { personal, navItems } from '../../data/personal'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-avatar">
        <img src={personal.avatar} alt={personal.name} />
      </div>

      <div>
        <div className="sidebar-name">{personal.name}</div>
        <div className="sidebar-role">{personal.role}</div>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <a href={personal.linkedin} target="_blank" rel="noreferrer"
          style={{ fontSize: '0.65rem', color: '#0077B5', border: '1px solid #0077B5', padding: '2px 6px', fontFamily: "'Roboto Mono', monospace" }}>
          LinkedIn
        </a>
        <a href={personal.codeforces} target="_blank" rel="noreferrer"
          style={{ fontSize: '0.65rem', color: '#1F8ACB', border: '1px solid #1F8ACB', padding: '2px 6px', fontFamily: "'Roboto Mono', monospace" }}>
          Codeforces
        </a>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `sidebar-nav-item${isActive ? ' active' : ''}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-resume">
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-black"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          📄 View GitHub
        </a>
      </div>
    </aside>
  )
}
