'use strict';

var app = angular.module('chBrews');

app.directive('randomBeer', function(beerSvc){

    var link = function(scope, elem, attrs){
      scope.beer;


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
