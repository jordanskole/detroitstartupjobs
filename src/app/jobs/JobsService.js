(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .factory('Jobs', Jobs);

  /** @ngInject */
  function Jobs(FIREBASE_URL, $firebaseArray, $firebaseObject) {
    var itemsRef = new Firebase(FIREBASE_URL + "/jobs");

    var Jobs = $firebaseArray.$extend({
      getJobsByCompany: function (company_id) {
        var query = itemsRef.orderByChild("company_id").equalTo(company_id);
        return $firebaseArray(query);
      },
      getJobsBySkill: function (skill) {

      },
      getJobsBySalary: function (min, max) {

      }
    });

    return {
      "$array": Jobs(itemsRef),
      "$object": function (objectId) {
        return $firebaseObject(itemsRef.child(objectId));
      }
    };
  }

})();
