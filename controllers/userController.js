// Import the User model and jwt for token generation
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Controller function for user registration
exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    // Create a new User instance with the provided data
    const user = new User({ username, password, role });
    // Save the user to the database
    await user.save();
    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Handle errors by responding with a 500 status code and the error message
    res.status(500).json({ error: error.message });
  }
};

// Controller function for user login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find the user by username
    const user = await User.findOne({ username });
    // Check if the user exists and the password is correct
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Generate a JWT token with the user's ID and role
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Respond with the generated token
    res.status(200).json({ token });
  } catch (error) {
    // Handle errors by responding with a 500 status code and the error message
    res.status(500).json({ error: error.message });
  }
};
