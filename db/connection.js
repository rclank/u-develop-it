const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username
        user: 'root',
        // your mysql password
        password: 'bounce^Spar21',
        database: 'election'
    },
    // leaving the below in bc i'm not clear on what this is doing vs
    // the db.connect in server.js file...?
    console.log('Connected to the election database.')
);

module.exports = db;