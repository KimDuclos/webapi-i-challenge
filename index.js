const express = require('express');

// needs access to the db.js file
const db = require('./data/db.js');

const server = express();

// makes POST and PUT work
server.use(express.json());


// POST to request to /db/users
server.post('/api/users', (req, res) => {
    let newUser = req.body;

    if (newUser.name === null || newUser.bio === null) {
        res.status(400).json({ errorMessage: 'Please provide name and bio for the user.' })
    } else {
        db.insert(newUser)  // create new user
            .then(result => { // take that result
                db.findById(result.id) // and find it by it's newly created ID
                    .then(result2 => { // take that result
                        res.status(201).json(result2) // and return a 201 along with the new user full info
                    })
            })
            .catch(error => {  // catch all error
                res.status(500).json({ error: "There was an error while saving the user to the database" });
            });
    }
});

// GET
server.get('/api/users', (req, res) => {
    db.find()  // call find function from db
        .then(results => { // take those result
            res.status(200).json(results); // return a 200 and all users in DB
        })
        .catch(error => { // catch all error
            res.status(500).json({ error: "The users information could not be retrieved." });
        });

});

// GET
server.get('/api/users/:id', (req, res) => {
    const { id } = req.params // gets value of ID
    db.findById(id) // find user by ID
        .then(resultID => { // take that result
            if (resultID === undefined) { // if ID does not exist
                res.status(404).json({ message: "The user with the specified ID does not exist." });
            } else {
                res.status(200).json(resultID); // else return user found by ID
            }
        })
        .catch(error => {
            res.status(500).json({ error: "The user information could not be retrieved." })
        })
});

// DELETE 
server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params // gets value of ID
    db.remove(id) // remove user by ID
        .then(resultID => { // take that result
            if (resultID === 0) { // if ID does not exist
                res.status(404).json({ message: "The user with the specified ID does not exist." });
            } else {
                res.status(204).end(); // else return 200 success code -- end requests, no data coming back
            }
        })
        .catch(error => {
            res.status(500).json({ error: "The user could not be removed" })
        })
});

// PUT
server.put('/api/users/:id', (req, res) => {
    const { id } = req.params; // gets path parameters which return value of ID 
    const change = req.body;  // gets content of request

    if (change.name === null || change.bio === null) { // if name or bio missing
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
    }

    db.update(id, change) // calls update(), look for ID and update info for that user
        .then(updated => { // take the results
            if (updated) { // return 200 is OK
                db.findById(id) // and find it by it's ID
                    .then(result2 => { // take that result
                        res.status(200).json(result2) // and return a 200 along with the new user full info
                    })
            } else { // return 404 if user does not exist
                res.status(404).json({ message: "The user with the specified ID does not exist." })
            }
        })
        .catch(error => {
            res.status(500).json({ error: "The user information could not be modified." });
        })

});


server.listen(4000, () => {
    console.log('\n **API up and running on port 4K**');
});
