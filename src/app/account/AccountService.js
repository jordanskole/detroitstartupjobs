(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .factory('Accounts', Accounts);

  /** @ngInject */
  function Accounts (FIREBASE_URL, $firebaseAuth, $firebaseArray, $firebaseObject) {
    var itemsRef = new Firebase(FIREBASE_URL + "/accounts");

    var Accounts = $firebaseArray.$extend({

    });

    return {
      "$array": Accounts(itemsRef),
      "$object": function (objectId) {
        return $firebaseObject(itemsRef.child(objectId));
      }
    };
  }

})();
