(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController ($log, $state, $mdDialog, $document, $mdToast, CurrentAuth, Accounts) {

    var vm = this;
    if (CurrentAuth) {
      vm.account = Accounts.$object(CurrentAuth.uid);
    } else {
      vm.account = false;
    }

    $log.log(vm.user);

    vm.go = function (state, params) {
      $state.go(state, params);
    }

    vm.createJob = function (ev) {
      $mdDialog.show({
        controller: 'CreateDialogController',
        controllerAs: 'dialog',
        templateUrl: 'app/jobs/create.html',
        parent: angular.element($document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
      .then( function (job) {
        var meta = {
          "created_on": moment().format()
        }
        Jobs.$array.$add(_.merge(job, meta));
        $mdToast.show($mdToast.simple().content('Job Posted!').position('bottom right'));
      });
    }

  }

})();
