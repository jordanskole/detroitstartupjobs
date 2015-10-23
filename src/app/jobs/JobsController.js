(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('JobsController', JobsController);

  /** @ngInject */
  function JobsController ($log, $mdDialog, $document, $mdToast, Jobs) {

    var vm = this;
    vm.jobs = Jobs.$array;

    vm.goToSkill = function (chip) {
      $log.log('Clicked on Skill:');
      $log.log(chip);
    }

    vm.goToJob = function () {
      $log.log('Clicked on Job:');
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
        }
        Jobs.$array.$add(_.merge(job, meta));
        $mdToast.show($mdToast.simple().content('Job Posted!').position('bottom right'));
      });
    }

  }

})();
