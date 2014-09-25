(function() {
  'use strict';

  var app = angular.module('MusicShop', []);

  app.controller("MainCtrl", function($scope) {

    $scope.categories = ['Guitar', 'Bass', 'Drums'];

    $scope.instruments = [
      { name: 'Fender Precision', category: 'Bass',
        image: 'http://guitarphotographer.com/fender-bass-guitar-photos/1979--fretless-precision-bass.jpg' },
      { name: 'Gibson Les Paul Standard', category: 'Guitar',
        image: 'http://www.worldsguitar.com/2008-gibson-les-paul-standard-ebony.JPG' },
      { name: 'TAMA Swingstar ', category: 'Drums' }
    ];

    // TIL if you set this to null, then
    // filter will not load ANY records.
    // In order to load ALL records, this needs to be
    // set to undefined - or simply not set at all.
    $scope.currentCategory = undefined;

    function setCurrentCategory(category) {
      $scope.currentCategory = category;
    }

    $scope.setCurrentCategory = setCurrentCategory;

    function isCurrentCategory (category) {
      return $scope.currentCategory === category;
    }

    $scope.isCurrentCategory = isCurrentCategory;

    function isCategorySet() {
      return $scope.currentCategory !== undefined;
    }

    $scope.isCategorySet = isCategorySet;
  });

  app.directive('myInstrument', function() {
    return {
      restrict: 'E',
      scope: {
        instrument: '=',
        currentCategory: '='
      },
      link: function(scope) {
        scope.shouldDisplayImage = function(instrument) {
          return !!scope.currentCategory &&
            scope.currentCategory === instrument.category &&
            !!instrument.image;
        };
      },
      templateUrl: 'my-instrument.html',
    }
  });

})();
