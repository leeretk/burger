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

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "	op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "rwkdpkqh8y2mkc5z",
    password: process.env.jawssecret,
    database: "nvvsvlzge0g0b4yb"
  });
}

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
