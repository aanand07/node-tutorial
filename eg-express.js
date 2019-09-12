const express = require('express');
const http = require('http');
const morgan = require('morgan');
const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
const usersRouter = require('./routes/userRouter');
const mongoose = require('mongoose');
var passport = require('passport');
var authenticate = require('./authenticate');
// const cookieParser = require('cookie-parser');


const host = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);
var session = require('express-session');
var FileStore = require('session-file-store')(session);
// app.use(session({
//     name: 'session-id',
//     secret: '12345-67890-09876-54321',
//     saveUninitialized: false,
//     resave: false,
//     store: new FileStore()
// }));

app.use(passport.initialize());
// app.use(passport.session());

function auth (req, res, next) {
    console.log(req.user);

    if (!req.user) {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      next(err);
    }
    else {
          next();
    }
}

connect.then(() => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

// app.use(auth);
app.use('/dishes', dishRouter);
app.use('/promotions', promotionRouter);
app.use('/leaders', leaderRouter);
app.use('/users', usersRouter);
app.use(express.static(__dirname + '/static-html'));
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