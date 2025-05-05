const express=require("express");
const app=express();
app.use(express.static("Frontend",{index:"index.html"}));
app.listen(5002);
