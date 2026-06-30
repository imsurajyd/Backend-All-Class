// My first backend class.
// Today I learned how to create a server using the Express.js package.

// Step 1: Create a project folder (e.g., class1).
// Step 2: Initialize the project using: npm init -y
// Step 3: Install the Express.js package using: npm install express
// Step 4: Create a server.js file inside the project folder.
// Step 5: Import the Express.js package using require() and create an Express application.
// Step 6: Define routes and start the server using app.listen().

const express = require("express");
const app = express()

app.get("/", (req, res) => {
  res.send("Hello, I'm from Home");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});