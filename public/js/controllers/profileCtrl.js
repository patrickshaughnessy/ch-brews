'use strict';

var app = angular.module('chBrews');

app.controller('profileCtrl', function($scope, Auth, $state, $cookies) {

  if (!$cookies.get('token')){
    $state.go('home');
  }

  Auth.getUserInfo().then(function(resp){
    $scope.user = resp.data;
  });

  $scope.viewRandomBeer = function(){
    $scope.randomBeer = true;
  }



});
