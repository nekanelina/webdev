// server.js
const path = require("path");
const colors = require("colors");
const dotenv = require("dotenv").config();
const createApp = require("./mern/backend/app");
const port = process.env.PORT || 5000;

const app = createApp();

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
