'use strict';

var app = angular.module('chBrews');

app.controller('homeCtrl', function($scope) {

  $scope.signup = function(){
    var user = {
      email: $scope.signUpEmail,
      password: $scope.signUpPass1
    }
    console.log('sign user', user);
  }

  $scope.login = function(){
    var user = {
      email: $scope.loginEmail,
      password: $scope.loginPass
    }
    console.log('login user', user);
  }

});
