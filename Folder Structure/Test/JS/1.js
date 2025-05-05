const express=require("express");
const app=express();
const path=require("path")
const cp=path.join(__dirname,"../HTML");
const hp=path.join(__dirname,"../CSS");
app.use(express.static(hp,{index:"index.html"}));
app.use(express.static(cp));
app.listen(5007);
