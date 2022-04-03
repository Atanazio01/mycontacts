const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  console.log(rows);
  return rows;
};

// const { MongoClient } = require('mongodb');
// require('dotenv/config');
// // or as an es module:
// // import { MongoClient } from 'mongodb'
// const {
//   DB_MONGO_HOST,
//   DB_MONGO_HOST_PORT,
//   DB_MONGO_AUTH_USER,
//   DB_MONGO_AUTH_USER_PASSWORD,
//   DB_MONGO_AUTH_DATABASE,
// } = process.env;

// // Connection URL
// const url = `mongodb://${DB_MONGO_AUTH_USER}:${DB_MONGO_AUTH_USER_PASSWORD}@${DB_MONGO_HOST}:${DB_MONGO_HOST_PORT}/${DB_MONGO_AUTH_DATABASE}`;
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'patients';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();

//   console.log('Connected successfully to server');

//   const db = await client.db(dbName);

//   const collection = await db.collection('auth').find().toArray();

//   const code = collection.map((item) => (
//     item.code
//   ));

//   // the following code examples can be pasted here...

//   return code;
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());
