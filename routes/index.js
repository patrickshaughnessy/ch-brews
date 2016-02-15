'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/signup', function(req, res){
  console.log('signup', req.body);
  User.register(user, function(err, newUser){
    if (err) return res.status(400).send(err);
    res.send(newUser);
  });
});

router.post('/login', function(req, res){
  console.log('login', req.body);
  User.authenticate(user, function(err, existingUser){
    if (err) return res.status(400).send(err);
    res.send(existingUser);
  });
});

module.exports = router;
