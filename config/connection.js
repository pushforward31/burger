var mysql = require("mysql");

var connection = mysql.createConnection({
  port: "",
  host: "us-cdbr-east.cleardb.com/heroku_db",
  user: "adffdadf2341",
  password: "adf4234",
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
