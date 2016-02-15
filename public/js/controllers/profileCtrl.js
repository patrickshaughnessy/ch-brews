'use strict';

var app = angular.module('chBrews');

app.controller('profileCtrl', function($scope, Auth, $state, $cookies) {

  if (!$cookies.get('token')){
    $state.go('home');
  }

  Auth.getUserInfo($cookies.get('token')).then(function(resp){
    $scope.user = resp.data;
  })



});
