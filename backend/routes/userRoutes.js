const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserData, switchUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// User Routers

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserData);
router.get("/switch", protect, switchUser);

module.exports = router;
