// API endpoint for student registration form submissions
import { query } from './db.js'

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { studentName, parentName, grade, subject, email, phone, address, city, state, zipCode } = req.body

    // Validate required fields
    if (!studentName || !parentName || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const sql = `
      INSERT INTO students 
      (student_name, parent_name, grade, subject, email, phone, address, city, state, zip_code) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    
    const result = await query(sql, [
      studentName,
      parentName,
      grade || '',
      subject || '',
      email,
      phone,
      address || '',
      city || '',
      state || '',
      zipCode || ''
    ])

    return res.status(201).json({ 
      success: true, 
      message: 'Student registration submitted successfully',
      id: result.insertId 
    })
  } catch (error) {
    console.error('Error inserting student:', error)
    return res.status(500).json({ error: 'Failed to submit registration' })
  }
}
