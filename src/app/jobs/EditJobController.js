(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('EditJobController', EditJobController);

  /** @ngInject */
  function EditJobController ($log, $scope, $stateParams, Jobs, CurrentAuth, Accounts, Companies) {

    var vm = this;
    $scope.detail = {
      skills: []
    };
    Jobs
      .$object($stateParams.id)
      .$bindTo($scope, 'detail');

    // get our companies for autocomplete
    vm.companies = Companies.$array;
    vm.selectedCompanyChange = function () {
      $scope.detail.company_id = vm.selectedCompany.$id;
      $log.log($scope.detail.company_id);
    }
  }

})();
