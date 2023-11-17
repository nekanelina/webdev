const express = require("express");
const tourController = require("../controllers/toursController");
const { checkRole } = require("../middleware/rolesMiddleware");

const router = express.Router();

// Get all tours
router.get("/", tourController.getAlltours);

// Get a single tour by ID
router.get("/:id", tourController.gettourById);

// Create a new tour
router.post("/", checkRole("admin"), tourController.createtour);

// Update a tour by ID
router.put("/:id", checkRole("admin"), tourController.updatetour);

// Delete a tour by ID
router.delete("/:id", checkRole("admin"), tourController.deletetour);

module.exports = router;
