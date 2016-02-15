'use strict';

var app = angular.module('chBrews');

app.service(function($http) {

  this.signup = function(user){
    return $http.post('/signup', user);
  }
  
  this.login = function(user){
    return $http.post('/login', user);
  }

});
