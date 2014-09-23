(function() {
  'use strict';

  var app = angular.module('MusicShop', []);

  app.controller("SideBarCtrl", function($scope) {

    $scope.categories = ['Guitar', 'Bass', 'Drums'];

  });

})();
