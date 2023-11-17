const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

const app = express();

// Define a simple GET route
app.get("/", (req, res) => {
  res.send("Hello, this is your API server!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// mongodb+srv://augustasreipslegeris:<password>@cluster0.z20jqrk.mongodb.net/?retryWrites=true&w=majority
