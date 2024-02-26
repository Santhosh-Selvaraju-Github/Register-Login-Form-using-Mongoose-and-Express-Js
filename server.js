const express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 3000
const db = require("./config/mongoose")

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/", require("./routes/todoRoutes"))
app.use("/register", require("./routes/todoRoutes"))
app.use("/login", require("./routes/todoRoutes"))

app.listen(port,(err)=>{
    if(err) throw err
    console.log("Server is running at",port)
})