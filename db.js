const mariadb = require("mariadb");

// Create a connection pool
var pool = mariadb.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root", // MariaDB username
  password: "1569", // MariaDB password
  database: "Hotel_Menu", // Database name
  connectionLimit: 5, // Connection pool limit
});

module.exports = Object.freeze({
  pool: pool,
});
