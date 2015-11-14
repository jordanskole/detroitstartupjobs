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
      .$bindTo($scope, 'detail')
      .then( function () {
        vm.selectedCompany = Companies.$object($scope.detail.company_id);
      });

    // get our companies for autocomplete
    vm.companies = Companies.$array;
    // vm.selectedCompany = Companies.$object($scope.detail.company_id);

    vm.selectedCompanyChange = function (company) {
      if (company) {
        $scope.detail.company_id = company.$id;        
      }
    }
  }

})();
