'use strict';

var app = angular.module('chBrews');

app.controller('homeCtrl', function($scope, Auth, $state) {

  $scope.signup = function(){
    var user = {
      email: $scope.signUpEmail,
      password: $scope.signUpPass1
    }
    Auth.signup(user)
    .then(function(resp){
      $scope.login(user);
    })
    .catch(function(err){
      console.log(err);
    })
  }

  $scope.login = function(newUser){
    var user;
    if (!newUser){
      user = {
        email: $scope.loginEmail,
        password: $scope.loginPass
      }
    } else {
      user = newUser;
    }
    Auth.login(user)
    .then(function(resp){
      $state.go('profile');
    })
    .catch(function(err){
      console.log(err);
    })
  }

});
