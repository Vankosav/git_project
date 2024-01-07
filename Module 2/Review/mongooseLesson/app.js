const express = require('express');
const { create } = require('hbs');
const mongoose = require('mongoose');

const  { Friend }  = require('./models/Friends');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/express-mongo')
.then((x) => 
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
)
.catch((err) => console.error('Error connecting to mongo', err));

app.post('/friends/:firstName/:lastName/:age', (req, res) => {
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    const age = req.params.age;

    const friend = new Friend({ firstName: firstName, lastName: lastName, age: age });
    friend.save()
        .then((newFriend) => {
            console.log(`Friend saved: ${newFriend}`);
            res.send(`Friend saved: ${newFriend}`);
        })
        .catch((err) => {
            console.log(`Error: ${err}`)
            res.send(`Error: ${err}`);
        })
        
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});