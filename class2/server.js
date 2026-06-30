// My 2nd Backend class.
// Today I learned about routing in Express.js.
//
// What is Routing?
// Routing is the process of defining how the server responds
// to different client requests based on the requested URL and HTTP method.
//
// In Express.js, routes are created using methods like:
// - app.get()    -> Retrieve data
// - app.post()   -> Create data
// - app.put()    -> Update data
// - app.patch()  -> Partially update data
// - app.delete() -> Delete data
//
// In this class, I practiced app.get() to create multiple routes.
// Each route returns a different response when its URL is visited.
//
// Available Routes:
// GET /          -> Home page
// GET /about     -> About page
// GET /project   -> Project page
// GET /skills    -> Skills page
//
// Key Concepts Learned:
// ✔ Express.js routing
// ✔ Creating multiple endpoints
// ✔ Handling GET requests
// ✔ Sending responses using res.send()
// ✔ Understanding request (req) and response (res) objects
// ✔ Starting the server using app.listen()
//
// Commands Used:
// npm init -y
// npm install express
// node server.js
//
// Folder Structure:
// class2/
// ├── node_modules/
// ├── package.json
// ├── package-lock.json
// ├── src/
// │   └── app.js
// └── server.js

const app = require("./src/app");

app.get("/", (req, res) => {
  res.send("Hello I'm From Home");
});

app.get("/about", (req, res) => {
  res.send("Hello I'm From About");
});

app.get("/project", (req, res) => {
  res.send("Hello I'm From Project");
});

app.get("/skills", (req, res) => {
  res.send("Hello I'm From Skills");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
