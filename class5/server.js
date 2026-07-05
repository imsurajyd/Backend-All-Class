// My 5th Backend class.
// Today I learned how to build a complete Notes API using Express.js.
//
// In this class, I practiced all CRUD operations
// (Create, Read, Update, Delete) using proper HTTP status codes
// and JSON responses.
//
// Data Model:
// Each note contains:
// - Title
// - Description
//
// API Endpoints:
//
// POST /notes
// - Creates a new note.
// - Returns status code 201 (Created).
//
// GET /notes
// - Returns all notes.
// - Returns status code 200 (OK).
//
// PATCH /notes/:index
// - Updates the Title of a note using its index.
// - Returns status code 200 (OK).
//
// DELETE /notes/:index
// - Deletes a note using its index.
// - Returns status code 200 (OK).
//
// Example Request Body:
// {
//   "Title": "Learn Express",
//   "Description": "Practice CRUD operations"
// }
//
// HTTP Status Codes Used:
// 200 -> OK (Request completed successfully)
// 201 -> Created (A new resource was created)
//
// Key Concepts Learned:
// ✔ CRUD Operations
// ✔ REST API basics
// ✔ HTTP Methods (GET, POST, PATCH, DELETE)
// ✔ Route Parameters (req.params)
// ✔ Request Body (req.body)
// ✔ JSON Responses using res.json()
// ✔ HTTP Status Codes using res.status()
// ✔ Temporary in-memory data storage
// ✔ Testing APIs with Postman

const app = require("./src/app");

const notes = [];

// Create a new note
app.post("/notes", (req, res) => {
  const data = req.body;

  notes.push(data);

  res.status(201).json({
    message: "Data added successfully.",
    data,
  });
});

// Get all notes
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Data fetched successfully.",
    notes,
  });
});

// Delete a note
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];

  res.status(200).json({
    message: "Data deleted successfully.",
    notes,
  });
});

// Update a note
app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].Title = req.body.Title;

  res.status(200).json({
    message: "Data updated successfully.",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
