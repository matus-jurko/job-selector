import dotenv from 'dotenv';
import http from 'http';
import app from './app';

dotenv.config(); // Load enviroment variables
const port = process.env.PORT || 8080;

const server = http.createServer(app).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default server;
