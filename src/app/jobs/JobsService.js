(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .factory('Jobs', Jobs);

  /** @ngInject */
  function Jobs($firebaseObject) {
    var itemsRef = new Firebase(FIREBASE_URL + "/jobs");
    return $firebaseObject(itemsRef);
  }

})();
