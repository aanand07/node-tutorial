const express = require('express');
const http = require('http');

const host = 'localhost';
const port = 3000;

const app = express();
app.use((req, res, next) => {
    console.log(req.method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><h1>Node Express Example</h1></html>');
});

const server = http.createServer(app);
server.listen(port, host, () => {
    console.log('express example is working!!');
});