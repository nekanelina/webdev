const config = require("./utils/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const goalRoutes = require("./routes/goals");
const userRoutes = require("./routes/user");
const logger = require("./utils/logger");

// Swagger
const swaggerUI = require("swagger-ui-express");
//const YAML = require("yamljs");
//const swaggerSpec = YAML.load("./swagger.yaml");
const swaggerSpec = require("./swagger.json");
// const swaggerSpec = require("./swaggerConfig.js");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  logger.info(req.path, req.method);
  next();
});

// routes
app.use("/api/user", userRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// connect to db
logger.info("connecting to", config.MONGO_URI);
mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    logger.info("connected to db");
  })
  .catch((error) => {
    logger.error(error);
  });

module.exports = app;
