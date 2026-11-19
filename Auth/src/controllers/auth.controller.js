const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { userName, email, password } = req.body;

  const isExisted = await userModel.findOne({email})

  if (isExisted) {
    return res.status(409).json({
        message: "Email already exists",
    });
  }

  const user = await userModel.create({
    userName,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  try {
    res.cookie("token", token);

    res.status(201).json({
      message: "User Registered Successfully",
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
}

module.exports = { registerUser };
