const config = require("./config");

console.log("Database: ", config.MONGO_URI);
console.log("NODE_ENV: ", config.NODE_ENV);
console.log("PORT: ", config.PORT);
