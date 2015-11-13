(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('CompaniesController', CompaniesController);

  /** @ngInject */
  function CompaniesController ($log, $state, Companies, CurrentAuth) {

    var vm = this;
    vm.list = Companies.$array;
    vm.myList = Companies.$array.getMyCompanies();

  }

})();
