'use strict';

var app = angular.module('chBrews');

app.service('BeerSvc', function($http) {

  this.getRandomBeer = function(){
    return $http.get('/users/randombeer');
  }

  this.addToSampled = function(beerID){
    return $http.post('/users/addtosampled', {beerID: beerID});
  }

});
