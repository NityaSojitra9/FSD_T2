// q-3
var express=require("express")
var app=express()
app.use(express.static(__dirname,{index:"p2.html"}))
app.use(express.urlencoded({extended:true}))
app.post("/login",(req,res)=>{
    if (req.body.un =='admin') {
        res.send(`<h1 style="color:blue"> welcome ${req.body.un}</h1>`)
    } else {
        res.send(`<h1 style="color:red">Please enter valid username</h1>`)
    }
})
app.listen(7003)