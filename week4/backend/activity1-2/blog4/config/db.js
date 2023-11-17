const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env

const MONGO_URI = process.env.MONGO_URI; // Access the database URI from .env

const connectDB = async () => {
  // same code
};

module.exports = connectDB;
