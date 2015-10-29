(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController ($scope, $log, $window, $state, $stateParams, $mdDialog, Auth, Accounts) {

    var vm = this;
    vm.loading = false;

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
      if (current == 0 && old != 0) {
        $state.transitionTo('account.login', {action: 'login'}, {inherit: false, notify: false, reload: false});
      } else if (current == 1 && old != 1) {
        $state.transitionTo('account.login', {action: 'register'}, {inherit: false, notify: false, reload: false});
      } else if (current == 2 && old != 2) {
        $state.transitionTo('account.login', {action: 'social'}, {inherit: false, notify: false, reload: false});
      }
    });

    vm.loginWithPassword = function () {
      vm.loading = true;
      Auth.$authWithPassword(vm.user)
      .then(function () {
        vm.loading = false;
        $state.go('jobs');
      })
      .catch( function (error) {
        $log.error('Error: ' + error);
      });
    }

    vm.createUser = function () {
      vm.loading = true;
      Auth.$createUser({
        email: vm.newUser.email,
        password: vm.newUser.password
      })
      .then( function (userData) {
        // we have a user
        $log.log('Created user with uid: ' + userData.uid);
        $log.log(userData);
        // create the users account
        return Accounts.$new(userData.uid, {
          email: vm.newUser.email,
          complete: 0
        });
      })
      .then( function (ref) {
        $log.log(ref);
        return Auth.$authWithPassword({
          email: vm.newUser.email,
          password: vm.newUser.password
        });
      })
      .then( function (authData) {
        $log.log('Logged in with uid: ' + authData.uid );
        vm.loading = false;
        $state.go('account.create', {uid: authData.uid });
      })
      .catch( function (error) {
        $log.error('Error: ' + error);
        $log.log(error);
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Oh no!')
            .content(error.message || 'Something went wrong. I have alerted the team. Please try again.')
            .ariaLabel('Error Dialog')
            .ok('Got it!')
        )
        .then( function () {
          // $state.go('jobs');
          vm.loading = false;
        });
      });
    }


  }

})();
