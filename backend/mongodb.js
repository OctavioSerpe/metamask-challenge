const { MongoClient } = require("mongodb");

let _db;
let _client;

function connect(){
  return MongoClient.connect("mongodb+srv://admin:admin@main-cluster.eeb3j.mongodb.net/metamask-data?retryWrites=true&w=majority")
    .then(client => {
      console.log("MongoDb: Connected!");
      _client = client;
      _db = client.db();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}

function getDb() {
  if (_db) {
    return _db;
  }
  throw new Error("MongoDb: No database found!");
}

async function closeConnection() {
  if(_client) {
    await _client.close();
    return;
  }
  throw new Error("MongoDb: No connection was found!");
}

module.exports = {
    connect,
    getDb,
    closeConnection
};