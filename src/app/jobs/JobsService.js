(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .factory('Jobs', Jobs);

  /** @ngInject */
  function Jobs(FIREBASE_URL, $firebaseArray, $firebaseObject) {
    var itemsRef = new Firebase(FIREBASE_URL + "/jobs");

    var Jobs = $firebaseArray.$extend({
      filterJobsByCompany: function (company) {

      },
      filterJobsBySkill: function (skill) {

      },
      filterJobsBySalary: function (min, max) {

      }
    });

    return {
      "$array": Jobs(itemsRef),
      "$object": $firebaseObject(itemsRef)
    };
  }

})();
