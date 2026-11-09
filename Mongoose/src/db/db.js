const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Database connected successfully");
    } catch (error) {
        console.log("Failed to Start Server", error.message);
        process.exit(1);
    }
};

module.exports = connectDatabase;