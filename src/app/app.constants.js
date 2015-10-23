/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('FIREBASE_URL', 'https://detroitstartupjobs.firebaseio.com');

})();
