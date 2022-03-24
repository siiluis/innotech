var mysql = require("mysql2");
module.exports.connection = mysql.createConnection({
  host: "127.0.0.1",
  port:3008,
  user: "root",
  password: "test",
  database: "innotech_db",
});


