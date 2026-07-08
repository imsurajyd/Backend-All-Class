const mongoose = require("mongoose")

//Password: project7
async function connectDB(){
  await mongoose.connect(process.env.MONGO_URI)
  console.log("Database connected..")
}

module.exports = connectDB;
