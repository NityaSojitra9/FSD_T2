const express=require('express')
const app=express()
app.set("view engine","pug")
app.get("/",(reg,res)=>{
    res.render(__dirname+"/p1")
})
app.listen(7000)