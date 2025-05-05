const express=require('express')
const app=express()
app.use(express.urlencoded())
app.set("view engine","pug")
app.get("/",(reg,res)=>{
    res.render(__dirname+"/form")
})
app.post("/data",(req,res)=>{
    res.render(__dirname+"/output",{uname:req.body.un,email:req.body.eid,branch:req.body.branch})
})
app.listen(7005)