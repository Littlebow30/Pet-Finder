// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.get('Home Page')
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
        res.send(pets.map((value) => {
            return value.name
        }))

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    let owner = req.query.owner;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner.toLowerCase() === owner.toLowerCase());

    // send the pet as a response
    res.send(pet)
    
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const name = req.params.name
    

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());

    // send the pet as a response
    if (pet) {
        res.send(pet);
    }
    else {
        res.send('Name not in system')
    }
        
    
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;