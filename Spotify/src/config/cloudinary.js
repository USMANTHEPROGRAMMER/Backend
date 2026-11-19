const cloudinary = require("cloudinary").v2;

console.log("Cloudinary ENV:", {
    name: process.env.CLOUDINARY_NAME ? "FOUND" : "MISSING",
    key: process.env.CLOUDINARY_API_KEY ? "FOUND" : "MISSING",
    secret: process.env.CLOUDINARY_API_SECRET ? "FOUND" : "MISSING",
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;