(function() {
  'use strict';

  angular
    .module('detroitstartupjobs')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController ($mdSidenav) {

    var vm = this;

    vm.toggleNav = function () {
      console.log('Clicked the menu!');
    }

    vm.jobs = [
      {
        "title": "Campus Director",
        "created_on": "Friday",
        "salary": 88000,
        "employer": "The Iron Yard",
        "location": "Detroit",
        "skills": ["JavaScript", "iOS", "Android", "Adobe Illustrator"]
      },
      {
        "title": "Post Production Coordinator",
        "created_on": "Wed",
        "salary": 30000,
        "employer": "Heather Read Photography & Design",
        "location": "Royal Oak",
        "skills": ["Adobe Photoshop"]
      }
    ]
  }

})();
