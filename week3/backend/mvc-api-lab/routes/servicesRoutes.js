const servicesController = require("../controllers/servicesController");
const express = require("express");
const router = express.Router();
const { checkRole } = require("../middleware/rolesMiddleware");

router.get("/", servicesController.getAllServices);
router.get("/:id", checkRole("admin"), servicesController.getServiceById);
router.post("/", checkRole("admin"), servicesController.createService);
router.delete("/:id", checkRole("admin"), servicesController.deleteService);
router.patch("/:id", checkRole("admin"), servicesController.updateService);

module.exports = router;
