var connection = require('./connection.js');


var orm = {
    error: function(err) {
        if (err) console.log(err);
    },
    viewAll: function(table, cb) {
        var query = "SELECT * FROM ?? ORDER BY lastupdated ASC";
        connection.query(query, [table], (err, result) => {
            orm.error(err)
            cb(result)
        })
    },
    createInput: function(table, column, burger, cb) {
        var query = "INSERT INTO ??(??) VALUES(?)"
        connection.query(query, [table, column, burger], (err, result) => {
            orm.error(err);
            cb(result)
        })
    },
    updateSelection: function(table, objProperty, objValue, criTable, criteria, cb) {
        var query = "UPDATE ?? SET ?? = ?, lastupdated = CURRENT_TIMESTAMP WHERE ?? = ?";
        connection.query(query, [table, objProperty, objValue, criTable, criteria], (err, result) => {
            orm.error(err);
            cb(result)
        })
    },
    deleteSelection: function(table, id, cb) {
        var query = "DELETE FROM ?? WHERE id = ?"
        connection.query(query, [table, id], (err, result) => {
            orm.error(err);
            cb(result);
        })
    }










}


module.exports = orm