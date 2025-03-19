const { users } = require('../models/data');

exports.getAllUsers = (req, res) => {
  // Basic logging
  console.log('Fetching all users');
  console.log('Request timestamp:', new Date().toISOString());
  
  res.json(users);
};

exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  
  // Using console.info for important information
  console.info(`Attempting to fetch user with ID: ${userId}`);
  
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    // Using console.warn for warning conditions
    console.warn(`User with ID ${userId} not found`);
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.json(user);
};