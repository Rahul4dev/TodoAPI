const mongodb = require('mongodb');

const MongoDbClient = mongodb.MongoClient;

let database;

async function initDb() {
  const client = await MongoDbClient.connect('mongodb://127.0.0.1:27017');
  database = client.db('todoApi');
}

function getDb() {
  if(!database) {
    throw new Error('Failed to connect the database');    
  }

  return database;
}

module.exports = {
  initDb : initDb,
  getDb : getDb
}