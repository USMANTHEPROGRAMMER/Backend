const express = require("express");
const router = express.Router()
const authController = require("../controllers/auth.controller")

router.post("/register", authController.registerUser)

router.get("/test", (req, res) => {
    res.json({
        message: "Hello from Auth Routes",
        token: req.cookies
    })
})

module.exports = router