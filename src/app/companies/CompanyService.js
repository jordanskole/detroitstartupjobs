(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .factory('Companies', Companies);

  /** @ngInject */
  function Companies(FIREBASE_URL, $firebaseArray, $firebaseObject) {
    var itemsRef = new Firebase(FIREBASE_URL + "/companies");

    var Companies = $firebaseArray.$extend({
    });

    return {
      "$array": Companies(itemsRef),
      "$object": function (objectId) {
        return $firebaseObject(itemsRef.child(objectId));
      }
    };
  }

})();
