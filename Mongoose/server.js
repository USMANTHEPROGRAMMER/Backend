require("dotenv").config() // Iska kaam aapke project mein .env file se environment variables ko load karna hai.

// console.log("Mongo URI exists:", !!process.env.MONGO_URI);
// console.log("Mongo hostname:", process.env.MONGO_URI?.split("@")[1]?.split("/")[0]);

const app = require("./src/app");
const PORT = 3000;
const connectDatabase = require("./src/db/db");

async function startServer() {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to Start Server", error.message);
    process.exit(1); // process.exit(1) ka matlab hota hai ke program mein koi error ya failure aya hai, isliye isko forcefully band kiya ja raha hai.
  }
}

startServer();

// multer