const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
  heading: String,
  description: String,
  date: Date
})

const Note = mongoose.model("Note", noteSchema)
module.exports = Note;
