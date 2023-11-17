/*
const express = require("express");
const logger = require("./middleware/logger");
const {
  unknownEndpoint,
  errorHandler,
} = require("./middleware/errorMiddleware");

const app = express();

// Init middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());

// Members API Routes
app.use("/api/members", require("./routers/membersRouter"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(unknownEndpoint);
app.use(errorHandler);

*/
const express = require("express");
const app = express();

// An endpoint that throws a custom error
app.get("/custom-error", (req, res, next) => {
  const customError = new Error("This is a custom error");
  customError.statusCode = 400;
  next(customError); // Pass the custom error to the error handling middleware
});

// An endpoint that throws a 404 error
app.get("/not-found", (req, res, next) => {
  const notFoundError = new Error("Resource not found");
  notFoundError.statusCode = 404;
  next(notFoundError); // Pass the 404 error to the error handling middleware
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Check for a custom status code or default to 500 (Internal Server Error)
  const statusCode = err.statusCode || 500;

  // Respond with the status code and error message
  res.status(statusCode).send(err.message);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
