const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
const pool = new Pool({
    user: 'vidhur2k',
    database: 'eplgames'
});
pool.connect();

app.get('/FindGamesByTeam', (req, resp) => {
    const name = req.query.name;
    console.log(name);
    pool.query(`SELECT * FROM teams WHERE name='${name}'`, (err, res1) => {
        if(err) console.log(err);
        const teamId = res1.rows[0].id;
        pool.query(`SELECT * from games WHERE (home_team='${teamId}' OR away_team=${teamId})`, (err, res2) => {
            if(err) console.log(err);
            console.log(res2.rows[0]);
            let response = {
                'isPostgres': 1,
                'teamId': teamId,
                'games': res2.rows
            };
            resp.send(response);
        });
    });
});

app.get('/FindGamesByTeamAndSeason', (req, resp) => {
    const name = req.query.name;
    const season = req.query.season;
    console.log(name);
    console.log(season);
    pool.query(`SELECT * FROM teams WHERE name='${name}'`, (err, res1) => {
        if(err) console.log(err);
        const teamId = res1.rows[0].id;
        pool.query(`SELECT * from games WHERE (home_team='${teamId}' OR away_team=${teamId}) AND (season='${season}')`, (err, res2) => {
            if(err) console.log(err);
            console.log(res2.rows[0]);
            let response = {
                'isPostgres': 1,
                'teamId': teamId,
                'games': res2.rows
            };
            resp.send(response);
        });
    });
});

app.get('/FindGamesByTeams', (req, resp) => {
    const firstTeamName = req.query.firstTeam;
    const secondTeamName = req.query.secondTeam;
     let response = {
        'isPostgres': 1,
        "firstTeam": firstTeamName,
        "secondTeam": secondTeamName,
    };
    pool.query(`SELECT * FROM teams WHERE name='${firstTeamName}'`, (err, res1) => {
        if(err) console.log(err);
        response['firstTeamId'] = res1.rows[0].id;
        console.log(res1.rows[0].id);
        pool.query(`SELECT * FROM teams WHERE name='${secondTeamName}'`, (err, res2) => {
            if(err) console.log(err);
            response['secondTeamId'] = res2.rows[0].id;
            console.log(res2.rows[0].id);
                    
            pool.query(`SELECT * from games WHERE (home_team='${response.firstTeamId}' AND away_team=${response.secondTeamId})
                        OR (home_team='${response.secondTeamId}' AND away_team=${response.firstTeamId})`, (err, res3) => {
                if(err) console.log(err);
                console.log(res3.rows);
                response['games'] = res3.rows;
                resp.send(response);
            });
        })
    });
});

app.get('/FindGamesByTeamsAndSeason', (req, resp) => {
    const firstTeamName = req.query.firstTeam;
    const secondTeamName = req.query.secondTeam;
    const season = req.query.season;
     let response = {
        'isPostgres': 1,
        "firstTeam": firstTeamName,
        "secondTeam": secondTeamName,
    };
    pool.query(`SELECT * FROM teams WHERE name='${firstTeamName}'`, (err, res1) => {
        if(err) console.log(err);
        response['firstTeamId'] = res1.rows[0].id;
        console.log(res1.rows[0].id);
        pool.query(`SELECT * FROM teams WHERE name='${secondTeamName}'`, (err, res2) => {
            if(err) console.log(err);
            response['secondTeamId'] = res2.rows[0].id;
            console.log(res2.rows[0].id);
                    
            pool.query(`SELECT * from games WHERE ((home_team='${response.firstTeamId}' AND away_team=${response.secondTeamId})
                        OR (home_team='${response.secondTeamId}' AND away_team=${response.firstTeamId}))
                        AND (season='${season}')`, (err, res3) => {
                if(err) console.log(err);
                console.log(res3.rows);
                response['games'] = res3.rows;
                resp.send(response);
            });
        })
    });
});

app.listen(3000, () => {
    console.log('Server listening on Port 3000...');
});