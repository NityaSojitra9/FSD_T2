// MIMP Paku gokh wanu che
const express = require("express");
const app = express();
const multer = require("multer");
app.get("/", (req, res) => {
  res.render(__dirname + "/m1.pug");
});
const store = multer.diskStorage({
  destination: "LJU",
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now() + "-" + file.originalname + "");
  },
});
const upload = multer({ storage: store });
app.post("/data", upload.single("mypic1"), (req, res) => {
  const file = req.file;
  console.log(file);
  if (file) {
    res.write(
      `<h1>${file.originalname} has been uploded in ${file.destination}</h1>`
    );
  }
  res.send();
});
app.listen(8001);
