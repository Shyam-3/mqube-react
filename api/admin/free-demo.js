// Admin endpoint to retrieve free demo requests
import { query } from '../db.js'
import { requireApiKey } from '../middleware/auth.js'

async function handleGetFreeDemo(req, res) {
  try {
    const sql = `
      SELECT id, name, email, phone, preferred_time, message,
             DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at
      FROM free_demo 
      ORDER BY created_at DESC 
      LIMIT 1000
    `
    
    const demos = await query(sql)
    
    return res.status(200).json({ 
      success: true, 
      data: demos,
      count: demos.length 
    })
  } catch (error) {
    console.error('Error fetching free demo requests:', error)
    return res.status(500).json({ error: 'Failed to fetch free demo requests' })
  }
}

export default requireApiKey(handleGetFreeDemo)
