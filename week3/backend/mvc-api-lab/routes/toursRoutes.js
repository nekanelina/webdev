const toursController = require("../controllers/toursController");
const express = require("express");
const router = express.Router();
const { checkRole } = require("../middleware/rolesMiddleware");

router.get("/", toursController.getAllTours);
router.get("/:id", checkRole("admin"), toursController.getTourById);
router.post("/", checkRole("admin"), toursController.createTour);
router.delete("/:id", checkRole("admin"), toursController.deleteTour);
router.patch("/:id", checkRole("admin"), toursController.updateTour);

module.exports = router;
