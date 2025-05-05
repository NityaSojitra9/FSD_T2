// q-1
const express = require("express");
const app = express();
const cp = require("cookie-parser");
app.use(cp());
app.use(express.static(__dirname,{index:'c2.html'}))
app.get('/next',(req,res)=>{
    res.cookie("Fname",req.query.fn)
    res.cookie("Lname",req.query.ln)
    res.cookie("Pass",req.query.pw)
    res.redirect("/admin")
})
app.get("/admin",(req,res)=>{
    res.clearCookie('Lname')
    res.send(`Welcome ${req.cookies.Fname} ${req.cookies.Lname } Password is:${req.cookies.Pass}`)
})
app.listen(5005)