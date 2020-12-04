# A Comparison of MongoDB and PostgreSQL for an EPL Team Analytics Application.

## Instructions for Setup

### 1. Data Preparation and Setup
We are using the following database systems:
1. **MongoDB**: Version 4.2.11 (Atlas Cluster)  
- Install the MongoDB CLI following [these](https://docs.mongodb.com/mongocli/v1.8/install) instructions.
- This is an instance that is runnning on the Cloud. We have created a 

2. **PostgreSQL**: Version 13.1  
##### Instructions 
- Install the PostgreSQL binary from [this](https://www.postgresql.org/download/) page.
- 


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