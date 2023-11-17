const express = require("express");
const app = express();

const {
  getAllDogs,
  getDogById,
  createDog,
  updateDog,
  deleteDog,
} = require("./dogHandlers"); // 'dogHandlers.js' contains the route handlers

// Middleware to parse JSON
app.use(express.json());

//Implement a logging middleware to record the time of each request.
app.use((req, res, next) => {
  console.log(`Request received at ${new Date()}`);
  next();
});

// ROUTES

// GET /dogs
app.get("/dogs", getAllDogs);

// POST /dogs
app.post("/dogs", createDog);

// GET /dogs/:dogId
app.get("/dogs/:dogId", getDogById);

// PUT /dogs/:dogId
app.put("/dogs/:dogId", updateDog);

// DELETE /dogs/:dogId
app.delete("/dogs/:dogId", deleteDog);

const port = 3001;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});