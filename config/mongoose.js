const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/form")
const db = mongoose.connection

db.on("error",()=>{
    console.error("Error in connecting to mongo db")
})
db.on("connected",()=>{
    console.log("Database connected")
})

module.exports = db;