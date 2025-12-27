import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function UserLayout() {
  return (
    <div className="page-wrapper app-shell">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
