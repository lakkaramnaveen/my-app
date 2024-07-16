// Import the jsonwebtoken library for token verification
const jwt = require('jsonwebtoken');

// Middleware function for authenticating users using JWT
const auth = (req, res, next) => {
  // Get the token from the Authorization header and remove the 'Bearer ' prefix
  const token = req.header('Authorization').replace('Bearer ', '');
  
  // If no token is provided, respond with a 401 status code and access denied message
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the decoded token data (user information) to the request object
    req.user = decoded;
    // Call the next middleware function in the stack
    next();
  } catch (error) {
    // If the token is invalid, respond with a 400 status code and an invalid token message
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Export the auth middleware for use in other parts of the application
module.exports = auth;
