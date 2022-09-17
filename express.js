// Create Server with express
const express = require("express");
const app = express(); // output => Cannot GET /

// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: false }));

// create application/json parser
app.use(express.json());

app.use((req, res, next) => {
  console.log("HI I AM FROM MIDDLEWARE!!");
  next();
});

app.get("/", (req, res, next) => {
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
