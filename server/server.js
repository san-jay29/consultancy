const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tile-showroom';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => {
  console.log('❌ MongoDB Connection Error:', err.message);
  console.log('⚠️  Server will run without database. Using mock data.');
});

// Routes
app.use('/api/tiles', require('./routes/tiles'));
app.use('/api/quotes', require('./routes/quotes'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Tile Showroom API is running!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 API URL: http://localhost:${PORT}`);
});