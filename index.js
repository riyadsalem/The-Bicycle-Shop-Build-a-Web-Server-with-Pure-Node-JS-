const express = require("express");
const app = express();
const bicycles = require("./data/data.json");

app.listen(3000, (req, res) => {
  console.log("SERVER is running at port 3000");
});

app.set("view engine", "ejs"); // support

/*
app.use((req, res, next) => {
  console.log("YAA");
  next();
});
*/

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  // return res.send("HOMEPAGE");
  return res.render("bicycles");
});

app.get("/bicycle", (req, res) => {
  const bicycle = bicycles.find((b) => b.id === req.query.id);
  return res.render("overview", {
    bicycle,
  });
});
