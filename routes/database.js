var express = require('express');
var router = express.Router();
var Databases = require('../controllers/databases');
var Database = require('../models/database');

/* Create new database */
router.post('/register', function (req, res, next) {
    var newDatabase = new Database({
        name: req.body.username,
    });
    Databases.create(newDatabase, function (err, data) {
        if (err) {
            return res.send(err);
        }
        res.send('Registered!');
    });
});

/*  List databases */
router.get('/query', function (req, res, next) {
    Databases.getAll(function(err,data){
        if (err){
            return res.send(err);
        }
        res.send(data);
    });
});


module.exports = router;
