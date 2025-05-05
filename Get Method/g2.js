// q-2
var express=require("express")
var app=express()
app.use(express.static(__dirname,{index:"g2.html"}))
app.get("/process_get",(req,res)=>{
    // res.write(JSON.stringify(req.query));
    // res.write("<h1>"+req.query.un+"</h1>");
    res.set('content-type','text/html')
    var a =req.query.msg.split('.')
    for(i of a){
        res.write(i+"<br>")
    }
    res.send()
})
app.listen(7000)