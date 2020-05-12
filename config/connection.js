// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

var PORT = process.env.PORT || 3006;

var connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT,
  user: "root",
  password: process.env.secret,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
