// Create Server with express
const express = require("express");
const app = express(); // output => Cannot GET /

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> YAA </h1>");
});

app.get("/about", (req, res) => {
  res.json({
    name: "RIYAD",
  });
});

app.post("/login", (req, res) => {
  console.log(req.body.email, " && ", req.body.password);
  res.send("User Login Successfuly");
});

app.listen(3000, () => console.log("SERVER IS RUNING AT PORT 3000"));
