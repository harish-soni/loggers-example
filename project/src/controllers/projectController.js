const { projects } = require('../models/data');

exports.getAllProjects = (req, res) => {
  // Using console.table to display structured data
  console.table(projects, ['id', 'name', 'status']);
  
  res.json(projects);
};

exports.getProjectById = (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    console.error(`Project with ID ${projectId} not found`);
    return res.status(404).json({ message: 'Project not found' });
  }
  
  res.json(project);
};