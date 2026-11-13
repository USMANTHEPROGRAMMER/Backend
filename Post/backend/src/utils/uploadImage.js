const cloudinary = require("../config/cloudinary");

const uploadImage = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    ).end(fileBuffer);
  });
};

module.exports = uploadImage;

// Important Concepts
// 1. require()

// Doosri file ya package ko current file mein import karne ke liye use hota hai.
// const cloudinary = require("../config/cloudinary");


// Yahan configured Cloudinary object import ho raha hai.

// 2. fileBuffer
// - Buffer image ka actual binary data hota hai.
// - Multer MemoryStorage mein image ko memory mein rakhta hai.
// - req.file.buffer se image data milta hai.
// 3. new Promise()

// Promise asynchronous operations handle karta hai.

// Ismein do important functions hote hain:
// - resolve() → Operation successful.
// - reject() → Operation failed.
// 4. upload_stream()

// Cloudinary ka method hai jo image data upload karta hai.

// 5. resource_type: "image"

// Cloudinary ko batata hai ke upload hone wali file image hai.

// 6. Callback Function
// (error, result) => {}


// Upload complete hone ke baad Cloudinary callback execute karta hai.
// - error → Upload fail hone ki information.
// - result → Successful upload ka result.
// 7. reject(error)

// Agar upload fail ho toh Promise reject karta hai.

// 8. resolve(result)

// Agar upload successful ho toh Cloudinary ka result return karta hai.

// 9. result.secure_url

// Uploaded image ka online HTTPS URL.

// 10. result.public_id

// Cloudinary mein image ki unique identification. Isse future mein image delete ya manage kar sakte hain.

// 11. .end(fileBuffer)

// Actual image data upload stream ko deta hai aur upload process complete karta hai.

// 12. module.exports

// Function ko doosri files mein use karne ke liye export karta hai.

// 4. Hamari 4 Important Files
// File	Responsibility
// cloudinary.js	Cloudinary credentials configure karna
// upload.middleware.js	Multer se image receive karna
// uploadImage.js	Image Cloudinary par upload karna
// post.model.js	MongoDB mein post ka structure define karna

// 5. MongoDB mein kya save hoga?
// Tumhara Post Schema:
// const postSchema = new mongoose.Schema({
//   caption: String,
//   imageUrl: String,
//   publicId: String,
// });


// Field	Purpose
// caption	Post ka text
// imageUrl	Cloudinary image URL
// publicId	Cloudinary image ki unique ID

// Remember this!

// Image actual mein Cloudinary par store hoti hai, MongoDB mein nahi. MongoDB sirf image ka URL aur ID store karta hai.