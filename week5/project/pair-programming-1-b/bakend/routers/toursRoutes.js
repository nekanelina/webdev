const express = require("express");
const { checkRole } = require("../middleware/rolesMiddleware");
const router = express.Router();
const {
  getAllTours,
  getTourByID,
  createTours,
  updatetour,
  putTour,
  deletetour,
} = require("../controllers/toursController");

// Get All service
router.get("/", getAllTours);

// Get Single user by ID
router.get("/:id", getTourByID);

// Create New service
router.post("/", createTours);

// Update service
router.patch("/:id", updatetour);

// Replace service
router.put("/:id", putTour);

// Delete service
router.delete("/:id", deletetour);

// Accessible only by users with the "admin" role
// router.post("/", checkRole("admin"), serviceController.createService);
// router.put("/:id", checkRole("admin"), serviceController.updateservice);
// router.delete("/:id", checkRole("admin"), serviceController.deleteservice);

module.exports = router;
