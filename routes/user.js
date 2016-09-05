var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Users = require('../controllers/users');

/* Create new user */
router.post('/register', function (req, res, next) {
  console.log('register', req.body);
  var isAdmin = req.body.admin === 'true';
  var newUser = new User({
    username: req.body.username,
    password: req.body.password,
    admin: isAdmin
  });
  Users.create(newUser, function (err) {
    console.log('here2');
    if (err) {
      console.log(err);
      return res.send(err);
    }
    res.send('Registered!');
  });
});

module.exports = router;
