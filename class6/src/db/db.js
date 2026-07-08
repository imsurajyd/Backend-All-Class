// ==========================================
// Database Configuration
// ==========================================
//
// This file is responsible for connecting
// the application to MongoDB Atlas.
//
// Mongoose is used as the ODM (Object
// Data Modeling) library.
//

const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://imsurajyd_db_user:class61@cluster0.bszn9zk.mongodb.net/student"
  );

  console.log("Database connected successfully");
}

module.exports = connectDB;
