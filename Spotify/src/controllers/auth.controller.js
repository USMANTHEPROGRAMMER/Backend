const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerUser(req, res) {
  const { userName, email, password, role = "use" } = req.body;

  const userAlreadyExists = await userModel.findOne({
    $or: [{ userName }, { email }],
  });

  if (userAlreadyExists) {
    return res.status(409).json({
      message: "User Already Exists!",
    });
  }

  try {
    const hash = await bcrypt.hash(password, 10);

    const userCreate = await userModel.create({
      userName,
      email,
      password: hash,
      role,
    });

    const token = jwt.sign(
      {
        id: userCreate._id,
        role: userCreate.role,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "User Created Successfully!",
      user: userCreate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create user!",
    });
  }
}

async function loginUser(req, res) {
  const { userName, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ userName }, { email }],
  });

  if (!user) {
    return res.status(401).json({
      message: "User not found!",
    });
  }

//   const hashPassword = await bcrypt.hash(password, 10);
  const isPasswordMatch = await bcrypt.compare(password, user.password);

//   console.log(hashPassword)

  if (!isPasswordMatch) {
    return res.status(401).json({
      message: "Invalid Password!",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "Login successful!",
    user: {
      name: user.userName,
      email: user.email,
      role: user.role,
    },
    token,
  });
}

module.exports = { registerUser, loginUser };
