'use strict';

var app = angular.module('chBrews');

app.controller('profileCtrl', function($scope, Auth, $state, $cookies) {

  console.log($cookies);
  if (!$cookies.get('token')){
    $state.go('home');
  }





});
