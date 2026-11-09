const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
  } catch (error) {
    console.error("Error Connecting to Database:", error);
  }
  console.log("Database Connected Successfully");
}

module.exports = connectDatabase;