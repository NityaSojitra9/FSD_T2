// q-1
var express=require("express")
var app=express()
app.use(express.static(__dirname,{index:"p1.html"}))
app.use(express.urlencoded({extended:true}))
app.post("/data",(req,res)=>{
   res.write(JSON.stringify(req.body))
   res.write(`welcome ${req.body.fn} ${req.body.ln}`)
   res.send()
})
app.listen(7002)