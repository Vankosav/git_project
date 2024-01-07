const { model } = require('mongoose');
const  { Friend }  = require('../models/Friends');

const friendCreate = (req, res)  => {
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    const age = req.params.age;

    const friend = new Friend({ firstName: firstName, lastName: lastName, age: age });
    friend.save()
        .then((newFriend) => {
            console.log(`Friend saved: ${newFriend}`);
            res.render('create-friend', { newFriend });
        })
        .catch((err) => {
            console.log(`Error: ${err}`)
            res.send(`Error: ${err}`);
        })
        
};

const shortForm = (req, res) => {
    res.render('index');
};

module.exports = { friendCreate, shortForm };