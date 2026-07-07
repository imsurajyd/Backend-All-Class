// ==========================================
// Backend Class 6
// MongoDB + Mongoose CRUD Operations
// ==========================================
//
// Today I learned how to connect Express.js
// with MongoDB using Mongoose.
//
// Technologies Used:
// - Express.js
// - MongoDB Atlas
// - Mongoose
//
// CRUD Operations:
// C - Create
// R - Read
// U - Update
// D - Delete
//
// API Endpoints:
//
// POST   /student
// GET    /student
// DELETE /student/:id
//
// Mongoose Methods Used:
// - create()
// - find()
// - findOneAndDelete()
//
// Key Concepts Learned:
// ✔ MongoDB Atlas
// ✔ Mongoose
// ✔ Schema
// ✔ Model
// ✔ Database Connection
// ✔ CRUD Operations
// ✔ Async/Await
// ✔ Express Middleware
// ✔ JSON Responses
// ✔ HTTP Status Codes

const express = require("express");
const studentModel = require("./models/note.model");

const app = express();

// Middleware
app.use(express.json());

// ==========================================
// Create Student
// ==========================================
app.post("/student", async (req, res) => {
  const data = req.body;

  await studentModel.create({
    name: data.name,
    rollNumber: data.rollNumber,
  });

  res.status(201).json({
    message: "Details created successfully.",
  });
});

// ==========================================
// Get All Students
// ==========================================
app.get("/student", async (req, res) => {
  const students = await studentModel.find();

  res.status(200).json({
    message: "Data fetched successfully.",
    students: students,
  });
});

// ==========================================
// Delete Student
// ==========================================
app.delete("/student/:id", async (req, res) => {
  const id = req.params.id;

  await studentModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "Data deleted successfully.",
  });
});

module.exports = app;
