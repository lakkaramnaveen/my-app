/**
 * Middleware to restrict access based on user roles.
 * @param {Array} roles - An array of roles that are allowed to access the route.
 * @returns {Function} - The middleware function.
 */
const role = (roles) => {
  return (req, res, next) => {
    // Check if the user's role is included in the allowed roles
    if (!roles.includes(req.user.role)) {
      // If the user's role is not allowed, respond with a 403 status code and an "Access forbidden" message
      return res.status(403).json({ message: 'Access forbidden' });
    }
    // If the user's role is allowed, proceed to the next middleware or route handler
    next();
  };
};

// Export the role middleware for use in other parts of the application
module.exports = role;
