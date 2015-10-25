(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('AccountController', AccountController);

  /** @ngInject */
  function AccountController ($log, $window) {

    var vm = this;
    vm.windowHeight = $window.innerHeight;

  }

})();
