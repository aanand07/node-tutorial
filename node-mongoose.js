const mongoose = require('mongoose');

// const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then(() => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });