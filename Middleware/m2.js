// q-1 MIMP
var express = require("express");
var app = express();
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:"m2.html"}))
app.post("/login",(req,res,next)=>{
    res.set("content-type","text/html")
    res.write(`<h1>Welcome ${req.body.un}</h1>
        <h2>Email${req.body.eid}</h2>`)
    next();
})
app.post("/login",(req,res)=>{
    if(req.body.subscribe=="on"){
        res.write("<h3>Thank You</h3> <a href='/' >Logout</a>")
    }
    else{
        res.write("<h3>You can Subscribe</h3> <a href='/subscribe' >Subscribe</a>")
    }
    res.send()
})
app.get("/subscribe",(req,res)=>{
res.send(`<h3>Thank You</h3> <a href="/">Log out</a>`)
})
app.listen(5001)