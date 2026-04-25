import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { personal } from '../../data/personal'

export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="header-logo">{'<'} DevPortfolio {'/>'}</div>
        <div className="header-actions">
          <a href="/" className="btn btn-default" style={{ padding: '6px 16px', fontSize: '0.7rem' }}>
            Home
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="btn btn-black"
            style={{ padding: '6px 16px', fontSize: '0.7rem' }}
          >
            Hire Me
          </a>
        </div>
      </header>

      <Sidebar />

      <main className="main">
        <Outlet />
      </main>
    </>
  )
}
