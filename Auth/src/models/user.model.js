const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    email: {
        type: String,
        unique: true,
    }, 
    password: String
})

const model = mongoose.model("User", userSchema)

module.exports = model