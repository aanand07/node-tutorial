const express = require('express');
const http = require('http');
const morgan = require('morgan');
const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const host = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/static-html'));

app.use('/dishes', dishRouter);
app.use('/promotions', promotionRouter);
app.use('/leaders', leaderRouter);

// for invalid requests
app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><h1>Invalid request!</h1></html>');
});

const server = http.createServer(app);
server.listen(port, host, () => {
    console.log('express example is working!!');
});