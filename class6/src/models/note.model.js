// ==========================================
// Student Model
// ==========================================
//
// A Schema defines the structure of a document.
//
// A Model represents a MongoDB collection
// and provides methods to perform CRUD
// operations.
//

const mongoose = require("mongoose");

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
});

// Student Model
const studentModel = mongoose.model("studentModel", studentSchema);

module.exports = studentModel;
