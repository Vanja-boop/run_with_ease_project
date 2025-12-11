require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookings = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/bookings', bookings);

const port = process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true })
  .then(()=>{ console.log('Mongo connected'); app.listen(port, ()=> console.log('Server on', port)) })
  .catch(err=>{ console.error('Mongo connect error', err) });
