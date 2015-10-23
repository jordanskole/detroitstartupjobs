(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('CreateDialogController', CreateDialogController);

  /** @ngInject */
  function CreateDialogController ($log, $mdDialog) {

    var vm = this;

    vm.cancel = function () {
      $mdDialog.cancel();
    }

  }

})();
