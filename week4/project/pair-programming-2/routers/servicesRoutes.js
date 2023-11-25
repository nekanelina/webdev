const express = require("express");
const serviceController = require("../controllers/servicesController");
const { checkRole } = require("../middleware/rolesMiddleware");
const router = express.Router();

router.get("/", serviceController.getAllservices);
router.get("/:id", serviceController.getserviceById);
router.post("/", checkRole("admin"), serviceController.createservice);
router.put("/:id", checkRole("admin"), serviceController.updateservice);
router.delete("/:id", checkRole("admin"), serviceController.deleteservice);

module.exports = router;
