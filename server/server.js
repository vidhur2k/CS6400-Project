const express = require('express')
const mongoose = require('mongoose')
const app = express()

const mongoURL = 'mongodb+srv://vidhur2k:vidhur12345@eplgames.t3whn.mongodb.net/eplgames'
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    console.log(mongoose.connection);
    res.send('hello');
});

app.listen(3000, () => {
    console.log('Server listening on Port 3000...')
});