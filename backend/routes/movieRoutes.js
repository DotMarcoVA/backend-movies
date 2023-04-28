const express = require("express");
const router = express.Router();
const { getMovies, setMovies, updateMovie, deleteMovie } = require("../controllers/movieController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getMovies);
router.post("/", protect, setMovies);
router.put("/:id", protect, updateMovie);
router.delete("/:id", protect, deleteMovie);

module.exports = router;
