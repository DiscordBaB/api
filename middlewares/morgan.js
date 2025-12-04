const morgan = require('morgan')
import fs from 'fs';
import path from 'path';

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../access.log'), // Adjust the path as needed
  { flags: 'a' }
);

// Export a function that returns the Morgan middleware
const logger = () => {
  return morgan('combined',
    { stream: accessLogStream });
};

export default logger;