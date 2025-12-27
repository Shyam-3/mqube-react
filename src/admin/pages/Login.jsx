import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageStyles } from '../../utils/usePageStyles'

export function AdminLogin() {
  usePageStyles(['/admin/assets/css/login.css'])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    document.body.classList.add('admin-login-page')
    return () => {
      document.body.classList.remove('admin-login-page')
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin123') {
      sessionStorage.setItem('adminLoggedIn', 'true')
      navigate('/admin/dashboard')
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header text-center mb-4">
          <img src="/admin/assets/images/header%20footer/logo.png" alt="MQube Logo" className="login-logo mb-3" />
          <h2 className="login-title">Admin Portal</h2>
          <p className="login-subtitle">Sign in to access the dashboard</p>
        </div>

        <form className="login-form" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <i className="bi bi-person-fill me-2"></i>Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <i className="bi bi-lock-fill me-2"></i>Password
            </label>
            <div className="password-input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="toggle-password" onClick={() => setShowPassword((p) => !p)}>
                <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
              </button>
            </div>
          </div>

          <div className={`alert alert-danger ${showError ? '' : 'd-none'}`} role="alert">
            Invalid username or password
          </div>

          <button type="submit" className="btn btn-primary w-100 login-btn">
            <i className="bi bi-box-arrow-in-right me-2"></i>Sign In
          </button>
        </form>

        <div className="login-footer text-center mt-4">
          <p className="mb-0 text-muted small">&copy; {new Date().getFullYear()} MQube Tuitions. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
