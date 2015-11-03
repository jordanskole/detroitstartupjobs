(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('EditJobController', EditJobController);

  /** @ngInject */
  function EditJobController ($log, $scope, $stateParams, Jobs, CurrentAuth, Accounts) {

    var vm = this;
    Jobs
      .$object($stateParams.id)
      .$bindTo($scope, 'detail');

  }

})();
