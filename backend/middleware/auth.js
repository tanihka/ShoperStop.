const jwt = require('jsonwebtoken');
const config = require('../config'); // Your config file with secret key and other configurations

// Middleware function to verify JWT and protect routes
const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('x-auth-token');

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, config.secretKey);

    // Attach the decoded user ID to the request object
    req.user = decoded.userId;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
