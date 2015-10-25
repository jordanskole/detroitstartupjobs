(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider) {
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
     .primaryPalette('cyan')
     .accentPalette('teal')
     .backgroundPalette('grey');

    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
     .primaryPalette('cyan')
     .dark();
  }

})();