const mariadb = require('mariadb');

// Create a connection pool
var pool = mariadb.createPool({
    host:'',   //MariaDB IP
    port : ,  //MariaDB port
    user: '',    // MariaDB username
    password: '', // MariaDB password
    database: 'Hotel_Menu',  // Database name
    connectionLimit: 5,      // Connection pool limit
});

module.exports = Object.freeze({
    pool: pool
});
