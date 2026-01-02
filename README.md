# MQube Tuitions - React Application

A modern, full-stack web application for MQube Tuitions with admin dashboard and form submissions powered by TiDB Cloud MySQL database.

## Features

### User-Facing
- 🏠 Responsive landing pages (Home, About, Services, Contact)
- 👨‍🏫 Teacher registration form
- 👨‍🎓 Student registration form
- 🎯 Free demo request form
- 📱 Mobile-friendly navigation
- 🎨 Professional UI with consistent styling

### Admin Dashboard
- 📊 Real-time statistics (teacher, student, demo counts)
- 📋 View all registrations in organized tables
- 🔍 Search and filter functionality
- 🔐 Protected routes with authentication
- 📱 Responsive admin interface

### Technical Stack
- ⚛️ React 19 + Vite
- 🎯 React Router for SPA navigation
- 🗄️ TiDB Cloud (MySQL-compatible serverless database)
- ☁️ Vercel serverless functions for API
- 🎨 Bootstrap 5 + Custom CSS
- 🔒 API key authentication for admin endpoints

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- TiDB Cloud account (free tier available)
- Vercel account for deployment

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd mqube-react
   npm install
   ```

2. **Set up TiDB Cloud database:**
   - Follow [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions
   - Create cluster and database
   - Run `schema.sql` to create tables

3. **Configure environment variables:**
   ```bash
   copy .env.example .env
   ```
   
   Edit `.env` with your TiDB Cloud credentials and generate an API key:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173)

5. **Test the application:**
   - Submit forms at `/teacher`, `/student`, `/freeDemo`
   - Login to admin at `/admin/login` (default: admin / admin123)
   - View submissions in dashboard

### Build for Production

```bash
npm run build
npm run preview
```

## Deployment

### Deploy to Vercel

1. **Set environment variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`
   - Apply to Production, Preview, and Development

2. **Deploy:**
   ```bash
   git push
   ```
   Vercel will auto-deploy, or:
   ```bash
   npm run build
   vercel --prod
   ```

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for complete deployment instructions.

## Project Structure

```
mqube-react/
├── api/                      # Vercel serverless functions
│   ├── db.js                # TiDB Cloud connection
│   ├── teacher.js           # Teacher submission endpoint
│   ├── student.js           # Student submission endpoint
│   ├── free-demo.js         # Free demo endpoint
│   ├── middleware/
│   │   └── auth.js          # API key authentication
│   └── admin/               # Protected admin endpoints
│       ├── teachers.js
│       ├── students.js
│       └── free-demo.js
├── public/                   # Static assets
│   ├── admin/assets/        # Admin CSS/JS/images
│   └── user/assets/         # User CSS/JS/images
├── src/
│   ├── admin/pages/         # Admin routes
│   ├── user/pages/          # User routes
│   ├── components/          # Shared components
│   └── utils/               # Utilities (API client, etc.)
├── schema.sql               # Database schema
├── .env.example             # Environment template
└── SETUP_GUIDE.md          # Detailed setup instructions
```

## API Endpoints

### Public (Form Submissions)
- `POST /api/teacher` - Teacher registration
- `POST /api/student` - Student registration
- `POST /api/free-demo` - Free demo request

### Protected (Admin)
Requires `x-api-key` header:
- `GET /api/admin/teachers` - Get all teachers
- `GET /api/admin/students` - Get all students
- `GET /api/admin/free-demo` - Get demo requests

## Environment Variables

```env
# TiDB Cloud Connection
TIDB_HOST=gateway01.us-west-2.prod.aws.tidbcloud.com
TIDB_PORT=4000
TIDB_USER=your_username.root
TIDB_PASSWORD=your_password
TIDB_DATABASE=mqube_db

# Admin Security
ADMIN_API_KEY=your-secret-key
VITE_ADMIN_API_KEY=same-secret-key
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Security

- ✅ SSL/TLS encryption for database connections
- ✅ API key authentication for admin endpoints
- ✅ Environment variables for sensitive data
- ✅ Protected admin routes
- ✅ Input validation and sanitization

**Never commit `.env` file to Git!**

## Troubleshooting

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) section 11 for common issues and solutions.

## Support & Documentation

- 📖 [Setup Guide](./SETUP_GUIDE.md) - Complete setup instructions
- 🗄️ [TiDB Cloud Docs](https://docs.pingcap.com/tidbcloud/)
- ☁️ [Vercel Docs](https://vercel.com/docs)

## License

Copyright © 2025 MQube Tuitions. All rights reserved.
```
