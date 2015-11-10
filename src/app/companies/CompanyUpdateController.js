(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('CompanyUpdateController', CompanyUpdateController);

  /** @ngInject */
  function CompanyUpdateController ($log, $state, $stateParams, $mdDialog, $document, $mdToast, $scope, Companies, CurrentAuth) {

    var vm = this;
    Companies
      .$object($stateParams.id)
      .$bindTo($scope, 'company.data');

    vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });

  }

})();
