// API endpoint for teacher registration form submissions
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
    const { fullName, qualification, subjects, experience, email, phone, address, city, state, zipCode } = req.body

    // Validate required fields
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const sql = `
      INSERT INTO teachers 
      (full_name, qualification, subjects, experience, email, phone, address, city, state, zip_code) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    
    const result = await query(sql, [
      fullName,
      qualification || '',
      subjects || '',
      experience || '',
      email,
      phone,
      address || '',
      city || '',
      state || '',
      zipCode || ''
    ])

    return res.status(201).json({ 
      success: true, 
      message: 'Teacher registration submitted successfully',
      id: result.insertId 
    })
  } catch (error) {
    console.error('Error inserting teacher:', error)
    return res.status(500).json({ error: 'Failed to submit registration' })
  }
}
