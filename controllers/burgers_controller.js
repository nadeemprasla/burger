var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", (req,res)=>{
    burger.viewAll(function (data) {
        var hbs = {
            burger: data
        };
        console.log(hbs);
        // res.render("index")
    });
});



















module.exports = router;