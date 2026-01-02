// Admin endpoint to retrieve student registrations
import { query } from '../db.js'
import { requireApiKey } from '../middleware/auth.js'

async function handleGetStudents(req, res) {
  try {
    const sql = `
      SELECT id, student_name, parent_name, grade, subject, 
             email, phone, address, city, state, zip_code,
             DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at
      FROM students 
      ORDER BY created_at DESC 
      LIMIT 1000
    `
    
    const students = await query(sql)
    
    return res.status(200).json({ 
      success: true, 
      data: students,
      count: students.length 
    })
  } catch (error) {
    console.error('Error fetching students:', error)
    return res.status(500).json({ error: 'Failed to fetch students' })
  }
}

export default requireApiKey(handleGetStudents)
