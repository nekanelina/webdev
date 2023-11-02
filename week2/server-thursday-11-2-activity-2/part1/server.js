const express = require("express");
const app = express();
const port = 4000;

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('---');
  next();
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
}

app.use(requestLogger);

// Endpoint for returning plain text
app.get("/textmessage", (req, res) => {
  res.send("This is a plain text message.");
});

// Endpoint for returning JSON data
app.get("/jsonmessage", (req, res) => {
  const jsonData = { message: "This is JSON data." };
  res.json(jsonData);
});

// Endpoint for returning HTML content
app.get("/htmlmessage", (req, res) => {
  const htmlContent = `
  <html>
  <body>
  <p>This is HTML content.</p>
  </body>
  </html>`;
  res.send(htmlContent);
});

// Endpoint for greeting the user with the current time
app.get("/info", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  const htmlResponse = `
    <html>
    <body>
    <h1>Hello, user!</h1>
    <p>Request received at: ${currentTime}</p>
    </body>
    </html>`;

  res.send(htmlResponse);
});

app.use(unknownEndpoint);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});