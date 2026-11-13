const express = require("express");
const cors = require('cors')
const app = express();
const model = require("./models/posts.model");
app.use(express.json());
app.use(cors())

const upload = require("./middleware/upload.middleware");
const uploadImage = require("./utils/uploadImage");

app.post("/post-create", upload.single("image"), async (req, res) => {
  try {
    const caption = req.body.caption;

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const result = await uploadImage(req.file.buffer);

    const post = await model.create({
      caption: caption,
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });

    return res.status(201).json({
      message: "Post created successfully",
      post: post,
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

app.delete("/posts/:id", async (req, res) => {
  try {
    const post = await model.findOneAndDelete({
      publicId: req.params.id,
    });
    if (!post) {
      return res.status(404).json({
        message: "Post Not Found",
      });
    }
    res.status(200).json({
      message: "Post Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = app;
