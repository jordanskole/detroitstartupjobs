(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('AccountController', AccountController);

  /** @ngInject */
  function AccountController ($log, $scope, $stateParams, Accounts) {

    var vm = this;
    Accounts
      .$object($stateParams.uid)
      .$bindTo($scope, 'profile')
      .then( function () {
        vm.birthday = new Date($scope.profile.birthday);
      });

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
