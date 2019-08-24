const http = require('http'); 
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.headers);
    const fileUrl = req.url;
    // res.statusCode = 200;
    if (req.method === 'GET') {
        const filePath = path.resolve(fileUrl);
        fs.exists(filePath, exists => {
            if (exists) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream('./index.html').pipe(res);
            }
        })
    }
});

server.listen(3000, 'localhost', () => {
    console.log('server is live');
});