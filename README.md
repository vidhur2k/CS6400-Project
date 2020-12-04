# A Comparison of MongoDB and PostgreSQL for an EPL Team Analytics Application.

## Instructions for Setup

### 1. Data Preparation and Setup
We are using the following database systems:  
**MongoDB**: Version 4.2.11 (Atlas Cluster)  
- Install the MongoDB CLI following [these](https://docs.mongodb.com/mongocli/v1.8/install) instructions.
- Our database is running on an Atlas cluster. We have created a database user for you guys to read from the database.
- Ensure your Mongo Shell is on Version 4.0. Connect to the `eplgames` instance using the following command:
`mongo "mongodb+srv://eplgames.t3whn.mongodb.net/eplgames" --username cs6400staff` (run this on the Mongo shell).
- When prompted for a password, type in `navathe`. You should be able to connect to the instance this way.

**PostgreSQL**: Version 13.1  
- Install the PostgreSQL binary from [this](https://www.postgresql.org/download/) page.
- Run `postgres -V` to ensure that you are on Version 13.1. Next, run `psql` to start your PostgreSQL CLI.
- Next, we create the database tables. Use the following commands on the CLI to create the relations:
    1. `CREATE TABLE referees(id SERIAL PRIMARY KEY, name TEXT NOT NULL)`
    2. `CREATE TABLE teams(id SERIAL PRIMARY KEY, name TEXT NOT NULL)`
    3. `CREATE TABLE games(id SERIAL PRIMARY KEY, home_team int, away_team int,
        )`
- Once we do this, we can upload the data to the PostgreSQL database from the CSVs we have prepared using Pandas.
The data for each relation (including primary keys) is located in the `data/postgres/` subdirectory. Follow 
[this](https://dataschool.com/learn-sql/importing-data-from-csv-in-postgresql/) tutorial on importing data from a CSV
to a Postgres table.
- Now, your database is ready to go! Ensure that it is running when you try to run the API in
the `postgreserver/` directory.


### Application and Code
We are using the following programming languages:
1. **Python**: Version 3.7 (for all the Jupyter Notebooks)
2. **NodeJS**: Version 12.19.0 (for Express API development within the `mongoserver/` and `postgreserver` directories.)
3. **Javascript (ES6)**: for ReactJS.

You need to have **npm** installed for running our APIs and **yarn** installed for running the frontend
React application. Use [these](https://www.npmjs.com/get-npm) instructions to install **npm** and
[these](https://classic.yarnpkg.com/en/docs/install/#mac-stable) instructions to install **yarn**. 

Fortunately, the third party libraries we are using for the actual application are all listed in a `package.json`
file in `client/`, `mongoserver/`, and `postgreserver/` directories. In order to install them, simply
cd into the directories and run `npm i -s`.

### Code Documentation and References