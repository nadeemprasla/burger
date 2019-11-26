var orm = require('../config/orm.js');

var burger = {
    viewAll: function(cb) {
        orm.viewAll("burgers", function (res) {
            cb(res);
        });
    },







}





module.exports = burger;