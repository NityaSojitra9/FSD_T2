// q-1
const express=require("express")
const app = express();
const es = require("express-session");
//use this for avoid deprecated error
// app.use(es({
    // resave:false,
    // saveUninitialized:false,
    // secret:"LJU123"
// }));
app.use(es({secret:"LJU123",resave:false,saveUninitialized:false}))
app.get("/test",(req,res)=>{
    if(req.session.page_view){
        req.session.page_view++,
        res.send(`<h1 style="color:red"> You have visited ${req.session.page_view} times </h1>`);
    }
    else{
        req.session.page_view=1;
        res.send(`<h1 style="color:blue"> Thank you for visting </h1>`)
    }
})
app.listen(9001)