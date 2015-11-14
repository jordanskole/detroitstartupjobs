(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController ($scope, $timeout, $log, $state, $mdDialog, $document, $mdToast, CurrentAuth, Accounts, Jobs) {

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

    vm.toast = function (text, position) {
      position = position || 'bottom right';
      $mdToast.show(
        $mdToast
          .simple()
          .content(text)
          .position(position)
      );
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
          "created_on": moment().format(),
          "uid": CurrentAuth.uid
        }
        Jobs.$array.$add(_.merge(job, meta));
        $mdToast.show($mdToast.simple().content('Job Posted!').position('bottom right'));
      });
    }

    // fab speed dial
    vm.isOpen = false;

  }

})();
