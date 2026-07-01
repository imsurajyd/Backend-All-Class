// My 3rd Backend class.
// Today I learned how to build a simple Notes API using Express.js.
//
// In this class, I learned:
// - How to create REST API endpoints.
// - How to use HTTP methods like GET and POST.
// - How to send data from Postman.
// - How to use Express middleware (express.json()) to parse JSON request bodies.
// - How to temporarily store data in memory using an array.
//
// API Endpoints:
//
// POST /note
// - Creates a new note.
// - The client sends a JSON object containing:
//   - title
//   - description
// - The note is stored in the allNotes array.
//
// GET /note
// - Returns all stored notes.
//
// Example Request Body:
// {
//   "title": "Learn Express",
//   "description": "Practice GET and POST APIs"
// }
//
// Key Concepts Learned:
// ✔ HTTP Methods (GET, POST)
// ✔ REST API basics
// ✔ Request Body (req.body)
// ✔ Response using res.send()
// ✔ Express Middleware (express.json())
// ✔ Temporary in-memory data storage
// ✔ Testing APIs using Postman

const app = require("./src/app");

// Temporary Notes Storage (Data will be lost when the server restarts)
const allNotes = [];

// Create a new note
app.post("/note", (req, res) => {
  allNotes.push(req.body);
  res.send("Note created successfully.");
});

// Get all notes
app.get("/note", (req, res) => {
  res.send(allNotes);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});