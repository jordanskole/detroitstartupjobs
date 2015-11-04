(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('CompaniesController', CompaniesController);

  /** @ngInject */
  function CompaniesController ($log, $state, $mdDialog, $document, $mdToast, Companies, CurrentAuth) {

    var vm = this;
    vm.list = Companies.$array;

  }

})();
