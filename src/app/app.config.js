(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .config(config);

  /** @ngInject */
  function config($locationProvider, $logProvider, toastrConfig, $mdThemingProvider) {

    // remove the # from urls
    /*
     * We need to turn this off if we want to host on gh-pages
     * otherwise we return a 404 error on hard refresh or browse
     * to that specific page.
     */
    // $locationProvider.html5Mode(true);


    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // set our material design theme
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('indigo')
      .backgroundPalette('grey');

    // Configure a dark theme
    $mdThemingProvider.theme('alt-background', 'default')
      .backgroundPalette('blue-grey');

    // Grey Text theme
    $mdThemingProvider.theme('grey')
      .primaryPalette('grey');


    // $mdThemingProvider.theme('default-inverse', 'default');
  }

})();
