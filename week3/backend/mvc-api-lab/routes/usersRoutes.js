const usersController = require("../controllers/usersController");
const express = require("express");
const router = express.Router();
const { checkRole } = require("../middleware/rolesMiddleware");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.createUser);
router.delete("/:id", usersController.deleteUser);
router.patch("/:id", usersController.updateUser);

module.exports = router;
