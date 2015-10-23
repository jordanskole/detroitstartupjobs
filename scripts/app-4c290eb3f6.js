!function(){"use strict";angular.module("detroitstartupjobs",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ngMaterial","toastr"])}(),function(){"use strict";function t(t){var o=new Firebase(FIREBASE_URL+"/jobs");return t(o)}angular.module("detroitstartupjobs").factory("Jobs",t),t.$inject=["$firebaseObject"]}(),function(){"use strict";function t(t){var o=this;o.toggleNav=function(){t.log("Clicked the menu!")},o.goToSkill=function(o){t.log("Clicked on Skill:"),t.log(o)},o.goToJob=function(){t.log("Clicked on Job:")},o.jobs=[{title:"Campus Director",created_on:"Friday",salary:88e3,employer:"The Iron Yard",location:"Detroit",skills:["JavaScript","iOS","Android","Adobe Illustrator"],description:"A position opening The Iron Yard location in Detroit, and working with students and community partners."},{title:"Post Production Coordinator",created_on:"Wed",salary:3e4,employer:"Heather Read Photography & Design",location:"Royal Oak",skills:["Adobe Photoshop"],description:"You will be responsible for editing Heather's photos during post-production, and working with Adobe Photoshop actions."},{title:"Junior Front End Developer",created_on:"Wed",salary:45e3,employer:"Gas Station TV",location:"Detroit",skills:["JavaScript","HTML","CSS"],description:"A great position to grow as into a robust front-end developer."}]}angular.module("detroitstartupjobs").controller("HomeController",t),t.$inject=["$log"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("detroitstartupjobs").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,o){t.state("home",{url:"/",templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"home"}),o.otherwise("/")}angular.module("detroitstartupjobs").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("detroitstartupjobs").constant("malarkey",malarkey).constant("moment",moment).constant("FIREBASE_URL","https://detroitstartupjobs.firebaseio.com")}(),function(){"use strict";function t(t,o,e){t.debugEnabled(!0),o.allowHtml=!0,o.timeOut=3e3,o.positionClass="toast-top-right",o.preventDuplicates=!0,o.progressBar=!0,e.theme("default").primaryPalette("cyan").accentPalette("teal").backgroundPalette("grey")}angular.module("detroitstartupjobs").config(t),t.$inject=["$logProvider","toastrConfig","$mdThemingProvider"]}(),angular.module("detroitstartupjobs").run(["$templateCache",function(t){t.put("app/home/home.html",'<md-toolbar class="md-whiteframe-z3"><div class="md-toolbar-tools"><md-button ng-click="home.toggleNav()" class="md-icon-button" aria-label="Settings"><md-icon md-font-library="material-icons">menu</md-icon></md-button><h2><span>Detroit Startup Jobs</span></h2><span flex=""></span><md-button class="md-icon-button" aria-label="Saved Jobs"><md-icon md-font-library="material-icons">bookmark</md-icon></md-button><md-button class="md-icon-button" aria-label="Search"><md-icon md-font-library="material-icons">search</md-icon></md-button><md-button class="md-icon-button" aria-label="Notifications"><md-icon md-font-library="material-icons">add_alert</md-icon></md-button><md-button class="md-icon-button" aria-label="Account"><md-icon md-font-library="material-icons">account_circle</md-icon></md-button></div></md-toolbar><div layout="row"><div flex=""></div><md-content flex="80" layout="column"><md-subheader>New Job Postings:</md-subheader><md-card><md-list class="md-no-style" layout-fill="" style="padding: 0px;"><md-list-item ng-repeat="job in home.jobs" class="md-3-line" ng-click="goToJob()" layout-fill=""><md-icon md-font-library="material-icons" ng-class="md-avatar-icon">favorite</md-icon><div class="md-list-item-text"><h3>{{ job.title }}</h3><p>{{ job.description }}</p><md-chips readonly="true" ng-model="job.skills" ng-class="md-primary"></md-chips></div><md-divider></md-divider></md-list-item></md-list></md-card></md-content><div flex=""></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-4c290eb3f6.js.map