const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;

// 3. Ab samjho kya ho raha hai?
// Code	Purpose
// require("multer")	Multer package import
// memoryStorage()	Image temporarily memory mein rakhta hai
// multer({ storage })	Upload middleware configure karta hai
// module.exports	Middleware doosri files mein use karne deta hai





// Multer – upload.middleware.js
// 1. Multer kya hai?
// Multer Express.js ka middleware hai jo multipart/form-data handle karta hai.

// Jab user form ke through image upload karta hai, toh Multer us image ko receive aur process karta hai.

// Simple words mein:
// - Express requests handle karta hai.
// - Multer uploaded files handle karta hai.
// - Hum Multer ki help se image backend mein receive karte hain.
// 2. Code
// const multer = require("multer");

// const storage = multer.memoryStorage();

// const upload = multer({
//   storage: storage,
// });

// module.exports = upload;


// 3. Line-by-line Explanation
// 1. Multer import karna
// const multer = require("multer");


// - require() se Multer package import kiya.
// - Ab hum apne code mein Multer use kar sakte hain.
// 2. Memory Storage
// const storage = multer.memoryStorage();


// - memoryStorage() Multer ka built-in storage engine hai.
// - Yeh uploaded image ko temporarily server ki RAM (memory) mein rakhta hai.
// - Image ka data Buffer format mein available hota hai.
// Example:
// req.file.buffer


// Yahi Buffer hum uploadImage.js ko denge.

// 3. Multer configure karna
// const upload = multer({
//   storage: storage,
// });


// - multer() Multer ko configure karta hai.
// - storage batata hai ke uploaded image kahan temporarily store hogi.
// - Yahan humne memoryStorage() select kiya hai.
// 4. Export karna
// module.exports = upload;


// Multer configuration ko doosri files mein use karne ke liye export kar diya.

// 4. upload.single("image") kya hai?
// Yeh bohot important hai!

// Jab hum apne POST route mein likhenge:
// upload.single("image")


// Iska matlab:
// - single() = Sirf ek file receive karni hai.
// - "image" = Frontend/Postman se aane wali file ka field name image hona chahiye.
// Multer file ko req.file mein aur text fields ko req.body mein available karwata hai.
// Multer ke baad request mein:
// req.file

// Uploaded image ki information aur buffer

// req.body

// Caption aur doosre text fields


// 5. Important Terms – Quick Revision
// Term	Meaning
// Multer	File upload middleware
// Middleware	Request aur response ke beech ka function
// memoryStorage()	File ko temporarily RAM mein rakhta hai
// Buffer	File ka binary data
// multer()	Multer configure karta hai
// upload.single()	Ek file receive karta hai
// req.file	Uploaded file ki information
// req.file.buffer	Actual image data
// req.body	Text fields, e.g. caption

// Complete flow yaad rakho:

// Postman → Multer → req.file.buffer → uploadImage.js → Cloudinary → MongoDB

// Important
//  Multer image upload nahi karta Cloudinary par. Woh sirf backend mein image receive karta hai. Cloudinary upload ka kaam uploadImage.js karta hai.