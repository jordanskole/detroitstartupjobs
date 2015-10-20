(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('HomeCtrl', HomeCtrl);

  /** @ngInject */
  function HomeCtrl($scope) {
    $scope.data = "Hello World"
  }

})();
