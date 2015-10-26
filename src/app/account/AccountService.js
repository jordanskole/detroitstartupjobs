(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .factory('Account', Account);

  /** @ngInject */
  function Account (FIREBASE_URL, $firebaseAuth, $firebaseArray, $firebaseObject) {
    var itemsRef = new Firebase(FIREBASE_URL + "/accounts");

    var Accounts = $firebaseArray.$extend({

    });

    return {
      "$array": Accounts(itemsRef),
      "$object": $firebaseObject(itemsRef)
    };
  }

})();
