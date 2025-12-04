import morgan from 'morgan';
import { createWriteStream } from 'fs';
import { join } from 'path';

const accessLogStream = createWriteStream(
  join(__dirname, '../access.log'), // Adjust the path as needed
  { flags: 'a' }
);

// Export a function that returns the Morgan middleware
const logger = () => {
  return morgan('combined',
    { stream: accessLogStream });
};

export default logger;