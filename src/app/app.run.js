(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');

    //
    $rootScope.$on("$stateChangeError", function($log, event, toState, toParams, fromState, fromParams, error) {
      // throw the error
      $log.error(error);

      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the home page
      if (error === "AUTH_REQUIRED") {
        $state.go("login");
      }
    });

  }

})();
