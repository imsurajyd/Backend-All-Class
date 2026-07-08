// ==========================================
// Backend Class 7 - Blog API
// ==========================================
//
// This file contains the main Express application.
//
// Features:
// - Enable CORS for frontend communication.
// - Parse incoming JSON requests.
// - Upload images using Multer.
// - Store uploaded images using a storage service.
// - Save post details in MongoDB.
// - Retrieve all blog posts.
//
// Technologies Used:
// - Express.js
// - MongoDB
// - Mongoose
// - Multer
// - CORS
//
// Middleware:
// - cors()                  -> Allows requests from different origins.
// - express.json()          -> Parses JSON request bodies.
// - upload.single("image") -> Handles single image file uploads.
//
// API Endpoints:
//
// POST /post-create
// - Uploads an image.
// - Stores the image using the storage service.
// - Saves the image URL and caption in MongoDB.
//
// GET /posts
// - Retrieves all blog posts from the database.
//
// Request Body (POST /post-create):
// FormData
// ├── image   (File)
// └── caption (String)

const express = require("express");
const multer = require("multer");
const cors = require("cors");

const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");

const app = express();

// ================================
// Global Middlewares
// ================================
app.use(cors());
app.use(express.json());

// Store uploaded files in memory before uploading
const upload = multer({
  storage: multer.memoryStorage(),
});

// ================================
// Create a New Blog Post
// ================================
app.post("/post-create", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  // Upload image to storage
  const result = await uploadFile(req.file.buffer);

  // Save post in MongoDB
  await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "Post created successfully.",
  });
});

// ================================
// Get All Blog Posts
// ================================
app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    message: "Posts fetched successfully.",
    posts,
  });
});

module.exports = app;
