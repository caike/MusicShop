(function() {
  'use strict';

  var app = angular.module('MusicShop', []);

  app.controller("MainCtrl", function($scope) {

    $scope.categories = ['Guitar', 'Bass', 'Drums'];

    $scope.instruments = [
      { name: 'Fender Precision', category: 'Bass' },
      { name: 'Gibson Les Paul Standard', category: 'Guitar' },
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

  });

})();
