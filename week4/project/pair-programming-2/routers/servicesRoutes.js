const express = require("express");
const serviceController = require("../controllers/servicesController");
const { checkRole } = require("../middleware/rolesMiddleware");
const router = express.Router();

// Get All service
router.get("/", serviceController.getAllservices);

// Get Single user by ID
router.get("/:id", serviceController.getserviceById);

// Accessible only by users with the "admin" role
router.post("/", checkRole("admin"), serviceController.createservice);
router.put("/:id", checkRole("admin"), serviceController.updateservice);
router.delete("/:id", checkRole("admin"), serviceController.deleteservice);

module.exports = router;
