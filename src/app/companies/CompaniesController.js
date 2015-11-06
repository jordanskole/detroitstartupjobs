(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('CompaniesController', CompaniesController);

  /** @ngInject */
  function CompaniesController ($log, $state, $mdDialog, $document, $mdToast, Companies, CurrentAuth) {

    var vm = this;
    vm.list = Companies.$array.getMyCompanies(null);
    vm.myList = Companies.$array.getMyCompanies();

    vm.myList.$loaded().then(function () {
      $log.log(vm.myList);
    });

  }

})();
