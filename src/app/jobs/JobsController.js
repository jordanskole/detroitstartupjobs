(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('JobsController', JobsController);

  /** @ngInject */
  function JobsController ($log, $state, $mdDialog, $document, $mdToast, Jobs, CurrentAuth, Accounts) {

    var vm = this;
    vm.list = Jobs.$array;
    if (CurrentAuth) {
      vm.account = Accounts.$object(CurrentAuth.uid);
    }
    $log.log(vm.user);

    vm.goToSkill = function (chip) {
      $log.log('Clicked on Skill:');
      $log.log(chip);
    }

    vm.go = function (route, params) {
      $state.go(route, params);
    }

    vm.go = function (state, params) {
      $state.go(state, params);
    }

  }

})();
