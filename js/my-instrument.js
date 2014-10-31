(function() {
  'use strict';

  angular.module("app.music-shop", []).
    directive("myInstrument", MyInstrument);

  function MyInstrument(){
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
      templateUrl: 'my-instrument.html'
    }
  }

})();
