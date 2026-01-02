# TiDB Cloud + Vercel Setup Guide

This guide explains how to connect your MQube React app deployed on Vercel with TiDB Cloud MySQL database.

## 1. Create TiDB Cloud Account & Cluster

1. Go to [TiDB Cloud](https://tidbcloud.com) and sign up
2. Create a new Serverless cluster (free tier available)
3. Choose a region close to your users
4. Wait for cluster to be provisioned (usually 1-2 minutes)

## 2. Get Database Connection Details

From your TiDB Cloud console:

1. Click on your cluster name
2. Go to "Connect" tab
3. Copy these values:
   - **Host**: `gateway01.{region}.prod.aws.tidbcloud.com`
   - **Port**: `4000`
   - **User**: `{prefix}.root`
   - **Password**: (set during cluster creation)
   - **Database**: Create one named `mqube_db`

## 3. Create Database Tables

1. In TiDB Cloud console, go to "SQL Editor" or "Chat2Query"
2. Run the SQL from `schema.sql` file in the project root:

```sql
-- Copy and paste contents from schema.sql
-- This creates teachers, students, and free_demo tables
```

## 4. Configure Environment Variables Locally

1. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```

2. Edit `.env` with your TiDB Cloud credentials:
   ```env
   TIDB_HOST=gateway01.us-west-2.prod.aws.tidbcloud.com
   TIDB_PORT=4000
   TIDB_USER=your_prefix.root
   TIDB_PASSWORD=your_password
   TIDB_DATABASE=mqube_db
   
   # Generate a strong random API key
   ADMIN_API_KEY=generate-a-strong-random-string-here
   
   # Frontend env var (for admin dashboard)
   VITE_ADMIN_API_KEY=same-api-key-as-above
   ```

3. Generate API key using:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

## 5. Install Dependencies

```bash
npm install
```

The `mysql2` package is already in `package.json`.

## 6. Test Locally

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Test form submissions:
   - Go to `http://localhost:5173/teacher`
   - Fill and submit the form
   - Check TiDB Cloud console → SQL Editor → `SELECT * FROM teachers`

3. Test admin dashboard:
   - Go to `http://localhost:5173/admin/login`
   - Login (username: admin, password: admin123)
   - View the dashboard - it should show your submissions

## 7. Deploy to Vercel

### A. Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add these variables (for **Production**, **Preview**, and **Development**):

   ```
   TIDB_HOST = your-tidb-host
   TIDB_PORT = 4000
   TIDB_USER = your-prefix.root
   TIDB_PASSWORD = your-password
   TIDB_DATABASE = mqube_db
   ADMIN_API_KEY = your-generated-api-key
   VITE_ADMIN_API_KEY = same-api-key
   ```

### B. Deploy

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add TiDB Cloud database integration"
   git push
   ```

2. Vercel will automatically redeploy

3. Or manually deploy:
   ```bash
   npm run build
   vercel --prod
   ```

## 8. Verify Deployment

1. Go to your deployed site: `https://your-app.vercel.app`
2. Submit a test form (Teacher, Student, or Free Demo)
3. Login to admin dashboard
4. Verify data appears in tables

## 9. Security Best Practices

✅ **DO:**
- Use strong, randomly generated API keys
- Rotate API keys periodically
- Use TiDB Cloud's built-in SSL/TLS (already configured)
- Keep `.env` file in `.gitignore`
- Use different API keys for staging/production

❌ **DON'T:**
- Commit `.env` files to Git
- Share API keys in public channels
- Use the same password for multiple environments
- Expose database credentials in frontend code

## 10. Monitoring & Maintenance

### Check Database Connection
```bash
# Test connection locally
npm run dev
# Check Vercel function logs
vercel logs
```

### View TiDB Cloud Metrics
- Go to TiDB Cloud Console → Your Cluster → Metrics
- Monitor queries, connections, and performance

### Backup Data
TiDB Cloud automatically backs up your data. To export manually:
1. Go to TiDB Cloud Console → SQL Editor
2. Run: `SELECT * FROM table_name INTO OUTFILE 'backup.csv'`

## 11. Troubleshooting

### Error: "Connection refused"
- Check if TiDB cluster is running
- Verify host/port in environment variables
- Ensure firewall allows outbound connections on port 4000

### Error: "Unauthorized" in admin dashboard
- Verify `VITE_ADMIN_API_KEY` matches `ADMIN_API_KEY`
- Clear browser cache and rebuild:
  ```bash
  npm run build
  ```

### Error: "Table doesn't exist"
- Run `schema.sql` in TiDB Cloud SQL Editor
- Verify database name matches `TIDB_DATABASE`

### Forms submit but data doesn't appear
- Check Vercel function logs for errors
- Verify API endpoints in browser DevTools → Network tab
- Ensure camelCase field names match between frontend and API

## 12. API Endpoints Reference

### Public Endpoints (Form Submissions)
- `POST /api/teacher` - Teacher registration
- `POST /api/student` - Student registration
- `POST /api/free-demo` - Free demo request

### Protected Endpoints (Admin Only)
Requires `x-api-key` header with `ADMIN_API_KEY`
- `GET /api/admin/teachers` - Get all teachers
- `GET /api/admin/students` - Get all students
- `GET /api/admin/free-demo` - Get all demo requests

## Support

For issues:
- TiDB Cloud: https://docs.pingcap.com/tidbcloud/
- Vercel: https://vercel.com/docs
- Project Issues: Create an issue in your repository
