const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  console.log("User hits the server");
  res.send(`<h1> Home Page </h1><a href='/api/products-list'>Products</a>`);
});

//destructing the products json and getting values that are req to send for this request -
app.get("/api/products-list", (req, res) => {
  const newProduct = products.map((products) => {
    const { id, name, image } = products;
    return { id, name, image };
  });
  res.json(newProduct);
});

//can have multiple parameters in the URL example - /api/products-list/:productID/reviews/:reviewID - follow same approach as below app.get()

app.get("/api/products-list/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (products) => products.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("No product found with the given orderID");
  }
  return res.json(singleProduct);
});

//or conditions to search for the products.id === Number(id) || products.name === name) <--> and conditions to search for the products.id === Number(id) && products.name === name)
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { name, id } = req.query;
  const singleProduct = products.find((products) => 
    products.id === Number(id) && products.name === name);
  if (!singleProduct) {
    return res.status(404).send(`No product found with name: ${name} and ID: ${id}`);
  }
  return res.json(singleProduct);
});

//query params api with search implementation
app.get("/api/v2/query", (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((products) => {
            return products.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit) )
    }
    if(sortedProducts.length < 1){
        return res.status(404).json({isSuccess: true, data: sortedProducts})
    } else {
        return res.status(200).json({isSuccess: true, data: sortedProducts});
    }
  });

app.all("*", (req, res) => {
  res.status(404).send("Page not found page");
});

app.listen(5000, () => {
  console.log("server is listening to port 5000...");
});
