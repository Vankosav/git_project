const express = require('express');
const { friendCreate, shortForm } = require('./controllers/functions');
const mongoose = require('mongoose');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

mongoose.connect('mongodb://127.0.0.1:27017/express-mongo')
.then((x) => 
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
)
.catch((err) => console.error('Error connecting to mongo', err));


app.get('/', shortForm);

app.get('/create-friend', friendCreate)

app.post('/submit-friend', (req, res) => {
    console.log(req.body);
    res.send('Friend created');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});