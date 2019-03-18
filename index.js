// implement your API here

// built in node.js module to handle http traffic
const http = require('http');

// local computer where the server is running
const hostname = '127.0.0.1';
// port used to watch for traffic
const port = 3000;

// creates server
const server = http.createServer((req, res) => {
    // status code to return to clien if all OK
    res.statusCode = 200;
    // tell client that text will be returned 
    res.setHeader('Content-Type', 'text/plain')
    // end req, send response with specified message
    res.end('Hello World');
})


// port listening for connections
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});