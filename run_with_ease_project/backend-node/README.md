Run With Ease - Node.js backend
------------------------------

1. Copy .env.example to .env and set MONGO_URI and ADMIN_SECRET.
2. Install dependencies: npm install
3. Start: npm start
4. API endpoints:
   POST /api/bookings   (body: {name,phone,service,details})
   GET  /api/bookings?secret=YOUR_SECRET   (admin list)
