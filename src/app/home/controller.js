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

    vm.goToSkill = function (chip) {
      console.log('Clicked on Skill:');
      console.log(chip);
    }

    vm.jobs = [
      {
        "title": "Campus Director",
        "created_on": "Friday",
        "salary": 88000,
        "employer": "The Iron Yard",
        "location": "Detroit",
        "skills": ["JavaScript", "iOS", "Android", "Adobe Illustrator"],
        "description": "A position opening The Iron Yard location in Detroit, and working with students and community partners."
      },
      {
        "title": "Post Production Coordinator",
        "created_on": "Wed",
        "salary": 30000,
        "employer": "Heather Read Photography & Design",
        "location": "Royal Oak",
        "skills": ["Adobe Photoshop"],
        "description": "You will be responsible for editing Heather's photos during post-production, and working with Adobe Photoshop actions."
      },
      {
        "title": "Junior Front End Developer",
        "created_on": "Wed",
        "salary": 45000,
        "employer": "Gas Station TV",
        "location": "Detroit",
        "skills": ["JavaScript", "HTML", "CSS"],
        "description": "A great position to grow as into a robust front-end developer."
      }
    ]
  }

})();
