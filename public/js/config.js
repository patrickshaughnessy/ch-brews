'use strict';

var app = angular.module('chBrews');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/html/profile.html',
      controller: 'profileCtrl',
      resolve: {
        "currentAuth": ["Auth", function(Auth) {
          return Auth.authenticate();
        }]
      }
    })

  $urlRouterProvider.otherwise('/');
});
