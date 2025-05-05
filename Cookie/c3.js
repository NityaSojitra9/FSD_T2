// q-2
const express = require("express");
const app = express();
const cp = require("cookie-parser");
app.use(cp());
app.use(express.static(__dirname,{index:'c3.html'}))
app.get('/submit',(req,res)=>{
    var{un,eid,msg,rating}=req.query;
    var Feedback={un,eid,msg,rating}
    res.cookie("Feedback",Feedback,{maxAge:10000})
    res.send(`<h1>Thank You</h1> 
        <a href='/details'>Details</a>`)
})
app.get("/details",(req,res)=>{
    var fb=req.cookies.Feedback
    if(fb){
        res.send(`<h1>Name:${fb.un}</h1>
            Email:${fb.eid}
            Message:${fb.msg}
            Rating:${fb.rating}`)
    }
    else{
        res.send(`No feedback available`)
    }
})
app.listen(9009)