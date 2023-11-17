const express = require("express");
const usersController = require("../controllers/usersController");
const { checkRole } = require("../middleware/rolesMiddleware");
const router = express.Router();

// Get All users
router.get("/", usersController.getAllusers);

// Get Single user by ID
router.get("/:id", usersController.getuserById);

// Create a New user
router.post("/", usersController.createUser);

// Update user by ID
router.put("/:id", checkRole("admin"), usersController.updateUser);

// Delete user by ID
router.delete("/:id", checkRole("admin"), usersController.deleteUser);

module.exports = router;
