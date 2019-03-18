// import express package
const express = require('express');

// create the server 
const server = express();

// handle requests to the root of the api - the '/' route
server.get('/', (req, res) => {
    res.send('Hello from express');
});

// listening for connections on port
server.listen(5000, () =>
    console.log('Server running on http://localhost:5000')
);