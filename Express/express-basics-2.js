const express = require("express");
const path = require('path');
const app = express();

//setup static and middleWare
app.use(express.static('./public'))

app.get("/", (req, res) => {
  console.log("User hits the server");
  res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'));
//   res.status(200).send("Home page");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found page");
});

app.listen(5000, () => {
  console.log("server is listening to port 5000...");
});
