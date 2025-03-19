// Dummy data for demonstration
exports.users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "user" }
];

exports.projects = [
  { id: 1, name: "E-commerce Platform", status: "active", owner: 1 },
  { id: 2, name: "Blog System", status: "planning", owner: 2 },
  { id: 3, name: "Mobile App", status: "completed", owner: 1 }
];

exports.groups = [
  { id: 1, name: "Development Team", members: [1, 2] },
  { id: 2, name: "Design Team", members: [2, 3] },
  { id: undefined, name: "Test Team", members: null } // Intentional issues for debugging
];