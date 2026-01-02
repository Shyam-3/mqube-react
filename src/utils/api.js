// API client utility for making requests to backend
const API_BASE = import.meta.env.PROD ? '' : 'http://localhost:5173'

export async function submitTeacherRegistration(data) {
  const response = await fetch(`${API_BASE}/api/teacher`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Failed to submit' }))
    throw new Error(error.error || 'Failed to submit teacher registration')
  }

  return response.json()
}

export async function submitStudentRegistration(data) {
  const response = await fetch(`${API_BASE}/api/student`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Failed to submit' }))
    throw new Error(error.error || 'Failed to submit student registration')
  }

  return response.json()
}

export async function submitFreeDemoRequest(data) {
  const response = await fetch(`${API_BASE}/api/free-demo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Failed to submit' }))
    throw new Error(error.error || 'Failed to submit free demo request')
  }

  return response.json()
}

// Admin API calls (protected with API key)
const ADMIN_API_KEY = import.meta.env.VITE_ADMIN_API_KEY

export async function getTeachers() {
  const response = await fetch(`${API_BASE}/api/admin/teachers`, {
    headers: {
      'x-api-key': ADMIN_API_KEY,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch teachers')
  }

  return response.json()
}

export async function getStudents() {
  const response = await fetch(`${API_BASE}/api/admin/students`, {
    headers: {
      'x-api-key': ADMIN_API_KEY,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch students')
  }

  return response.json()
}

export async function getFreeDemos() {
  const response = await fetch(`${API_BASE}/api/admin/free-demo`, {
    headers: {
      'x-api-key': ADMIN_API_KEY,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch free demo requests')
  }

  return response.json()
}
