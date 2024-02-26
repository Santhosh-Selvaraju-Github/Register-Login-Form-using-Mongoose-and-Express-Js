const express = require("express")
const router = express.Router()
const path = require("path")
const FormList = require("../model/formSchema")

router.get("/",async(req,res)=>{
    res.render("home")
})

router.get("/register",async(req,res)=>{
    res.render("register")
})

router.get("/login",async(req,res)=>{
    res.render("login")
})

router.post("/register",async(req,res)=>{
    const name = req.body.name
    const password = req.body.password

    const registerForm = await FormList.create({
        name:name,
        password:password
    })
    //console.log(registerForm)
    res.redirect("login")
})

router.post("/login",async(req,res)=>{
    const check = await FormList.findOne({name:req.body.name})
    console.log(check)
    console.log(check.password)

    if(check.password === req.body.password){
        res.render("profile",{check})
    }else{
        res.render("home")
    }

})

module.exports = router