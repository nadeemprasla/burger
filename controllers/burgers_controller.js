var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", (req, res) => {
    burger.viewAll(function(data) {
        var hbs = {
            burger: data
        };
        res.render("index", hbs)
    });
});

router.put("/api/burger/:id", (req, res) => {
    burger.update("devoured", req.body.devoured, "id", req.params.id, function(data) {
        if (data.changedRows == 0) {
            return res.status(404).end();
        } else {
            console.log("here")
            res.status(200).end();
        }
    })
})

router.post("/", (req, res) => {
    burger.create(req.body.newBurger, function(data) {
        res.redirect("/")
    })
})

router.delete("/:id?", (req, res) => {
    burger.delete(req.params.id, function(data) {
        if (data.affectedRows == 0) {
            return res.status(404).end();
        } else {
            console.log("here")
            res.status(200).end();
        }
    })

})

















module.exports = router;