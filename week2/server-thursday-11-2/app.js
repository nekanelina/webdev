const express = require('express');
const app = express();
const port = 3001;

// Endpoint 1: Text Response
app.get('/', (req, res) => {
  res.send('This is a simple text response.');
});

// Endpoint 2: JSON Response
app.get('/html', (req, res) => {
  const jsonData = {
    message: 'This is an updated JSON response.',
    timestamp: new Date()
  };

  res.json(jsonData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});