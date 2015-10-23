(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('CreateDialogController', CreateDialogController);

  /** @ngInject */
  function CreateDialogController ($log, $mdDialog) {

    var vm = this;

    vm.job = {
      "salary": 45,
      "skills": []
    }

    vm.cancel = function () {
      $mdDialog.cancel();
    }

    vm.save = function () {
      $mdDialog.hide(vm.job);
    }

  }

})();
