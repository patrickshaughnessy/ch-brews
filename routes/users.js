'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/info', User.isAuthenticated, function(req, res) {
  res.send(req.user);
});

router.get('/randombeer', User.isAuthenticated, function(req, res){
  User.getRandomBeer(req.user, function(err, beer){
    if (err) return res.status(400).send(err);
    res.send(beer);
  })
})

router.post('/addtosampled', User.isAuthenticated, function(req, res){
  var beerID = req.body;
  User.findByIdAndUpdate(req.user._id, {sampled: $push(beerID)} function(err, beer){
    if (err) return res.status(400).send(err);
    res.send(beer);
  })
})

module.exports = router;
