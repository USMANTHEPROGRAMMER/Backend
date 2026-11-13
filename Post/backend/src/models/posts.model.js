const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    caption: String,
    imageUrl: String,
    publicId: String,
})

const model = mongoose.model("Post", postSchema)

module.exports = model