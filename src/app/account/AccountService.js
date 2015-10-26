(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .factory('Account', Account);

  /** @ngInject */
  function Account ($firebaseAuth, FIREBASE_URL) {
    var itemsRef = new Firebase(FIREBASE_URL + "/accounts");

    var Accounts = $firebaseArray.$extend({
      
    });

    return {
      "$array": Accounts(itemsRef),
      "$object": $firebaseObject(itemsRef)
    };
  }

})();
