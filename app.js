// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
require('dotenv').config(); // Load environment variables from .env file

// Create an Express application
const app = express();

// Enable CORS to allow requests from different origins
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Define routes for user and ticket management
app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);

// Define the port to run the server on
const PORT = process.env.PORT || 5001;

// Get the MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

// Check if MONGO_URI is defined in environment variables
if (!MONGO_URI) {
  console.error('MONGO_URI is not defined in environment variables');
  process.exit(1); // Exit the process if MONGO_URI is not defined
}

// Connect to MongoDB and start the server
mongoose.connect(MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(error => console.log(error)); // Log any errors during connection or server start
