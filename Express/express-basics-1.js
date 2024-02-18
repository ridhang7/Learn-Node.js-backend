const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("User hits the server");
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("Contact page");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found page");
});

app.listen(5000, () => {
  console.log("server is listening to port 5000...");
});

//app.get() - read data
//app.post() - insert data
//app.put() - Update data
//app.delete() - delete data
//app.all() -
//app.use() - responsible for middleWare
//app.listen()
