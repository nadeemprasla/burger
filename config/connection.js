var mysql = require('mysql');

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect((err) => {
    if (err) {
        console.error("Error connecting: ", err.stack);
        return;
    }
    console.log("Connected as id ", connection.threadId)
});

module.exports = connection;