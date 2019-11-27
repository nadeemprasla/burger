var orm = require('../config/orm.js');

var burger = {
    viewAll: function(cb) {
        orm.viewAll("burgers", function (res) {
            cb(res);
        });
    },
    update: function (objProperty, objValue, criTable, criteria, cb) {
        orm.updateSelection("burgers", objProperty, objValue, criTable, criteria, function (res) {
            cb(res);
        });
    },
    create: function (burger, cb) {
        orm.createInput("burgers", "bname", burger, function (res) {
            cb(res);            
        })
    },
    delete: function (id, cb) {
        orm.deleteSelection("burgers", id, function (res) {
            cb(res)
        })
    }







}





module.exports = burger;