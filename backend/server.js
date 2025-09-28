const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Check if MONGO_URI is set
if (!process.env.MONGO_URI) {
    console.error("FATAL ERROR: MONGO_URI is not defined in .env file");
    process.exit(1);
}

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected successfully!"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// API Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Jharkhand Yatra API is running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Backend server is running on http://localhost:${PORT}`);
});