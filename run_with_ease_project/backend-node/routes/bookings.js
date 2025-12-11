const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create booking
router.post('/', async (req, res) => {
  try {
    const { name, phone, service, details } = req.body;
    if(!name||!phone||!details) return res.status(400).json({ error: 'Missing fields' });
    const b = new Booking({ name, phone, service, details });
    await b.save();
    return res.json({ ok:true, id: b._id });
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

// List bookings (admin) - simple secret key check
router.get('/', async (req, res) => {
  const secret = req.query.secret || req.headers['x-admin-secret'];
  if(secret !== process.env.ADMIN_SECRET) return res.status(401).json({ error: 'Unauthorized' });
  const list = await Booking.find().sort({ createdAt: -1 }).limit(200).lean();
  res.json(list);
});

module.exports = router;
