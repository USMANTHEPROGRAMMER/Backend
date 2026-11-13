require('dotenv').config()

const connectDatabase = require("./src/db/db")

const app = require("./src/app");
const PORT = 3000;

async function startServer() {
    try {
        await connectDatabase();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            });
    } catch (error) {
        console.error("Error Starting Server:", error.message);
        process.exit(1); // Exit the process with an error code
    }
}

startServer();