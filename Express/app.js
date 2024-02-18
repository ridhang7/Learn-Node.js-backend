const express = require("express");
const { products } = require("./data");
const logger = require('./logger');
const app = express();

app.use(logger);

app.get("/", (req, res) => {
  console.log("User hits the server");
  res.send(`<h1> Home Page </h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1> About Page </h1>`);
});

app.get("/contact", (req, res) => {
  res.send(`<h1> Contact Page </h1>`);
});

app.get("/api", (req, res) => {
  res.send(`<h1> api/v1 Page </h1>`);
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found page");
});

app.listen(5000, () => {
  console.log("server is listening to port 5000...");
});
