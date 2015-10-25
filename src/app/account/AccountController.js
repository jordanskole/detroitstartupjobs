(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('AccountController', AccountController);

  /** @ngInject */
  function AccountController ($scope, $log, $window, $state, $stateParams) {

    var vm = this;
    vm.windowHeight = $window.innerHeight;

    if ($stateParams.action === 'login') {
      vm.tabIndex = 0;
    } else if($stateParams.action === 'register') {
      vm.tabIndex = 1;
    } else if($stateParams.action === 'social') {
      vm.tabIndex = 2;
    } else {
      vm.tabIndex = 0;
    }

    $scope.$watch('account.tabIndex', function (current, old) {
      if (current == 0) {
        $state.transitionTo('account.login', {action: 'login'}, {inherit: false, notify: false, reload: false});
      } else if (current == 1) {
        $state.transitionTo('account.login', {action: 'register'}, {inherit: false, notify: false, reload: false});
      } else if (current == 2) {
        $state.transitionTo('account.login', {action: 'social'}, {inherit: false, notify: false, reload: false});
      }
    });


  }

})();
