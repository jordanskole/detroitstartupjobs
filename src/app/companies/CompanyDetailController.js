(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('CompanyDetailController', CompanyDetailController);

  /** @ngInject */
  function CompanyDetailController ($log, $state, $stateParams, $mdDialog, $document, $mdToast, $scope, Companies, CurrentAuth, Jobs) {

    var vm = this;
    vm.data = Companies.$object($stateParams.id);
    vm.jobs = Jobs.$array.getJobsByCompany($stateParams.id);

  }

})();
