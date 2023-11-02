const express = require('express');
const app = express();
const port = 3001;

// Endpoint 1: Text Response
app.get('/', (req, res) => {
  res.send('This is a simple text response.');
});

//Implement an endpoint with a GET request to /textmessage that returns plain text.
app.get('/textmessage', (req, res) => {
  res.send(`this is a simple text response
  This is a simple text response.
  This is a simple text response`);
});

//Implement an endpoint with a GET request to /htmlmessage that returns HTML content.

app.get('/htmlmessage', (req, res) => {
  res.send(`<h1>This is a simple text response.</h1>`);
});

//Implement an additional endpoint with a GET request to /info. This endpoint should return HTML that greets the user and displays the time the request was received. Hint: use template literals to generate multiline HTML page.

app.get('/info', (req, res) => {
  res.send(`<h1>Hello, User!</h1>
  <p>The time is ${new Date()}</p>`);
});



// Endpoint 2: JSON Response
app.get('/jsonmessage', (req, res) => {
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