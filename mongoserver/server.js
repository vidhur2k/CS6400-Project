const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { MongoClient } = require("mongodb");
const app = express()
const mongoURL = 'mongodb+srv://vidhur2k:vidhur@eplgames.t3whn.mongodb.net/eplgames'
const client = new MongoClient(mongoURL);

let db = null;

async function connect() {
    await client.connect();
    db = client.db('eplgames');
}
connect().catch(console.dir);

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/FindGamesByTeam', async (req, res) => {
    let collection = db.collection('teams');
    const name = req.query.name;
    const team = await collection.findOne({
        Name: name
    });

    const teamId = team._id;
    let response = {
        "teamId": teamId
    };
    let games = [];
    collection = db.collection('games');
    await collection.find({
        HomeTeam: teamId.toString()
    }).toArray(async (err, items) => {
        if(err) {
            console.log(err);
        }
        games = await games.concat(items);
    });
    await collection.find({
        AwayTeam: teamId.toString()
    }).toArray((err, items) => {
        if(err) {
            console.log(err);
        }
        games = games.concat(items);
        response['games'] = games;
        res.send(response);
    });
});

app.get('/FindGamesByTeamAndSeason', async (req, res) => {
    let collection = db.collection('teams');
    const name = req.query.name;
    const season = req.query.season;
    const team = await collection.findOne({
        Name: name
    });

    const teamId = team._id;
    let response = {
        "teamId": teamId
    };
    let games = [];
    collection = db.collection('games');
    await collection.find({
        HomeTeam: teamId.toString(),
        Season: season
    }).toArray(async (err, items) => {
        if(err) {
            console.log(err);
        }
        games = await games.concat(items);
    });
    await collection.find({
        AwayTeam: teamId.toString(),
        Season: season
    }).toArray((err, items) => {
        if(err) {
            console.log(err);
        }
        games = games.concat(items);
        response['games'] = games;
        res.send(response);
    });
});

app.get('/FindGamesByTeams', async (req, res) => {
    let collection = db.collection('teams');
    const first = req.query.firstTeam;
    const second = req.query.secondTeam;
    const firstTeam = await collection.findOne({
        Name: first
    });

    const firstTeamId = firstTeam._id;
    const secondTeam = await collection.findOne({
        Name: second
    });

    const secondTeamId = secondTeam._id;
    
    let response = {
        "firstTeamId": firstTeamId,
        "firstTeam": firstTeam,
        "secondTeamId": secondTeamId,
        "secondTeam": secondTeam,
    };
    let games = [];
    collection = db.collection('games');
    await collection.find({
        HomeTeam: firstTeamId.toString(),
        AwayTeam: secondTeamId.toString(),
    }).toArray(async (err, items) => {
        if(err) {
            console.log(err);
        }
        games = await games.concat(items);
    });
    await collection.find({
        HomeTeam: secondTeamId.toString(),
        AwayTeam: firstTeamId.toString()
    }).toArray((err, items) => {
        if(err) {
            console.log(err);
        }
        games = games.concat(items);
        response['games'] = games;
        res.send(response);
    });
});

app.get('/FindGamesByTeamsAndSeason', async (req, res) => {
    let collection = db.collection('teams');
    const first = req.query.firstTeam;
    const second = req.query.secondTeam;
    const season = req.query.season;
    const firstTeam = await collection.findOne({
        Name: first
    });

    const firstTeamId = firstTeam._id;
    const secondTeam = await collection.findOne({
        Name: second
    });

    const secondTeamId = secondTeam._id;
    
    let response = {
        "firstTeamId": firstTeamId,
        "firstTeam": firstTeam,
        "secondTeamId": secondTeamId,
        "secondTeam": secondTeam,
    };
    let games = [];
    collection = db.collection('games');
    await collection.find({
        HomeTeam: firstTeamId.toString(),
        AwayTeam: secondTeamId.toString(),
        Season: season
    }).toArray(async (err, items) => {
        if(err) {
            console.log(err);
        }
        games = await games.concat(items);
    });
    await collection.find({
        HomeTeam: secondTeamId.toString(),
        AwayTeam: firstTeamId.toString(),
        Season: season
    }).toArray((err, items) => {
        if(err) {
            console.log(err);
        }
        games = games.concat(items);
        response['games'] = games;
        res.send(response);
    });
});

app.listen(3000, () => {
    console.log('Server listening on Port 3000...')
});