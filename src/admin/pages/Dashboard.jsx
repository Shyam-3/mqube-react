import { useEffect } from 'react'
import { ProtectedRoute } from '../../components/ProtectedRoute'
import { usePageStyles } from '../../utils/usePageStyles'

export function AdminDashboard() {
  usePageStyles(['/admin/assets/css/dashboard.css'])

  useEffect(() => {
    // Scope admin styles to body to avoid user-page bleed
    document.body.classList.add('admin-page')

    return () => {
      document.body.classList.remove('admin-page')
    }
  }, [])

  useEffect(() => {
    // Ensure DOM is ready, then attach legacy JS for dynamic behaviors
    const timer = setTimeout(() => {
      const script = document.createElement('script')
      script.src = '/admin/assets/js/dashboard.js'
      script.async = false
      document.body.appendChild(script)
      
      // Cleanup function
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }, 100) // Small delay to ensure React has rendered the DOM
    
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <ProtectedRoute>
      <div>
        {/* Render uses the same HTML from legacy dashboard via CSS and JS to hydrate content */}
        {/* For parity, we keep markup minimal and rely on dashboard.js to populate tables */}
        <div className="sidebar" id="sidebar">
          <div className="sidebar-header">
            <img src="/admin/assets/images/header%20footer/logo.png" alt="MQube Logo" className="sidebar-logo" />
            <h5 className="sidebar-title">Admin Panel</h5>
          </div>
          <nav className="sidebar-nav">
            <a href="#" className="nav-link active" data-section="overview">
              <i className="bi bi-speedometer2"></i>
              <span>Overview</span>
            </a>
            <a href="#" className="nav-link" data-section="teachers">
              <i className="bi bi-person-video3"></i>
              <span>Teachers</span>
            </a>
            <a href="#" className="nav-link" data-section="students">
              <i className="bi bi-people-fill"></i>
              <span>Students</span>
            </a>
            <a href="#" className="nav-link" data-section="freedemo">
              <i className="bi bi-clipboard-check"></i>
              <span>Free Demo</span>
            </a>
          </nav>
          <div className="sidebar-footer">
            <a href="/admin/login" className="logout-btn">
              <i className="bi bi-box-arrow-left"></i>
              <span>Logout</span>
            </a>
          </div>
        </div>

        <div className="main-content">
          <div className="topbar">
            <button className="toggle-sidebar" id="toggleSidebar">
              <i className="bi bi-list"></i>
            </button>
            <h4 className="topbar-title">Dashboard</h4>
            <div className="topbar-user">
              <i className="bi bi-person-circle"></i>
              <span>Admin</span>
            </div>
          </div>

          <div className="dashboard-content">
            <section id="overview" className="content-section active">
              <h3 className="section-title">Overview</h3>
              <div className="row g-4 mb-4">
                <div className="col-md-4">
                  <div className="stat-card stat-teachers">
                    <div className="stat-icon">
                      <i className="bi bi-person-video3"></i>
                    </div>
                    <div className="stat-info">
                      <h5>Teacher Registrations</h5>
                      <h2 id="teacherCount">0</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-card stat-students">
                    <div className="stat-icon">
                      <i className="bi bi-people-fill"></i>
                    </div>
                    <div className="stat-info">
                      <h5>Student Registrations</h5>
                      <h2 id="studentCount">0</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-card stat-demo">
                    <div className="stat-icon">
                      <i className="bi bi-clipboard-check"></i>
                    </div>
                    <div className="stat-info">
                      <h5>Free Demo Requests</h5>
                      <h2 id="demoCount">0</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5>Recent Registrations</h5>
                  <div>
                    <button className="btn btn-sm btn-success me-2" onClick={() => window.refreshData()}>
                      <i className="bi bi-arrow-clockwise me-2"></i>Refresh All
                    </button>
                    <button className="btn btn-sm btn-primary" onClick={() => window.exportAll()}>
                      <i className="bi bi-download me-2"></i>Export All Data
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div id="recentActivity">
                    <p className="text-muted">No recent activity</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="teachers" className="content-section">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="section-title">Teacher Registrations</h3>
                <div>
                  <button className="btn btn-success me-2" onClick={() => window.refreshData()}>
                    <i className="bi bi-arrow-clockwise me-2"></i>Refresh
                  </button>
                  <button className="btn btn-primary" onClick={() => window.exportTeachers()}>
                    <i className="bi bi-download me-2"></i>Export to CSV
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover" id="teachersTable">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Full Name</th>
                          <th>Qualification</th>
                          <th>Subjects</th>
                          <th>Experience</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="9" className="text-center text-muted">No data available</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section id="students" className="content-section">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="section-title">Student Registrations</h3>
                <div>
                  <button className="btn btn-success me-2" onClick={() => window.refreshData()}>
                    <i className="bi bi-arrow-clockwise me-2"></i>Refresh
                  </button>
                  <button className="btn btn-primary" onClick={() => window.exportStudents()}>
                    <i className="bi bi-download me-2"></i>Export to CSV
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover" id="studentsTable">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Student Name</th>
                          <th>Parent Name</th>
                          <th>Grade</th>
                          <th>Subject</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="9" className="text-center text-muted">No data available</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section id="freedemo" className="content-section">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="section-title">Free Demo Requests</h3>
                <div>
                  <button className="btn btn-success me-2" onClick={() => window.refreshData()}>
                    <i className="bi bi-arrow-clockwise me-2"></i>Refresh
                  </button>
                  <button className="btn btn-primary" onClick={() => window.exportDemos()}>
                    <i className="bi bi-download me-2"></i>Export to CSV
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover" id="demoTable">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Board</th>
                          <th>Grade</th>
                          <th>Preferred Date</th>
                          <th>Date Submitted</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="9" className="text-center text-muted">No data available</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="modal fade" id="detailsModal" tabIndex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="detailsModalLabel">Registration Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body" id="modalBody"></div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
