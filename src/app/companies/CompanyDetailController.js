(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('CompanyDetailController', CompanyDetailController);

  /** @ngInject */
  function CompanyDetailController ($log, $state, $stateParams, $mdDialog, $document, $mdToast, $scope, Companies, CurrentAuth) {

    var vm = this;
    Companies
      .$object($stateParams.id)
      .$bindTo($scope, 'company');

  }

})();
