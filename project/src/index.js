const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const groupRoutes = require('./routes/groupRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev')); // HTTP request logging

// Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/groups', groupRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Logger Demo API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET /api/users');
  console.log('  GET /api/users/:id');
  console.log('  GET /api/projects');
  console.log('  GET /api/projects/:id');
  console.log('  GET /api/groups');
  console.log('  GET /api/groups/:id');
});