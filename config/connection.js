// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();




var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "burgers_db"
  });
}

// console.log("USER" + process.env.DB_USER);
// console.log("PASS" + process.env.DB_PASSWORD);


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;