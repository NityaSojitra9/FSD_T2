const express = require("express");
const app = express();
const cp = require("cookie-parser");
app.use(cp());
app.get("/cp", (req, res) => {
  res.cookie("name", "Express Js");
  res.cookie("Id","2",{expres:new Date(Date.now()+7000)})
  res.cookie('Topic','Cookie',{maxAge:15000})
  res.cookie('Branch','CSE')
  res.cookie('City','Ahmedabad')
  res.clearCookie('Branch')
  res.send(req.cookies)
});
app.listen(5002)