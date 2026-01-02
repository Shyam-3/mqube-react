// API endpoint for free demo request submissions
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
    const { name, email, phone, preferredTime, message } = req.body

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const sql = `
      INSERT INTO free_demo 
      (name, email, phone, preferred_time, message) 
      VALUES (?, ?, ?, ?, ?)
    `
    
    const result = await query(sql, [
      name,
      email,
      phone,
      preferredTime || '',
      message || ''
    ])

    return res.status(201).json({ 
      success: true, 
      message: 'Free demo request submitted successfully',
      id: result.insertId 
    })
  } catch (error) {
    console.error('Error inserting free demo:', error)
    return res.status(500).json({ error: 'Failed to submit request' })
  }
}
