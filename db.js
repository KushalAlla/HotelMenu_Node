const mariadb = require('mariadb');

// Create a connection pool
var pool = mariadb.createPool({
    //host: '192.168.2.15',       // Database host (use IP or domain if remote)
    host:'',   /MariaDB IP
    port : ,  /MariaDB port
    user: '',    // MariaDB username
    password: '', // MariaDB password
    database: 'Hotel_Menu',  // Database name
    connectionLimit: 5,      // Connection pool limit
});

module.exports = Object.freeze({
    pool: pool
});
