const { MongoClient } = require("mongodb");
const uri = process.env.CONNECTION_STRING;


const ConnectDb = async () => {
  const client = new MongoClient(uri);
  const dbName = "Quote";
  client.connect();
  console.log("Mongo client connected successfully");
  const db = client.db(dbName);
  const collection = db.collection("quotes");
  console.log(
    `we are in the databse Name: ${dbName}`
  );
  return collection
};

module.exports=ConnectDb