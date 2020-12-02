const express = require('express')
const mongoose = require('mongoose')
const { MongoClient } = require("mongodb");

const app = express()

const mongoURL = 'mongodb+srv://vidhur2k:vidhur@eplgames.t3whn.mongodb.net/eplgames'
// mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})

// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
const client = new MongoClient(mongoURL);
// async function run() {
//     try {
//       await client.connect();
//       const database = client.db('eplgames');
//       const collection = database.collection('referees');
//       // Query for a movie that has the title 'Back to the Future'
//       const query = { Name: 'Atkinson' };
//       const movie = await collection.findOne(query);
//       console.log(movie);
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
// }

// run().catch(console.dir);
let db = null;
async function connect() {
    await client.connect();
    db = client.db('eplgames');
}

connect().catch(console.dir);

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/games', async (req, res) => {
    const collection = db.collection('games');
    const games = await collection.find({
        'HomeTeam': '5fc4529d9280f04a4cadda37'
    });
    await games.forEach(console.dir);
});

app.get('/teams', async (req, res) => {
    const collection = db.collection('games');
    const games = await collection.find({
        'HomeTeam': '5fc4529d9280f04a4cadda37'
    });
    await games.forEach(console.dir);
})

app.listen(3000, () => {
    console.log('Server listening on Port 3000...')
});