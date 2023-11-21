const express = require("express");
const { checkRole } = require("../middleware/rolesMiddleware");
const router = express.Router();
const {
  getAllservices,
  getserviceById,
  createService,
  updateservice,
  putService,
  deleteService,
} = require("../controllers/servicesController");

// Get All service
router.get("/", getAllservices);

// Get Single user by ID
router.get("/:id", getserviceById);

// Create New service
router.post("/", checkRole("admin"), createService);

// Update service
router.patch("/:id", checkRole("admin"), updateservice);

// Replace service
router.put("/:id", checkRole("admin"), putService);

// Delete service
router.delete("/:id", checkRole("admin"), deleteService);

// Accessible only by users with the "admin" role
// router.post("/", checkRole("admin"), serviceController.createService);
// router.put("/:id", checkRole("admin"), serviceController.updateservice);
// router.delete("/:id", checkRole("admin"), serviceController.deleteservice);

module.exports = router;
