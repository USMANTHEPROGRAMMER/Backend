const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/create", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({
      message: "Unauthorized Access!",
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    // const userId = verification.id;
  } catch (error) {
    res.status(401).json({
      message: "Invalid Token!",
    });
  }

  res.status(201).json({
    message: "Post Created Successfully!",
    token,
  });
});

module.exports = router;
