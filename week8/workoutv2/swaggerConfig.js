const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Goal API",
      version: "1.0.0",
      description: "API for managing goals",
    },
    servers: [
      {
        url: "http://localhost:4000/api", // Update with your API server URL
      },
    ],
  },
  apis: ["routes/goals.js", "routes/user.js"],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
