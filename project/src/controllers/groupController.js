const { groups } = require('../models/data');

exports.getAllGroups = (req, res) => {
  try {
    /* 
    Debugging Tips:
    1. Use console.log for general debugging:
       console.log('Debug message');
    
    2. Use console.error for error conditions:
       console.error('Error occurred:', error);
    
    3. Use console.warn for warning conditions:
       console.warn('Warning: potential issue detected');
    
    4. Use console.info for informational messages:
       console.info('Operation completed successfully');
    
    5. Use console.table for structured data:
       console.table(data, ['column1', 'column2']);
    
    6. Use console.trace() to print the current stack trace
    
    7. Use console.time() and console.timeEnd() to measure execution time:
       console.time('operationName');
       // ... code to measure
       console.timeEnd('operationName');
    */

    // Intentionally problematic code for demonstration
    console.time('getAllGroups');
    
    // Potential issues in the data
    const problematicGroup = groups.find(g => !g.id);
    if (problematicGroup) {
      console.warn('Found group with invalid ID:', problematicGroup);
    }

    // Check for null members
    groups.forEach(group => {
      if (!group.members) {
        console.error('Group has null members:', group);
      }
    });

    // Log the stack trace
    console.trace('Getting all groups');

    console.timeEnd('getAllGroups');
    
    res.json(groups);
  } catch (error) {
    console.error('Error in getAllGroups:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getGroupById = (req, res) => {
  const groupId = parseInt(req.params.id);
  
  // Debug group search
  console.log('Searching for group:', groupId);
  console.log('Available groups:', groups.map(g => g.id));
  
  const group = groups.find(g => g.id === groupId);
  
  if (!group) {
    console.warn(`Group with ID ${groupId} not found`);
    return res.status(404).json({ message: 'Group not found' });
  }
  
  res.json(group);
};