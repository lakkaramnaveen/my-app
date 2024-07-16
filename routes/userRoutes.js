// Import required modules
const express = require('express');
const { register, login } = require('../controllers/userController');

// Create a new router instance
const router = express.Router();

/**
 * @route POST /users/register
 * @description Register a new user
 * @access Public
 */
router.post('/register', register);

/**
 * @route POST /users/login
 * @description Login a user and generate a JWT token
 * @access Public
 */
router.post('/login', login);

// Export the router to be used in other parts of the application
module.exports = router;
