// ==========================================
// Server Entry Point
// ==========================================
//
// This file is responsible for starting the
// Express application.
//
// Responsibilities:
// - Load environment variables.
// - Connect to the MongoDB database.
// - Start the Express server.
//

require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/db/db");

// Establish database connection
connectDB();

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
