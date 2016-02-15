'use strict';

var app = angular.module('chBrews');

app.directive('randomBeer', function(BeerSvc){

    var link = function(scope, elem, attrs){
      BeerSvc.getRandomBeer().then(function(resp){
        scope.beer = resp.data;
      })

    }

    return {
      templateUrl: '/html/random-beer.html',
      replace: true,
      restrict: 'EA',
      scope: {
        data: '@'
      },
      link: link
    }
  })
