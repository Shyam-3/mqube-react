import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to a local API server for development
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        configure: (proxy, options) => {
          // Fallback handler for when API server isn't running
          proxy.on('error', (err, req, res) => {
            console.log('API Proxy Error - make sure API server is running on port 3001')
            res.writeHead(503, {
              'Content-Type': 'application/json',
            })
            res.end(JSON.stringify({
              error: 'API server not running. Run: npm run api:dev',
              message: 'Start the development API server with "npm run api:dev"'
            }))
          })
        }
      }
    }
  }
})
