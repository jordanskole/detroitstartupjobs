(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('JobController', JobController);

  /** @ngInject */
  function JobController ($log, $stateParams, Jobs, CurrentAuth, Accounts, Companies) {

    var vm = this;
    vm.detail = {
      skills: []
    };
    Jobs
      .$object($stateParams.id)
      .$loaded()
      .then(function (data) {
        vm.detail = data;
        vm.company = Companies.$object(vm.detail.company_id);

        vm.company
          .$loaded()
          .then( function (data) {
            vm.otherJobs = Jobs.$array.getJobsByCompany(data.$id);
          });

        vm.myJob = function () {
          if (CurrentAuth.uid === vm.detail.uid) {
            return true;
          }

          return false;
        }


      });


  }

})();
