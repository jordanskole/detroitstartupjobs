(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login?action&redirect',
        templateUrl: 'app/account/login.html',
        controller: 'LoginController',
        controllerAs: 'account'
      })
      .state('logout', {
        url: '/logout?redirect',
        controller: function (Auth, $state, $stateParams, $mdToast) {
          Auth.$unauth();
          $state.go($stateParams.redirect || 'home.jobs')
          .then( function () {
            $mdToast.show(
              $mdToast.simple()
                .content('Logged Out!')
                .position('bottom right')
            );
          });
        },
        controllerAs: 'logout'
      })
      .state('home', {
        url: '/+',
        templateUrl: 'app/home/index.html',
        controller: 'HomeController',
        controllerAs: 'home',
        abstract: true,
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "CurrentAuth": ["Auth", function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.$waitForAuth();
          }]
        }
      })
      .state('home.account', {
        url: '/account',
        abstract: true,
        template: '<ui-view flex layout="column" />'
      })
      .state('home.account.update', {
        url: '/:uid',
        templateUrl: 'app/account/update.html',
        controller: 'AccountController',
        controllerAs: 'account'
      })
      .state('home.jobs', {
        url: '/jobs',
        templateUrl: 'app/jobs/index.html',
        controller: 'JobsController',
        controllerAs: 'jobs'
      });

    $urlRouterProvider.otherwise('/+/jobs');
  }

})();
