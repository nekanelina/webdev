const express = require('express');
const app = express();
const PORT = 3001;

// Define the first route
app.get('/endpoint1', (req, res) => {
  res.send('This is the first endpoint.');
});

// Define the second route
app.get('/endpoint2', (req, res) => {
  res.send('This is the second endpoint.');
});

// Custom 404 Middleware
const notFoundCb = (req, res, next) => {
  res.status(404).send("Sorry, the requested page couldn't be found.");
};

app.use(notFoundCb);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});