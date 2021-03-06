'use strict';

var app = angular.module('chBrews');

app.service('Auth', function($http) {

  this.signup = function(user){
    return $http.post('/signup', user);
  }

  this.login = function(user){
    return $http.post('/login', user);
  }

  this.getUserInfo = function(){
    return $http.get('/users/info')
  }

});
