const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
// const authMiddleware = require('../middleware/auth'); // Path to your auth middleware file

const router = express.Router();


router.post('/signup', async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log('Received request body:', req.body);
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // If user doesn't exist, proceed with creating a new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      console.log('User saved successfully');
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  });
  
router.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      // Create and send JWT
      const token = jwt.sign({ userId: user._id }, config.secretKey, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  });
  
  module.exports = router;