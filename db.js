const mariadb = require("mariadb");

// Create a connection pool
var pool = mariadb.createPool({
<<<<<<< HEAD
  host: "127.0.0.1",
  port: 3306,
  user: "root", // MariaDB username
  password: "1569", // MariaDB password
  database: "Hotel_Menu", // Database name
  connectionLimit: 5, // Connection pool limit
});

module.exports = Object.freeze({
  pool: pool,
=======
    host:'',   //MariaDB IP
    port : ,  //MariaDB port
    user: '',    // MariaDB username
    password: '', // MariaDB password
    database: 'Hotel_Menu',  // Database name
    connectionLimit: 5,      // Connection pool limit
});

module.exports = Object.freeze({
    pool: pool
>>>>>>> 7d89615e7d27691696f7e97b29912f1cd8c6a621
});
