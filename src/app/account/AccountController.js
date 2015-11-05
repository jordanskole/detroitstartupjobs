(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('AccountController', AccountController);

  /** @ngInject */
  function AccountController ($log, $scope, $stateParams, Accounts, Companies) {

    var vm = this;
    Accounts
      .$object($stateParams.uid)
      .$bindTo($scope, 'profile')
      .then( function () {
        vm.birthday = new Date($scope.profile.birthday);
      })
      .then( function () {
        if ($scope.profile.primary_company_id !== undefined) {
          Companies
            .$object($scope.profile.primary_company_id)
            .$loaded()
            .then(function (data) {
              $log.log(data)
              vm.selectedCompany = data;
            })
        }
      });

    Companies
      .$array
      .$loaded()
      .then( function (data) {
        vm.companies = data;
      })

    vm.searchTextChange = function (text) {
      $log.log('Search text changed to ' + text);
    }

    vm.selectedItemChange = function (item) {
      $log.log(item.$id)
      $scope.profile.primary_company_id = item.$id;
      // vm.selectedCompany = item;
    }

    vm.birthdateChange = function () {
      $scope.profile.birthday = vm.birthday.toString();
    }

    vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });

    // progress indicators go here


  }

})();
