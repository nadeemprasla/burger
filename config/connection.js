var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.argv[2],
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting: ", err.stack);
        return;
    }
    console.log("Connected as id ", connection.threadId)
});

module.exports = connection;