const express = require('express');

// needs access to the db.js file
const db = require('./data/db');

const server = express();

// makes POST and PUT work
server.use(express.json())

server.get('/api/users', (req, res) => {
    res.send('Hello from index.js!');
});

// POST to request to /db/users
server.post('/api/users', (req, res) => {
    if (req === null ) {
        // cancel req
        res.status(400).json( { errorMessage: 'Please provide name and bio for the user.' })
    } else (req === /*valid*/) {
        res.status(201).insert();  // save to database
        // return new entry
    } 
    if ( /*error in saving user*/ ) {
        // cancel request
        res.status(500).json( { 'error: "There was an error while saving the user to the database.' })
    }
}); 

// GET
server.get('/api/users', (req, res) => {
   if ( /* error getting user from database */ ) {
       // cancel request
       res.status(500).json( { 'error: "The users information could not be retrieved.' });
   }
});

// GET
server.get('/api/users/:id', (req, res) => {
    if ( /*id not found*/ ) {
        res.status(404).json( { 'message: The user with the specified ID does not exist.' })
    }
    if ( /* user not found */ ) {
        res.status(500).json( { 'error: "The user information could not be retrieved.' })
    }
});

// DELETE 
server.delete('/api/users/:id', (req, res) => {
    if ( /* id not found */ ) {
        res.status(400).json( { 'message: "The user with the specified ID does not exist.' })
    }
    if ( /* error removing from database */) {
        res.json( { 'error: "The user could not be removed.'})
    }

});

// PUT
server.put('/api/users/:id', (req, res) => {
    if ( /* id not found */ ) {
        res.status(404).json({'message: The user with the specified ID does not exist.' })
    }
    if ( /* request body is missing name or bio */) {
        // cancel req
        res.status(400).json( { ' errorMessage: "Please provide name and bio for the user.' })
    }
    if ( /* error updating user */ ) {
        // cancel req
        res.json( { 'error: "The user information could not be modified.' })
    }
    if ( /* user found and new info is valid */) {
        // update document with new info in *reques body*
        res.status(200);
        // return updated user document
    }
});


server.listen(4000, () => {
    console.log('\n **API up and running on port 4K**');
});
 