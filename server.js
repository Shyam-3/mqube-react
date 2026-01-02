// Development API server for local testing
// This mimics Vercel's serverless function behavior locally
import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'

// Load environment variables
config()

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())

// Import API handlers
import adminFreeDemo from './api/admin/free-demo.js'
import adminStudents from './api/admin/students.js'
import adminTeachers from './api/admin/teachers.js'
import freeDemo from './api/free-demo.js'
import student from './api/student.js'
import teacher from './api/teacher.js'

// Helper to wrap Vercel handlers for Express
const wrapHandler = (handler) => async (req, res) => {
  try {
    await handler(req, res)
  } catch (error) {
    console.error('Handler error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Public API routes
app.post('/api/teacher', wrapHandler(teacher))
app.post('/api/student', wrapHandler(student))
app.post('/api/free-demo', wrapHandler(freeDemo))

// Admin API routes (protected)
app.get('/api/admin/teachers', wrapHandler(adminTeachers))
app.get('/api/admin/students', wrapHandler(adminStudents))
app.get('/api/admin/free-demo', wrapHandler(adminFreeDemo))

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API server is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Dev API server running on http://localhost:${PORT}`)
  console.log(`   Test at: http://localhost:${PORT}/api/health`)
  console.log(`\n   Database: ${process.env.TIDB_HOST}`)
  console.log(`   Database name: ${process.env.TIDB_DATABASE}\n`)
})
