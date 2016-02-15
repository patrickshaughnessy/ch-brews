'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/signup', function(req, res){
  User.register(req.body, function(err, newUser){
    if (err) return res.status(400).send(err);
    res.send(newUser);
  });
});

router.post('/login', function(req, res){
  User.authenticate(req.body, function(err, existingUser){
    if (err) return res.status(400).send(err);
    var token = existingUser.token();
    res.cookie('token', token).send(existingUser);
  });
});

module.exports = router;
