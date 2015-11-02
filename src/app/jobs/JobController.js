(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('JobController', JobController);

  /** @ngInject */
  function JobController ($log, $stateParams, Jobs, CurrentAuth, Accounts) {

    var vm = this;
    Jobs
      .$object($stateParams.id)
      .$loaded()
      .then(function (data) {
        vm.detail = data;
      });


  }

})();