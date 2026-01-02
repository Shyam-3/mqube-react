// Admin Dashboard Data Loading with API Integration
(function() {
  // API Key for admin endpoints - in production this should be from env
  const API_KEY = import.meta?.env?.VITE_ADMIN_API_KEY || 'YOUR_ADMIN_API_KEY_HERE'
  
  // State
  let teachersData = []
  let studentsData = []
  let demoData = []

  // Fetch data from API
  async function fetchData(endpoint) {
    try {
      const response = await fetch(`/api/admin/${endpoint}`, {
        headers: { 'x-api-key': API_KEY }
      })
      if (!response.ok) {
        console.error(`API error for ${endpoint}: ${response.status}`)
        return { data: [], count: 0 }
      }
      return await response.json()
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error)
      return { data: [], count: 0 }
    }
  }

  // Load all data
  async function loadAllData() {
    const [teachersRes, studentsRes, demosRes] = await Promise.all([
      fetchData('teachers'),
      fetchData('students'),
      fetchData('free-demo')
    ])

    teachersData = teachersRes.data || []
    studentsData = studentsRes.data || []
    demoData = demosRes.data || []

    updateCounts()
    renderTeachersTable()
    renderStudentsTable()
    renderDemoTable()
    updateRecentActivity()
  }

  // Update count cards
  function updateCounts() {
    const teacherCount = document.getElementById('teacherCount')
    const studentCount = document.getElementById('studentCount')
    const demoCount = document.getElementById('demoCount')

    if (teacherCount) teacherCount.textContent = teachersData.length
    if (studentCount) studentCount.textContent = studentsData.length
    if (demoCount) demoCount.textContent = demoData.length
  }

  // Format date
  function formatDate(dateString) {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Render teachers table
  function renderTeachersTable() {
    const tbody = document.querySelector('#teachersTable tbody')
    if (!tbody) return

    if (teachersData.length === 0) {
      tbody.innerHTML = '<tr><td colSpan="9" class="text-center text-muted">No data available</td></tr>'
      return
    }

    tbody.innerHTML = teachersData.map(teacher => `
      <tr>
        <td>${teacher.id}</td>
        <td>${teacher.full_name || 'N/A'}</td>
        <td>${teacher.qualification || 'N/A'}</td>
        <td>${teacher.subjects || 'N/A'}</td>
        <td>${teacher.experience || 'N/A'}</td>
        <td>${teacher.email || 'N/A'}</td>
        <td>${teacher.phone || 'N/A'}</td>
        <td>${formatDate(teacher.created_at)}</td>
        <td>
          <button class="btn btn-sm btn-info" onclick="window.viewDetails('teacher', ${teacher.id})">
            <i class="bi bi-eye"></i>
          </button>
        </td>
      </tr>
    `).join('')
  }

  // Render students table
  function renderStudentsTable() {
    const tbody = document.querySelector('#studentsTable tbody')
    if (!tbody) return

    if (studentsData.length === 0) {
      tbody.innerHTML = '<tr><td colSpan="9" class="text-center text-muted">No data available</td></tr>'
      return
    }

    tbody.innerHTML = studentsData.map(student => `
      <tr>
        <td>${student.id}</td>
        <td>${student.student_name || 'N/A'}</td>
        <td>${student.parent_name || 'N/A'}</td>
        <td>${student.grade || 'N/A'}</td>
        <td>${student.subject || 'N/A'}</td>
        <td>${student.email || 'N/A'}</td>
        <td>${student.phone || 'N/A'}</td>
        <td>${formatDate(student.created_at)}</td>
        <td>
          <button class="btn btn-sm btn-info" onclick="window.viewDetails('student', ${student.id})">
            <i class="bi bi-eye"></i>
          </button>
        </td>
      </tr>
    `).join('')
  }

  // Render demo requests table
  function renderDemoTable() {
    const tbody = document.querySelector('#demoTable tbody')
    if (!tbody) return

    if (demoData.length === 0) {
      tbody.innerHTML = '<tr><td colSpan="9" class="text-center text-muted">No data available</td></tr>'
      return
    }

    tbody.innerHTML = demoData.map(demo => `
      <tr>
        <td>${demo.id}</td>
        <td>${demo.name || 'N/A'}</td>
        <td>${demo.email || 'N/A'}</td>
        <td>${demo.phone || 'N/A'}</td>
        <td colspan="2">${demo.message || 'N/A'}</td>
        <td>${demo.preferred_time || 'N/A'}</td>
        <td>${formatDate(demo.created_at)}</td>
        <td>
          <button class="btn btn-sm btn-info" onclick="window.viewDetails('demo', ${demo.id})">
            <i class="bi bi-eye"></i>
          </button>
        </td>
      </tr>
    `).join('')
  }

  // Update recent activity
  function updateRecentActivity() {
    const container = document.getElementById('recentActivity')
    if (!container) return

    const recent = [
      ...teachersData.slice(0, 3).map(t => ({ type: 'Teacher', name: t.full_name, date: t.created_at })),
      ...studentsData.slice(0, 3).map(s => ({ type: 'Student', name: s.student_name, date: s.created_at })),
      ...demoData.slice(0, 3).map(d => ({ type: 'Demo', name: d.name, date: d.created_at }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5)

    if (recent.length === 0) {
      container.innerHTML = '<p class="text-muted">No recent activity</p>'
      return
    }

    container.innerHTML = `
      <ul class="list-unstyled">
        ${recent.map(item => `
          <li class="mb-2">
            <strong>${item.type}:</strong> ${item.name} - <small class="text-muted">${formatDate(item.date)}</small>
          </li>
        `).join('')}
      </ul>
    `
  }

  // View details modal
  window.viewDetails = function(type, id) {
    const modal = new bootstrap.Modal(document.getElementById('detailsModal'))
    const modalBody = document.getElementById('modalBody')
    const modalTitle = document.getElementById('detailsModalLabel')

    let data
    if (type === 'teacher') {
      data = teachersData.find(t => t.id === id)
      if (!data) return
      modalTitle.textContent = 'Teacher Details'
      modalBody.innerHTML = `
        <div class="modal-details-list">
          <div class="detail-row"><span class="detail-label">ID:</span> <span class="detail-value">${data.id}</span></div>
          <div class="detail-row"><span class="detail-label">Full Name:</span> <span class="detail-value">${data.full_name}</span></div>
          <div class="detail-row"><span class="detail-label">Qualification:</span> <span class="detail-value">${data.qualification}</span></div>
          <div class="detail-row"><span class="detail-label">Subjects:</span> <span class="detail-value">${data.subjects}</span></div>
          <div class="detail-row"><span class="detail-label">Experience:</span> <span class="detail-value">${data.experience}</span></div>
          <div class="detail-row"><span class="detail-label">Email:</span> <span class="detail-value">${data.email}</span></div>
          <div class="detail-row"><span class="detail-label">Phone:</span> <span class="detail-value">${data.phone}</span></div>
          <div class="detail-row"><span class="detail-label">Registered:</span> <span class="detail-value">${formatDate(data.created_at)}</span></div>
        </div>
      `
    } else if (type === 'student') {
      data = studentsData.find(s => s.id === id)
      if (!data) return
      modalTitle.textContent = 'Student Details'
      modalBody.innerHTML = `
        <div class="modal-details-list">
          <div class="detail-row"><span class="detail-label">ID:</span> <span class="detail-value">${data.id}</span></div>
          <div class="detail-row"><span class="detail-label">Student Name:</span> <span class="detail-value">${data.student_name}</span></div>
          <div class="detail-row"><span class="detail-label">Parent Name:</span> <span class="detail-value">${data.parent_name}</span></div>
          <div class="detail-row"><span class="detail-label">Grade:</span> <span class="detail-value">${data.grade}</span></div>
          <div class="detail-row"><span class="detail-label">Subject:</span> <span class="detail-value">${data.subject}</span></div>
          <div class="detail-row"><span class="detail-label">Email:</span> <span class="detail-value">${data.email}</span></div>
          <div class="detail-row"><span class="detail-label">Phone:</span> <span class="detail-value">${data.phone}</span></div>
          <div class="detail-row"><span class="detail-label">Registered:</span> <span class="detail-value">${formatDate(data.created_at)}</span></div>
        </div>
      `
    } else if (type === 'demo') {
      data = demoData.find(d => d.id === id)
      if (!data) return
      modalTitle.textContent = 'Free Demo Request Details'
      modalBody.innerHTML = `
        <div class="modal-details-list">
          <div class="detail-row"><span class="detail-label">ID:</span> <span class="detail-value">${data.id}</span></div>
          <div class="detail-row"><span class="detail-label">Name:</span> <span class="detail-value">${data.name}</span></div>
          <div class="detail-row"><span class="detail-label">Email:</span> <span class="detail-value">${data.email}</span></div>
          <div class="detail-row"><span class="detail-label">Phone:</span> <span class="detail-value">${data.phone}</span></div>
          <div class="detail-row"><span class="detail-label">Preferred Time:</span> <span class="detail-value">${data.preferred_time || 'N/A'}</span></div>
          <div class="detail-row"><span class="detail-label">Details:</span> <span class="detail-value">${data.message || 'N/A'}</span></div>
          <div class="detail-row"><span class="detail-label">Requested:</span> <span class="detail-value">${formatDate(data.created_at)}</span></div>
        </div>
      `
    }

    modal.show()
  }

  // Section navigation
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link')
  const sections = document.querySelectorAll('.content-section')

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const sectionId = link.getAttribute('data-section')

      navLinks.forEach(l => l.classList.remove('active'))
      link.classList.add('active')

      sections.forEach(section => {
        section.classList.remove('active')
        if (section.id === sectionId) {
          section.classList.add('active')
        }
      })
    })
  })

  // Sidebar toggle for mobile
  const toggleBtn = document.getElementById('toggleSidebar')
  const sidebar = document.getElementById('sidebar')

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active')
    })
  }

  // Topbar title click goes to overview
  const topbarTitle = document.querySelector('.topbar-title')
  if (topbarTitle) {
    topbarTitle.addEventListener('click', () => {
      const overviewLink = document.querySelector('[data-section="overview"]')
      if (overviewLink) overviewLink.click()
    })
  }

  // Load data on page load
  loadAllData()

  // Refresh data every 30 seconds
  setInterval(loadAllData, 30000)
})()
