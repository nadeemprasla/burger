var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "l0h7kn0h4buf38gd",
    password: "xaaovdp0xx5c8r2e",
    database: "n8fv5v930e7e540m"
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting: ", err.stack);
        return;
    }
    console.log("Connected as id ", connection.threadId)
});

module.exports = connection;