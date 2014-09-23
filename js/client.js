(function() {
  'use strict';

  var app = angular.module('MusicShop', []);

  app.controller("SideBarCtrl", function($scope) {

    $scope.categories = ['Guitar', 'Bass', 'Drums'];

  });

  app.controller("MainCtrl", function($scope) {
    $scope.instruments = [
      { name: 'Fender Precision', category: 'Bass' },
      { name: 'Gibson Les Paul Standard', category: 'Guitar' },
      { name: 'TAMA Swingstar ', category: 'Drums' }
    ];
  });

})();
