// Dashboard JavaScript

// Format date to DD-MM-YYYY
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

// Initialize immediately when script loads (for SPA compatibility)
(function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn') || sessionStorage.getItem('adminLoggedIn');
    
    if (!isLoggedIn) {
        // When used in SPA, ProtectedRoute handles this instead
        // window.location.href = "login.html";
        // return;
    }

    // Initialize dashboard
    initDashboard();
    loadDashboardData();
})();

// Initialize dashboard functionality
function initDashboard() {
    // Sidebar toggle for mobile
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    
    if (toggleSidebar) {
        toggleSidebar.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const sections = document.querySelectorAll('.content-section');

    // Clicking the topbar title should go to overview
    const topbarTitle = document.querySelector('.topbar-title');
    if (topbarTitle) {
        topbarTitle.addEventListener('click', function() {
            const overviewLink = document.querySelector('[data-section="overview"]');
            if (overviewLink) {
                overviewLink.click();
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Close sidebar on mobile
            if (window.innerWidth < 992) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 992) {
            if (!sidebar.contains(e.target) && !toggleSidebar.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Make stat cards clickable
    const tc = document.querySelector('.stat-teachers');
    const sc = document.querySelector('.stat-students');
    const dc = document.querySelector('.stat-demo');
    tc && tc.addEventListener('click', function() {
        document.querySelector('[data-section="teachers"]').click();
    });
    sc && sc.addEventListener('click', function() {
        document.querySelector('[data-section="students"]').click();
    });
    dc && dc.addEventListener('click', function() {
        document.querySelector('[data-section="freedemo"]').click();
    });
}

// Load dashboard data (mock data)
function loadDashboardData() {
    const mockData = {
        teachers: [
            {
                id: 1,
                fullName: 'Dr. Rajesh Kumar',
                qualification: 'Doctorate (Ph.D., Ed.D., J.D., M.D., or equivalent)',
                subjects: 'Mathematics, Physics',
                experienceYears: '8',
                experienceMonths: '6',
                experience: '8 years 6 months',
                contactNo: '9876543210',
                whatsappNo: '9876543210',
                email: 'rajesh.kumar@example.com',
                skypeId: 'rajesh.kumar123',
                address: '123 MG Road, Bangalore, Karnataka 560001',
                workingHours: 'Full Time',
                internetConnection: 'Yes',
                earlyMorning: 'Yes',
                digitalPen: 'Yes',
                resume: 'resume_rajesh.pdf',
                identityProof: 'aadhar_rajesh.pdf',
                highestDegree: 'phd_certificate.pdf',
                hearAboutUs: 'Search Engine',
                date: formatDate('2024-12-20')
            },
            {
                id: 2,
                fullName: 'Prof. Meena Sharma',
                qualification: 'Master\'s Degree (M.A., M.S., M.Ed., MBA, or equivalent)',
                subjects: 'Chemistry, Biology',
                experienceYears: '5',
                experienceMonths: '3',
                experience: '5 years 3 months',
                contactNo: '9876543211',
                whatsappNo: '9876543211',
                email: 'meena.sharma@example.com',
                skypeId: 'meena.s',
                address: '456 Anna Nagar, Chennai, Tamil Nadu 600040',
                workingHours: 'Part Time',
                internetConnection: 'Yes',
                earlyMorning: 'No',
                digitalPen: 'Yes',
                resume: 'resume_meena.pdf',
                identityProof: 'aadhar_meena.pdf',
                highestDegree: 'masters_certificate.pdf',
                hearAboutUs: 'Social Media',
                date: formatDate('2024-12-21')
            },
            {
                id: 3,
                fullName: 'Arjun Patel',
                qualification: 'Bachelor\'s Degree (B.A., B.S., B.Ed., or equivalent)',
                subjects: 'Computer Science',
                experienceYears: '3',
                experienceMonths: '0',
                experience: '3 years',
                contactNo: '9876543212',
                whatsappNo: '9876543212',
                email: 'arjun.patel@example.com',
                skypeId: '',
                address: '789 FC Road, Pune, Maharashtra 411004',
                workingHours: 'Full Time',
                internetConnection: 'Yes',
                earlyMorning: 'Yes',
                digitalPen: 'No',
                resume: 'resume_arjun.pdf',
                identityProof: 'pan_arjun.pdf',
                highestDegree: 'btech_certificate.pdf',
                hearAboutUs: 'News Paper',
                date: formatDate('2024-12-22')
            }
        ],
        students: [
            {
                id: 1,
                studentName: 'Aarav Gupta',
                gender: 'Male',
                parentName: 'Vijay Gupta',
                subjects: 'Mathematics, Physics',
                grade: '10',
                board: 'CBSE',
                schoolName: 'Delhi Public School',
                contactNo: '9876543213',
                whatsappNo: '9876543213',
                email: 'vijay.gupta@example.com',
                address: '12 Green Park, New Delhi, Delhi 110016',
                hearAboutUs: 'Search Engine',
                date: formatDate('2024-12-22')
            },
            {
                id: 2,
                studentName: 'Ananya Singh',
                gender: 'Female',
                parentName: 'Rakesh Singh',
                subjects: 'Chemistry, Biology',
                grade: '12',
                board: 'ICSE',
                schoolName: 'St. Xavier\'s School',
                contactNo: '9876543214',
                whatsappNo: '9876543214',
                email: 'rakesh.singh@example.com',
                address: '34 Park Street, Kolkata, West Bengal 700016',
                hearAboutUs: 'Social Media',
                date: formatDate('2024-12-23')
            },
            {
                id: 3,
                studentName: 'Ishaan Reddy',
                gender: 'Male',
                parentName: 'Srinivas Reddy',
                subjects: 'Computer Science',
                grade: '11',
                board: 'Stateboard',
                schoolName: 'Narayana High School',
                contactNo: '9876543215',
                whatsappNo: '9876543215',
                email: 'srinivas.reddy@example.com',
                address: '56 Jubilee Hills, Hyderabad, Telangana 500033',
                hearAboutUs: 'Others',
                date: formatDate('2024-12-24')
            },
            {
                id: 4,
                studentName: 'Diya Mehta',
                gender: 'Female',
                parentName: 'Karan Mehta',
                subjects: 'Physics, Mathematics',
                grade: '9',
                board: 'CBSE',
                schoolName: 'Ryan International School',
                contactNo: '9876543216',
                whatsappNo: '9876543216',
                email: 'karan.mehta@example.com',
                address: '78 Linking Road, Mumbai, Maharashtra 400050',
                hearAboutUs: 'News Paper',
                date: formatDate('2024-12-25')
            }
        ],
        freedemo: [
            {
                id: 1,
                iAm: 'Parent',
                fullName: 'Ramesh Kumar',
                gender: 'Male',
                board: 'CBSE',
                grade: '10',
                email: 'ramesh.kumar@example.com',
                contactNo: '9876543217',
                whatsappNo: '9876543217',
                address: '90 Sector 18, Noida, Uttar Pradesh 201301',
                verificationCode: 'ABC123',
                preferredDate: formatDate('2024-12-28'),
                date: formatDate('2024-12-23')
            },
            {
                id: 2,
                iAm: 'Student',
                fullName: 'Sneha Desai',
                gender: 'Female',
                board: 'ISC',
                grade: '12',
                email: 'sneha.desai@example.com',
                contactNo: '9876543218',
                whatsappNo: '9876543218',
                address: '23 CG Road, Ahmedabad, Gujarat 380009',
                verificationCode: 'XYZ789',
                preferredDate: formatDate('2024-12-29'),
                date: formatDate('2024-12-24')
            },
            {
                id: 3,
                iAm: 'Guardian',
                fullName: 'Pradeep Nair',
                gender: 'Male',
                board: 'Matriculation',
                grade: '8',
                email: 'pradeep.nair@example.com',
                contactNo: '9876543219',
                whatsappNo: '9876543219',
                address: '45 Marine Drive, Kochi, Kerala 682031',
                verificationCode: 'DEF456',
                preferredDate: formatDate('2024-12-30'),
                date: formatDate('2024-12-25')
            },
            {
                id: 4,
                iAm: 'Parent',
                fullName: 'Kavita Joshi',
                gender: 'Female',
                board: 'CBSE',
                grade: '11',
                email: 'kavita.joshi@example.com',
                contactNo: '9876543220',
                whatsappNo: '9876543220',
                address: '67 Ashok Nagar, Jaipur, Rajasthan 302001',
                verificationCode: 'GHI012',
                preferredDate: formatDate('2024-12-31'),
                date: formatDate('2024-12-26')
            }
        ]
    };

    // Update counts
    const tc = document.getElementById('teacherCount');
    const sc = document.getElementById('studentCount');
    const dc = document.getElementById('demoCount');
    if (tc) tc.textContent = mockData.teachers.length;
    if (sc) sc.textContent = mockData.students.length;
    if (dc) dc.textContent = mockData.freedemo.length;

    // Load tables
    loadTeachersTable(mockData.teachers);
    loadStudentsTable(mockData.students);
    loadDemoTable(mockData.freedemo);

    // Load recent activity
    loadRecentActivity(mockData);
}

function loadTeachersTable(data) {
    const tbody = document.querySelector('#teachersTable tbody');
    if (!tbody) return;
    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" class="text-center text-muted">No data available</td></tr>';
        return;
    }
    tbody.innerHTML = data.map((teacher, index) => `
        <tr>
            <td>${teacher.id}</td>
            <td>${teacher.fullName}</td>
            <td>${teacher.qualification}</td>
            <td>${teacher.subjects}</td>
            <td>${teacher.experience}</td>
            <td>${teacher.email}</td>
            <td>${teacher.contactNo}</td>
            <td>${teacher.date}</td>
            <td>
                <button class="btn btn-sm btn-info view-btn" data-index="${index}" data-type="teacher">
                    <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteRecord('teacher', ${teacher.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
    window.teachersData = data;
    tbody.querySelectorAll('.view-btn[data-type="teacher"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            viewDetails(window.teachersData[index], 'teacher');
        });
    });
}

function loadStudentsTable(data) {
    const tbody = document.querySelector('#studentsTable tbody');
    if (!tbody) return;
    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" class="text-center text-muted">No data available</td></tr>';
        return;
    }
    tbody.innerHTML = data.map((student, index) => `
        <tr>
            <td>${student.id}</td>
            <td>${student.studentName}</td>
            <td>${student.parentName}</td>
            <td>${student.grade}</td>
            <td>${student.subjects}</td>
            <td>${student.email}</td>
            <td>${student.contactNo}</td>
            <td>${student.date}</td>
            <td>
                <button class="btn btn-sm btn-info view-btn" data-index="${index}" data-type="student">
                    <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteRecord('student', ${student.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
    window.studentsData = data;
    tbody.querySelectorAll('.view-btn[data-type="student"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            viewDetails(window.studentsData[index], 'student');
        });
    });
}

function loadDemoTable(data) {
    const tbody = document.querySelector('#demoTable tbody');
    if (!tbody) return;
    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" class="text-center text-muted">No data available</td></tr>';
        return;
    }
    tbody.innerHTML = data.map((demo, index) => `
        <tr>
            <td>${demo.id}</td>
            <td>${demo.fullName}</td>
            <td>${demo.email}</td>
            <td>${demo.contactNo}</td>
            <td>${demo.board}</td>
            <td>${demo.grade}</td>
            <td>${demo.preferredDate}</td>
            <td>${demo.date}</td>
            <td>
                <button class="btn btn-sm btn-info view-btn" data-index="${index}" data-type="demo">
                    <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteRecord('demo', ${demo.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
    window.demoData = data;
    tbody.querySelectorAll('.view-btn[data-type="demo"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            viewDetails(window.demoData[index], 'demo');
        });
    });
}

function loadRecentActivity(data) {
    const recentActivity = document.getElementById('recentActivity');
    if (!recentActivity) return;
    const allData = [
        ...data.teachers.map(t => ({ type: 'Teacher', name: t.fullName, date: t.date })),
        ...data.students.map(s => ({ type: 'Student', name: s.studentName, date: s.date })),
        ...data.freedemo.map(d => ({ type: 'Demo', name: d.name, date: d.date }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

    if (allData.length === 0) {
        recentActivity.innerHTML = '<p class="text-muted">No recent activity</p>';
        return;
    }

    recentActivity.innerHTML = allData.map(item => `
        <div class="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
            <div>
                <strong>${item.type} Registration:</strong> ${item.name}
            </div>
            <small class="text-muted">${item.date}</small>
        </div>
    `).join('');
}

function viewDetails(data, type) {
    const modalElement = document.getElementById('detailsModal');
    const modalBody = document.getElementById('modalBody');
    if (!modalElement || !modalBody) return;
    let detailsHtml = '<div class="modal-details-list">';
    for (const [key, value] of Object.entries(data)) {
        detailsHtml += `
            <div class="detail-row">
                <strong class="detail-label">${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong>
                <span class="detail-value">${value}</span>
            </div>
        `;
    }
    detailsHtml += '</div>';
    modalBody.innerHTML = detailsHtml;
    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
    modal.show();
}

function deleteRecord(type, id) {
    if (confirm('Are you sure you want to delete this record?')) {
        console.log(`Deleting ${type} record with ID: ${id}`);
        alert('This feature will be implemented with database integration');
    }
}

function exportData(type) {
    console.log(`Exporting ${type} data`);
    alert('Export feature will be implemented with database integration');
}
