// ==========================================
// Image Upload Service
// ==========================================
//
// This file is responsible for uploading
// images to ImageKit.
//
// Responsibilities:
// - Initialize the ImageKit SDK.
// - Read the private API key from the
//   environment variables.
// - Upload image files.
// - Return the uploaded image information
//   (such as the image URL).
//
// Environment Variable:
// IMAGEKIT_PRIVATE_KEY
//
// uploadFile(buffer)
// - Accepts an image buffer.
// - Converts the buffer into Base64.
// - Uploads the image to ImageKit.
// - Returns the upload result.

const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  const result = await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });

  return result;
}

module.exports = uploadFile;
