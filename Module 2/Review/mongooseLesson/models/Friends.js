const mongoose = require('mongoose');

const Friend = mongoose.model('Friend', {
    firstName: String,
    lastName: String,
    age: Number, 
});

module.exports = { Friend };