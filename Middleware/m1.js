var express = require("express");
var app = express();
//Method 1 
const fun1=(req,res,next)=>
{
    res.set("content-type","text/html")
    res.write("<h2>First</h2>");
    next();
}
const fun2=(req,res,next)=>
{
    res.write("<p>Addition = " + (5+5) + "</p>");
    next();
}
app.use("/test",fun1,fun2);
app.get("/test",(req,res)=>
{
    res.write("<h3>Hello Welcome to LJU</h3>");
    res.send();
});
app.listen(6002)