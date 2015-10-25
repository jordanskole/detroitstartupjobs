(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .factory('Auth', Auth);

  /** @ngInject */
  function Auth ($firebaseAuth, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    return $firebaseAuth(ref);
  }

})();
