const musicModel = require("../models/music.model");
const uploadAudio = require("../utils/uploadaudio");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {
  let stage = "Starting";

  try {
    stage = "Reading JWT";
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized User!",
      });
    }

    stage = "Verifying JWT";
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You are not Authorized to Create Music",
      });
    }

    stage = "Validating request";

    const { title } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Audio file is Required",
      });
    }

    if (!title) {
      return res.status(400).json({
        message: "Song Title is Required",
      });
    }

    stage = "Uploading audio";
    const result = await uploadAudio(req.file.buffer);

    stage = "Saving music to MongoDB";

    const music = await musicModel.create({
      uri: result.secure_url,
      publicId: result.public_id,
      title,
      artist: decoded.id,
    });

    return res.status(201).json({
      message: "Music Created Successfully!",
      music,
    });

  } catch (err) {
    console.error("FAILED AT:", stage);
    console.error("ACTUAL ERROR:", err);

    return res.status(500).json({
      message: "Failed to Create Music!",
      error: err.message,
      stage,
    });
  }
}

async function createAlbum(req, res) {

}

module.exports = {
  createMusic,
};