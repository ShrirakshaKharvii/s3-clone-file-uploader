// server.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files from 'frontend' folder
app.use(express.static('frontend'));

// A simple route
app.get('/', (req, res) => {
  res.send('Hello, AWS Cloud Foundation Project!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
