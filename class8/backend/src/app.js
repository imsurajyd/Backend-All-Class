const express = require("express")
const cors = require("cors")
const app  = express()
const Note = require("./models/note.model")

app.use(cors())
app.use(express.json())


app.post("/create-note", async (req, res)=>{
  const {heading, description, date} = req.body

  const newNote = await Note.create({
    heading,
    description,
    date:Date.now()
  })

  res.status(201).json({
    message:"Note Created..",
    note: newNote
  })
})

app.get("/notes", async (req, res)=>{

  const notes = await Note.find()

  res.status(200).json({
    message:"Note Fetched..",
    note: notes
  })
})


module.exports = app
