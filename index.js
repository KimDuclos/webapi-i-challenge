const express = require('express');

// needs access to the db.js file
const db = require('./data/db.js');

const server = express();

// makes POST and PUT work
server.use(express.json());

// server.get('/api/users', (req, res) => {
//     res.send('Hello from index.js!');
// });

// POST to request to /db/users
// server.post('/users', (req, res) => {
//     let newUser = req.body;

//     if (newUser.name === null ||  newUser.bio === null ) {
//         res.status(400).json( { errorMessage: 'Please provide name and bio for the user.' })
//     } else {
//         const newUserID = db.insert(newUser);  // saves new user into data
//         res.status(201).json(db.findById(newUserID));
//     } 
//     // if ( /*error in saving user*/ ) {
//     //     res.status(500).json( { 'error: "There was an error while saving the user to the database.' })
//     // }
// }); 

// GET
server.get('/users', (req, res) => {
    let newUser = req.body;
   if ( newUser === null ) {
       res.status(500).json( { 'error: "The users information could not be retrieved.' }) ;
   }
});

// // GET
// server.get('/api/users/:id', (req, res) => {
//     if ( /*id not found*/ ) {
//         res.status(404).json( { 'message: The user with the specified ID does not exist.' })
//     }
//     if ( /* user not found */ ) {
//         res.status(500).json( { 'error: "The user information could not be retrieved.' })
//     }
// });

// // DELETE 
// server.delete('/api/users/:id', (req, res) => {
//     if ( /* id not found */ ) {
//         res.status(400).json( { 'message: "The user with the specified ID does not exist.' })
//     }
//     if ( /* error removing from database */) {
//         res.json( { 'error: "The user could not be removed.'})
//     }

// });

// // PUT
// server.put('/api/users/:id', (req, res) => {
//     if ( /* id not found */ ) {
//         res.status(404).json({'message: The user with the specified ID does not exist.' })
//     }
//     if ( /* request body is missing name or bio */) {
//         res.status(400).json( { ' errorMessage: "Please provide name and bio for the user.' })
//     }
//     if ( /* error updating user */ ) {
//         res.json( { 'error: "The user information could not be modified.' })
//     }
//     if ( /* user found and new info is valid */) {
//         // update document with new info in *reques body*
//         res.status(200);
//         // return updated user document
//     }
// });


server.listen(4000, () => {
    console.log('\n **API up and running on port 4K**');
});
 