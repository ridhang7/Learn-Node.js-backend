const express = require("express");
const app = express()
const logger = require('./logger');
let {people} = require('./data');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(logger);

app.get('/api/people', (req, res)  =>{
  console.log(people);
  res.status(200).json({IsSuccess: true, data: people})
})

app.post('/api/postman/people', (req,res) =>{
  const { name } = req.body;
  console.log(req.body);
  if (name) {
    return res.status(201).json({IsSuccess: true, person: name});  
  }
  res.status(400).json({IsSuccess: false, message: 'Please provide data'}); 
})

app.put('/api/people/:id', (req,res) => {
  const { id } = req.params
  const { name } = req.body
  console.log(`${id}, ${name}`);
  if ( id && name ){
    const personName = people.find((people) => people.id === Number(id));
    personName.name = name;
  }
  res.status(200).json({IsSuccess: true, data: people})
})

app.post('/login', (req,res) =>{
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send('Welcome ' + req.body.name);
  }
    res.status(401).send('Please provide credentials');
})

app.post('/api/people', (req,res) =>{
  const { name } = req.body;
  console.log(req.body);
  if (name) {
    return res.status(201).json({IsSuccess: true, person: name});  
  }
  res.status(400).json({IsSuccess: false, message: 'Please provide data'}); 
})


app.get("/api/people/:peopleID", (req, res) => {
  const { peopleID } = req.params;
  const singlePerson = people.find(
    (people) => people.id === Number(peopleID)
  );
  if (!singlePerson) {
    return res.status(404).send(`No person found with the given ${peopleID}`);
  }
  return res.json(singlePerson);
});

app.listen(5000, () => {
  console.log("server is listening to port 5000...");
});