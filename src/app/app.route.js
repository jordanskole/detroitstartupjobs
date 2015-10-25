(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('account', {
        url: '/account',
        abstract: true,
        template: '<ui-view flex layout="column" />'
      })
      .state('account.login', {
        url: '/login?action&redirect',
        templateUrl: 'app/account/login.html',
        controller: 'LoginController',
        controllerAs: 'account'
      })
      .state('account.logout', {
        url: '/logout?redirect',
        controller: function (Auth, $state, $stateParams) {
          Auth.$unauth();
          $state.go($stateParams.redirect || 'jobs');
        }
      })
      .state('jobs', {
        url: '/jobs',
        templateUrl: 'app/jobs/index.html',
        controller: 'JobsController',
        controllerAs: 'home',
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "CurrentAuth": ["Auth", function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.$waitForAuth();
          }]
        }
      });

    $urlRouterProvider.otherwise('/jobs');
  }

})();
