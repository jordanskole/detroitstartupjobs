(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .factory('Companies', Companies);

  /** @ngInject */
  function Companies(FIREBASE_URL, $firebaseArray, $firebaseObject, Auth, $log) {
    var itemsRef = new Firebase(FIREBASE_URL + "/companies");

    var Companies = $firebaseArray.$extend({
      // return a $firebaseArray of all the companies
      // that have an account **key** that matches our logged in user
      getMyCompanies: function () {
        var query = itemsRef.orderByChild('accounts/' + Auth.$getAuth().uid).equalTo(true);
        return $firebaseArray(query);
      }
    });

    return {
      "$array": Companies(itemsRef),
      "$object": function (objectId) {
        return $firebaseObject(itemsRef.child(objectId));
      }
    };
  }

})();
