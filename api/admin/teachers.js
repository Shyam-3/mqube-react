// Admin endpoint to retrieve teacher registrations
import { query } from '../db.js'
import { requireApiKey } from '../middleware/auth.js'

async function handleGetTeachers(req, res) {
  try {
    const sql = `
      SELECT id, full_name, qualification, subjects, experience, 
             email, phone, address, city, state, zip_code, 
             DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at
      FROM teachers 
      ORDER BY created_at DESC 
      LIMIT 1000
    `
    
    const teachers = await query(sql)
    
    return res.status(200).json({ 
      success: true, 
      data: teachers,
      count: teachers.length 
    })
  } catch (error) {
    console.error('Error fetching teachers:', error)
    return res.status(500).json({ error: 'Failed to fetch teachers' })
  }
}

export default requireApiKey(handleGetTeachers)
