(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .factory('Accounts', Accounts);

  /** @ngInject */
  function Accounts (FIREBASE_URL, $firebaseAuth, $firebaseArray, $firebaseObject, Auth, $log) {
    var itemsRef = new Firebase(FIREBASE_URL + "/accounts");

    var Accounts = $firebaseArray.$extend({
    });

    // var Account = $firebaseObject.$extend({
    //
    // });

    return {
      "$array": Accounts(itemsRef),

      // this is different than a normal service,
      // because we are going to get the user by a child ref
      // and not the object $id
      "$object": function (objectId) {
        return $firebaseObject(itemsRef.child(objectId));
      },
      "$new": function (uid, user) {
        itemsRef.child(uid).set(user);
      }
    };
  }

})();
