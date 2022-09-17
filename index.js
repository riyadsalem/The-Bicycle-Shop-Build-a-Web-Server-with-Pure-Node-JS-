const express = require("express");
const app = express();

app.listen(3000, (req, res) => {
  console.log("SERVER is running at port 3000");
});

app.get("/", (req, res, next) => {
  return res.send("Hello RIYAD");
});
