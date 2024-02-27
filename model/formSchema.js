const mongoose = require("mongoose")

const FormSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("FormList",FormSchema)