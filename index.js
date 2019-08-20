const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello Folks!!</h1></body></html>');
});

server.listen(3000, 'localhost', () => {
    console.log('server is live');
});