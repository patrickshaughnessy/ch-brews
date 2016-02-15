'use strict';

var app = angular.module('chBrews');

app.directive('randomBeer', function(BeerSvc){

    var link = function(scope, elem, attrs){
      BeerSvc.getRandomBeer().then(function(resp){
        scope.beer = resp.data;
        scope.addToSampled = function(){
          BeerSvc.addToSampled(scope.beer.id).then(function(resp){
            console.log('after adding to sampled', resp);
          })
        }
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
