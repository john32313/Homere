const mysql = require("mysql2");
require("dotenv").config();
const util = require("util");

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.query = util.promisify(connection.query).bind(connection);

// connection.connect((err) => {
//   if (err) {
//     return console.error(`Error on connect sql database : ${err.message}`);
//   }
//   return console.log("Connecter mysql");
// });

module.exports = connection;
