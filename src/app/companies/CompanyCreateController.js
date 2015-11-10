(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('CompanyCreateController', CompanyCreateController);

  /** @ngInject */
  function CompanyCreateController ($log, $state, $stateParams, $mdDialog, $document, $mdToast, $scope, Companies, CurrentAuth) {

    var vm = this;
    // vm.list = Companies.$array;
    vm.save = function () {
      var meta = {
        "created_on": moment().format()
      }

      $log.log(_.merge(vm.data, meta));

      Companies.$array
        .$add(_.merge(vm.data, meta))
        .then( function (data) {
          // go to jobs detail page
          $state.go('home.companies.detail', {id: data.key()});
        });
    }

    vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });

  }

})();
