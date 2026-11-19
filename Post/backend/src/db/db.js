const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);

    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Error Connecting to Database:", error.message);

    throw error;
  }
}

module.exports = connectDatabase;
