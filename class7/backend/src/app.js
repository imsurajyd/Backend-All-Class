const express = require("express")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({Storage: multer.memoryStorage()})

app.post("/post-create",upload.single("image"), async (req, res)=>{
  console.log(req.body)
  console.log(req.file)

  const result = await uploadFile(req.file.buffer)
  console.log(result)

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })

  res.status(201).json({
    message:"Post Created.."
  })
})

app.get("/posts", async(req, res)=>{
  const posts = await postModel.find()

  res.status(200).json({
    message:"Data Fetched..",
    posts
  })
})

module.exports = app;

