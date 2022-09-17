// Create Server with express
const express = require("express");
const app = express(); // output => Cannot GET /

app.get("/", (req, res) => {
  res.send("<h1> YAA </h1>");
});

app.get("/about", (req, res) => {
  res.json({
    name: "RIYAD",
  });
});

app.listen(3000, () => console.log("SERVER IS RUNING AT PORT 3000"));
