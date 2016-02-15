'use strict';

var app = angular.module('chBrews');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
