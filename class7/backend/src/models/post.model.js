// ==========================================
// Post Model
// ==========================================
//
// This file defines the structure of a blog
// post using a Mongoose Schema.
//
// Schema Fields:
// - image   : Stores the uploaded image URL.
// - caption : Stores the post caption.
//
// The schema is used to create the "post"
// model, which provides methods to interact
// with the MongoDB collection.
//
// Common Mongoose Methods:
// - create()
// - find()
// - findById()
// - findOneAndUpdate()
// - findOneAndDelete()

const mongoose = require("mongoose");

// Blog Post Schema
const postSchema = new mongoose.Schema({
  image: String,
  caption: String,
});

// Blog Post Model
const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
