const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/confusion';

const connect = mongoose.connect(url);

connect.then(response => {
    console.log('Connected to server \n');
    // const newDish = Dishes({
    //     name: 'Anand',
    //     description: 'Human'
    // });
    Dishes.create({
        name: 'Anand',
        description: 'Human'
    }).then(dish => {
        console.log(dish + '\n');
        return Dishes.find({}).exec();
    }).then(dishes => {
        console.log('deleting...', dishes);
        return Dishes.remove();
    }).then(() => mongoose.connection.close())
        .catch(error => console.log(error));
});