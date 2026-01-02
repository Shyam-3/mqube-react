// Simple API key authentication middleware for admin endpoints
export function requireApiKey(handler) {
  return async (req, res) => {
    const apiKey = req.headers['x-api-key']
    
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    
    return handler(req, res)
  }
}
