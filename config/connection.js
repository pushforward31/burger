var mysql = require("mysql");

var connection = mysql.createConnection({
  //port: "default",
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b59117ed8aba6a",
  password: "3d116bb1",
  database: "heroku_cea9cac583b3f0a"
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
