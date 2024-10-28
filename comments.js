// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  { username: 'John Doe', comment: 'Hello Everyone!' },
  { username: 'Jane Doe', comment: 'Good Morning!' },
];

// Create GET route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});