(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('jobs', {
        url: '/jobs',
        templateUrl: 'app/jobs/index.html',
        controller: 'JobsController',
        controllerAs: 'home'
      });

    $urlRouterProvider.otherwise('/jobs');
  }

})();
