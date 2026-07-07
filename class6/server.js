// ==========================================
// Backend Class 6
// Entry Point of the Application
// ==========================================
//
// This file starts the Express server and
// establishes a connection with MongoDB.
//
// Flow:
// 1. Import Express application.
// 2. Connect to MongoDB.
// 3. Start the server.

const app = require("./src/app");
const connectDB = require("./src/db/db");

// Connect to MongoDB
connectDB();

// Start Express Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
