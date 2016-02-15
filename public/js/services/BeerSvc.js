'use strict';

var app = angular.module('chBrews');

app.service('BeerSvc', function($http) {

  this.getRandomBeer = function(){
    return $http.get('/users/randombeer');
  }

});
