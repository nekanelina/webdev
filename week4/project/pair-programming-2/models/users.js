// const users = [
//     {
//         id: 1,
//         username: "adminUser",
//         email: "admin@example.com",
//         role: "admin",
//     },
//     {
//         id: 2,
//         username: "guestUser",
//         email: "guest@example.com",
//         role: "guest",
//     },
//     {
//         id: 3,
//         username: "agencyUser",
//         email: "agency@example.com",
//         role: "travel agency",
//     },
//     {
//         id: 4,
//         username: "user1",
//         email: "user1@example.com",
//         role: "guest",
//     },
//     {
//         id: 5,
//         username: "user2",
//         email: "user2@example.com",
//         role: "guest",
//     },
// ];

// module.exports = users;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
