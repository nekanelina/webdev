const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

// Get All users
router.get("/", usersController.getUsers);

// Get Single user by ID
router.get("/:id", usersController.getUser);

// Create a New user
router.post("/", usersController.postUser);

// Update user by ID
router.put("/:id", usersController.putUser);

// Delete user by ID
router.delete("/:id", usersController.deleteuser);

// Update user partially by ID
router.patch("/:id", usersController.patchUser);

module.exports = router;
