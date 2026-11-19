const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload.middleware");
const { createMusic } = require("../controllers/music.controller");

// router.post("/music", createMusic)
router.post("/create", upload.single("audio"), createMusic);

module.exports = router;
