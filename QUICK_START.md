# 🚀 Quick Reference - TiDB Cloud Integration

## One-Time Setup (5 minutes)

### 1. TiDB Cloud Setup
```bash
1. Go to https://tidbcloud.com → Sign up
2. Create Serverless Cluster → Note connection details
3. Run schema.sql in SQL Editor
```

### 2. Local Configuration
```bash
# Copy env template
copy .env.example .env

# Generate API key
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Fill .env with TiDB credentials + generated API key
```

### 3. Start Development
```bash
npm install
npm run dev
```

## Vercel Deployment Checklist

- [ ] Set all environment variables in Vercel dashboard
- [ ] Commit and push code
- [ ] Verify deployment at your-app.vercel.app
- [ ] Test form submission
- [ ] Test admin login and dashboard

## Environment Variables Required

```env
TIDB_HOST          # From TiDB Cloud connect tab
TIDB_PORT          # Usually 4000
TIDB_USER          # username.root format
TIDB_PASSWORD      # Your TiDB password
TIDB_DATABASE      # mqube_db
ADMIN_API_KEY      # Generated random key
VITE_ADMIN_API_KEY # Same as ADMIN_API_KEY
```

## Testing Locally

### Test Forms
1. Go to http://localhost:5173/teacher
2. Fill and submit form
3. Check TiDB Cloud SQL Editor: `SELECT * FROM teachers`

### Test Admin
1. Go to http://localhost:5173/admin/login
2. Login: admin / admin123
3. View dashboard - should show submissions

## API Endpoints

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| POST | /api/teacher | None | Teacher form |
| POST | /api/student | None | Student form |
| POST | /api/free-demo | None | Demo request |
| GET | /api/admin/teachers | API Key | Get teachers |
| GET | /api/admin/students | API Key | Get students |
| GET | /api/admin/free-demo | API Key | Get demos |

## Common Commands

```bash
npm run dev        # Start dev server (port 5173)
npm run build      # Build for production
npm run preview    # Test production build
vercel --prod      # Deploy to Vercel
```

## Troubleshooting Quick Fixes

### Forms not saving
- Check Vercel function logs
- Verify TIDB_* env vars in Vercel
- Test SQL: `SELECT * FROM teachers` in TiDB console

### Admin shows "No data"
- Verify VITE_ADMIN_API_KEY = ADMIN_API_KEY
- Rebuild: `npm run build`
- Check browser DevTools → Network tab for 401 errors

### Connection errors
- Ensure TiDB cluster is running (not hibernating)
- Verify host/port in env vars
- Check Vercel logs for SQL errors

## Security Checklist

- [ ] Strong random API key generated
- [ ] .env file NOT committed to Git
- [ ] Different API keys for staging/production
- [ ] TiDB password is strong and unique
- [ ] Vercel env vars set for all environments

## File Structure Summary

```
api/
├── db.js              → TiDB connection
├── teacher.js         → POST /api/teacher
├── student.js         → POST /api/student
├── free-demo.js       → POST /api/free-demo
└── admin/
    ├── teachers.js    → GET /api/admin/teachers
    ├── students.js    → GET /api/admin/students
    └── free-demo.js   → GET /api/admin/free-demo

src/
├── utils/api.js       → Frontend API client
└── admin/pages/
    └── Dashboard.jsx  → Admin dashboard
```

## Database Schema Quick View

```sql
teachers (id, full_name, qualification, subjects, 
          experience, email, phone, created_at)

students (id, student_name, parent_name, grade, 
          subject, email, phone, created_at)

free_demo (id, name, email, phone, preferred_time, 
           message, created_at)
```

## Support Resources

- 📖 Full Guide: [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- 🗄️ TiDB Docs: https://docs.pingcap.com/tidbcloud/
- ☁️ Vercel Docs: https://vercel.com/docs

---

**Last Updated:** January 2026
