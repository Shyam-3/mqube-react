import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/aboutUs' },
  { label: 'Services', to: '/services' },
  { label: 'How it Works', to: '/howItWorks' },
]

const registrationLinks = [
  { label: 'Teachers', to: '/teacher' },
  { label: 'Students', to: '/student' },
  { label: 'Free Demo', to: '/freeDemo' },
]

const tailLinks = [
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact us', to: '/contactUs' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  // Close menus on route change and scroll to top
  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const isDropdownActive = registrationLinks.some((link) => link.to === location.pathname)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const toggleDropdown = () => setDropdownOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top bg-transparent">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img src="/user/assets/images/header%20footer/logo.png" height="45" alt="MQube Tuitions" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <i className="bi bi-list navbar-toggler-icon-custom"></i>
        </button>

        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navmenu">
          <ul className="navbar-nav ms-auto align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to={link.to}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li className={`nav-item dropdown${isDropdownActive ? ' active' : ''}`}>
              <button
                className="nav-link dropdown-toggle"
                type="button"
                aria-expanded={dropdownOpen}
                onClick={toggleDropdown}
              >
                Registrations
              </button>
              <ul className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}>
                {registrationLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      className={({ isActive }) => `dropdown-item${isActive ? ' active' : ''}`}
                      to={link.to}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {tailLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to={link.to}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
