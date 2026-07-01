// My 4th Backend class.
// Today I learned how to build a simple Library Management API using Express.js.
//
// In this class, I practiced CRUD (Create, Read, Update, Delete)
// operations using different HTTP methods.
//
// Data Model:
// Each book contains:
// - bookName
// - author
//
// API Endpoints:
//
// POST /book
// - Creates a new book.
// - Accepts a JSON object containing:
//   - bookName
//   - author
//
// GET /books
// - Returns all books stored in the library.
//
// PATCH /book/:index
// - Updates an existing book using its index.
// - Only the provided fields are updated.
//
// DELETE /book/:index
// - Deletes a book using its index.
//
// Example Request Body:
// {
//   "bookName": "Atomic Habits",
//   "author": "James Clear"
// }
//
// Key Concepts Learned:
// ✔ CRUD Operations
// ✔ HTTP Methods (POST, GET, PATCH, DELETE)
// ✔ Route Parameters (req.params)
// ✔ Request Body (req.body)
// ✔ Updating objects using the spread operator (...)
// ✔ Sending JSON responses using res.json()
// ✔ Testing APIs with Postman
// ✔ Temporary in-memory data storage

const app = require("./src/app");

// Temporary Library Storage
const library = [];

// Create a new book
app.post("/book", (req, res) => {
  library.push(req.body);
  res.send("Book created successfully.");
});

// Get all books
app.get("/books", (req, res) => {
  res.send(library);
});

// Delete a book by index
app.delete("/book/:index", (req, res) => {
  const index = req.params.index;
  delete library[index];
  res.send(`Book at index ${index} deleted successfully.`);
});

// Update a book by index
app.patch("/book/:index", (req, res) => {
  const index = req.params.index;

  library[index] = {
    ...library[index],
    ...req.body,
  };

  res.json({
    index,
    updatedBook: library[index],
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});