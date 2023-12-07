require("dotenv").config();

const environments = {
  development: {
    PORT: process.env.DEV_PORT,
    MONGO_URI: process.env.DEV_MONGO_URI,
  },
  production: {
    PORT: process.env.PROD_PORT,
    MONGO_URI: process.env.PROD_MONGO_URI,
  },
  test: {
    PORT: process.env.TEST_PORT,
    MONGO_URI: process.env.TEST_MONGO_URI,
  },
};

const currentEnvironment = process.env.NODE_ENV;
console.log("currentEnvironment", currentEnvironment);
const { PORT, MONGO_URI } = environments[currentEnvironment];

module.exports = {
  MONGO_URI,
  PORT,
};
