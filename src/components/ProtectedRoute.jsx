import { Navigate, useLocation } from 'react-router-dom'

export function ProtectedRoute({ children }) {
  const location = useLocation()
  const isLoggedIn =
    sessionStorage.getItem('adminLoggedIn') === 'true' ||
    localStorage.getItem('adminLoggedIn') === 'true'

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />
  }

  return children
}
