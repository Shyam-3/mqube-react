import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Skip admin routes; only reset scroll on user pages
    if (location.pathname.startsWith('/admin')) return
    // Ensure scroll resets reliably across browsers/containers
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })
  }, [location.pathname])

  return null
}
