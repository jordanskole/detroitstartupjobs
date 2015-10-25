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
        // what tab do we want to land on
        // I normally hate url params, but I think is appropriate here
        url: '/login?action',
        templateUrl: 'app/account/login.html',
        controller: 'AccountController',
        controllerAs: 'account'
      })
      .state('jobs', {
        url: '/jobs',
        templateUrl: 'app/jobs/index.html',
        controller: 'JobsController',
        controllerAs: 'home'
      });

    $urlRouterProvider.otherwise('/jobs');
  }

})();
