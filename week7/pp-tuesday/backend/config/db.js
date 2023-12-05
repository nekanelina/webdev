const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI } = process.env;

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://augustasreipslegeris:oLxm9uX4FS89WTbv@cluster0.z20jqrk.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log(`Connected to database`);
};

module.exports = connectDB;
