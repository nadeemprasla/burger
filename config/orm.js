var connection = require('./connection.js');


var orm = {
    viewAll: function(table, cb) {
        console.log(table)
        var query = "SELECT * FROM ??";
        connection.query(query, [table], (err, result) => {
            if (err) {
                console.log(err);
            }
            cb(result)
        })
    },
    createInput: function() {
        var query = "INSERT INTO burgers"
        connection.query(query, vals)
    }










}


module.exports = orm