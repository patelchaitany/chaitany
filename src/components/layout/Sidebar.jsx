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

      <div className="sidebar-status">
        <span className="sidebar-status-dot" />
        {personal.status}
      </div>

      <div style={{ fontSize: '0.7rem', color: '#666', fontFamily: "'Roboto Mono', monospace" }}>
        {personal.currentWork}
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
