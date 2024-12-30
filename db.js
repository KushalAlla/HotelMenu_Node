const mariadb = require("mariadb");

//Create a connection pool
var pool = mariadb.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "DummyUser", // MariaDB username
  password: "Password123", // MariaDB password
  database: "Hotel_Menu", // Database name
  connectionLimit: 5, // Connection pool limit
});

module.exports = Object.freeze({
  pool: pool,
});
