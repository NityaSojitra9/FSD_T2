// q-3
var express=require("express")
var app=express()
app.use(express.static(__dirname,{index:"g3.html"}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/g3.html")
})
app.get("/calc",(req,res)=>{
    res.set("content-type","text/html")
    var num1=parseInt(req.query.n1)
    var num2=parseInt(req.query.n2)
    var formula=req.query.formula;
    if((num1>0)&&(num2>0)){
        if (formula=='add') {
            res.write(`Addition is ${num1+num2}`)   
        }
        else if(formula=="sub"){
            res.write(`Substraction is ${num1-num2}`)  
        }
        else if(formula=="mul"){
            res.write(`Multiplication is ${num1*num2}`)  
        }
        else if(formula=="div"){
            res.write(`Division is ${num1/num2}`)  
        }
        else{
            res.write("Please select formula")
        }
    }
    else{
        res.write("Not Valid Number")
    }res.send()
})
app.listen(7009)