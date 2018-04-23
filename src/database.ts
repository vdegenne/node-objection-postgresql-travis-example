import * as Knex from 'knex';


// database configs
const dbConfig = {
  host: 'realhost',
  user: 'realuser',
  password: 'realpassword',
  database: 'universe'
};

// dev environment specific configs
if (process.env.NODE_ENV && process.env.NODE_ENV in { 'test': undefined, 'dev': undefined }) {
  Object.assign(dbConfig, {
    host: 'localhost',
    user: 'testdbuser',
    password: 'password'
  });
}

// the actual instance of the database (needs pool ?)
const _database = Knex({
  client: 'pg',
  connection: dbConfig,
  debug: process.env.DEBUG ? true : false
});


export default _database;
