const express = require('express');
const app = express();
const port = 8080;

app.get('/' , (req,res) => {
    res.send('Home Page')
})

// create, read, udate , delete 

// get all the pets in the API

app.get('/api/v1/pets' , (req,res) => {
    res.send('All Pets')
})

// Get all the pets by their names 

app.get('/api/v1/pets/dogs/:name' , (req,res) => {
    const name = req.params.name
    res.send(`Searching for pet named ${name}`)
})

// get the pets by their owners name

app.get('/api/v1/pets/owner' , (req,res) => {
    let name = req.query.name;
    res.send(`Searching for pets with the owner ${name}`)
})


app.listen(port, () => {
    console.log(`Server running on http://localhost${port}`);
})
