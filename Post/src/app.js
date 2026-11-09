const express = require("express");
const app = express();
const model = require("./models/posts.model");
app.use(express.json());

app.post("/post-create", async (req, res) => {

    const data = req.body;

  try {
    await model.create(data);

    return res.status(200).json({
      message: "Hello World",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Creating Post",
    });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await model.find();
    return res.status(200).json({
      message: "Posts fetched successfully",
      data: posts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Fetching Posts",
    });
  }
});

module.exports = app;
