const express = require("express");
const morgan = require('morgan');
const { products } = require("./data");
const logger = require('./logger');
const authorize = require('./authorize');
const app = express();

//to add middleware across all available routes
app.use(logger);

// to add middleware for a specific route
app.use('/api', authorize);

// static method to add middleware
// app.use(express.static('./public'))

// external library - morgan for middleware
// app.use(morgan('tiny'))

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

app.get("/api/v1/products", (req, res) => {
  res.send(`<h1> api/v1/products Page </h1> 
  <p>Username: ${req.user.name}</p>
  <p>ID: ${req.user.id}</p>
  `);
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found page");
});

app.listen(5000, () => {
  console.log("server is listening to port 5000...");
});
