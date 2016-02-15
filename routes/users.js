'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/info', User.isAuthenticated, function(req, res) {

  res.send(req.body);
});

module.exports = router;
