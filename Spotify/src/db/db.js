const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(`Error Connecting to MongoDB: ${err.message}`);
    process.exit(1); // to Force Stop the Node.js Process
  }
}

module.exports = connectDB;