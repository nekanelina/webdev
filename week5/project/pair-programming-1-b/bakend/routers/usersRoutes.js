const express = require("express");
const { checkRole } = require("../middleware/rolesMiddleware");
const router = express.Router();
const {
  createUsers,
  getAllUsers,
  getUserByID,
  updateuser,
  putuser,
  deleteuser,
} = require("../controllers/usersController");

// Get All service
router.get("/", getAllUsers);

// Get Single user by ID
router.get("/:id", getUserByID);

// Create New service
router.post("/", createUsers);

// Update service
router.patch("/:id", updateuser);

// Replace service
router.put("/:id", putuser);

// Delete service
router.delete("/:id", deleteuser);

// Accessible only by users with the "admin" role
// router.post("/", checkRole("admin"), serviceController.createService);
// router.put("/:id", checkRole("admin"), serviceController.updateservice);
// router.delete("/:id", checkRole("admin"), serviceController.deleteservice);

module.exports = router;
