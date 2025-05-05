// q-2
const express=require("express")
const app = express();
const es = require("express-session");
app.use(es({secret:"LJU123",resave:false,saveUninitialized:false}))
app.use(express.static(__dirname,{index:"s2.html"}))
app.get("/savesession",(req,res)=>{
    req.session.uname=req.query.un;
    req.session.pass=req.query.pw;
    res.redirect("/fetchsession")
})
app.get("/fetchsession",(req,res)=>{
    res.send(`<h1>${req.session.uname}</h1><a href="/deletesession">Login</a>`)
})
app.get("/deletesession",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})
app.listen(7000)