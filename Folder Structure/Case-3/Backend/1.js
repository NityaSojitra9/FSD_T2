const express=require("express");
const app=express();
const path=require("path")
const sp=path.join(__dirname,"../");
app.use(express.static(sp));
app.listen(5004);