!function(){"use strict";angular.module("detroitstartupjobs",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ngMaterial","toastr","firebase"])}(),function(){"use strict";function e(e,t,o){var n=new Firebase(e+"/jobs"),a=t.$extend({filterJobsByCompany:function(e){},filterJobsBySkill:function(e){},filterJobsBySalary:function(e,t){}});return{$array:a(n),$object:o(n)}}angular.module("detroitstartupjobs").factory("Jobs",e),e.$inject=["FIREBASE_URL","$firebaseArray","$firebaseObject"]}(),function(){"use strict";function e(e,t,o,n,a,i,l){var d=this;d.jobs=i.$array,d.user=l,e.log(d.user),d.goToSkill=function(t){e.log("Clicked on Skill:"),e.log(t)},d.goToJob=function(){e.log("Clicked on Job:")},d.go=function(e,o){t.go(e,o)},d.createJob=function(e){o.show({controller:"CreateDialogController",controllerAs:"dialog",templateUrl:"app/jobs/create.html",parent:angular.element(n.body),targetEvent:e,clickOutsideToClose:!0}).then(function(e){var t={created_on:moment().format()};i.$array.$add(_.merge(e,t)),a.show(a.simple().content("Job Posted!").position("bottom right"))})}}angular.module("detroitstartupjobs").controller("JobsController",e),e.$inject=["$log","$state","$mdDialog","$document","$mdToast","Jobs","CurrentAuth"]}(),function(){"use strict";function e(e,t){var o=this;o.job={salary:45,skills:[]},o.cancel=function(){t.cancel()},o.save=function(){t.hide(o.job)}}angular.module("detroitstartupjobs").controller("CreateDialogController",e),e.$inject=["$log","$mdDialog"]}(),function(){"use strict";function e(e,t,o,n,a,i,l,d){var r=this;r.loading=!1,"login"===a.action?r.tabIndex=0:"register"===a.action?r.tabIndex=1:"social"===a.action?r.tabIndex=2:r.tabIndex=0,e.$watch("account.tabIndex",function(e,t){0==e&&0!=t?n.transitionTo("account.login",{action:"login"},{inherit:!1,notify:!1,reload:!1}):1==e&&1!=t?n.transitionTo("account.login",{action:"register"},{inherit:!1,notify:!1,reload:!1}):2==e&&2!=t&&n.transitionTo("account.login",{action:"social"},{inherit:!1,notify:!1,reload:!1})}),r.loginWithPassword=function(){r.loading=!0,l.$authWithPassword(r.user).then(function(){r.loading=!1,n.go("jobs")})["catch"](function(e){t.error("Error: "+e)})},r.createUser=function(){r.loading=!0,l.$createUser({email:r.newUser.email,password:r.newUser.password}).then(function(e){return t.log("Created user with uid: "+e.uid),t.log(e),d.$new(e.uid,{email:r.newUser.email,complete:0})}).then(function(e){return t.log(e),l.$authWithPassword({email:r.newUser.email,password:r.newUser.password})}).then(function(e){t.log("Logged in with uid: "+e.uid),r.loading=!1,n.go("account.update",{uid:e.uid})})["catch"](function(e){t.error("Error: "+e),t.log(e),i.show(i.alert().clickOutsideToClose(!0).title("Oh no!").content(e.message||"Something went wrong. I have alerted the team. Please try again.").ariaLabel("Error Dialog").ok("Got it!")).then(function(){r.loading=!1})})}}angular.module("detroitstartupjobs").controller("LoginController",e),e.$inject=["$scope","$log","$window","$state","$stateParams","$mdDialog","Auth","Accounts"]}(),function(){"use strict";function e(e,t){var o=new Firebase(t);return e(o)}angular.module("detroitstartupjobs").factory("Auth",e),e.$inject=["$firebaseAuth","FIREBASE_URL"]}(),function(){"use strict";function e(e,t,o,n,a){var i=new Firebase(e+"/accounts"),l=o.$extend({});return{$array:l(i),$object:function(e){return n(i.child(e))},$new:function(e,t){i.child(e).set(t)}}}angular.module("detroitstartupjobs").factory("Accounts",e),e.$inject=["FIREBASE_URL","$firebaseAuth","$firebaseArray","$firebaseObject","$log"]}(),function(){"use strict";function e(e,t,o,n){var a=this;n.$object(o.uid).$bindTo(t,"profile").then(function(){a.birthday=new Date(t.profile.birthday)}),a.birthdateChange=function(){t.profile.birthday=a.birthday.toString()},a.states="AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ").map(function(e){return{abbrev:e}})}angular.module("detroitstartupjobs").controller("AccountController",e),e.$inject=["$log","$scope","$stateParams","Accounts"]}(),function(){"use strict";function e(e,t,o){var n=new Object;e.debug("runBlock end"),n.on=t.$on(),n.on("$stateChangeError",function(e,t,n,a,i,l,d){e.error(d),"AUTH_REQUIRED"===d&&o.go("login")})}angular.module("detroitstartupjobs").run(e),e.$inject=["$log","$rootScope","$state"]}(),function(){"use strict";function e(e,t){e.state("account",{url:"/account","abstract":!0,template:'<ui-view flex layout="column" />'}).state("account.login",{url:"/login?action&redirect",templateUrl:"app/account/login.html",controller:"LoginController",controllerAs:"account"}).state("account.update",{url:"/:uid",templateUrl:"app/account/update.html",controller:"AccountController",controllerAs:"account"}).state("account.logout",{url:"/logout?redirect",controller:["Auth","$state","$stateParams",function(e,t,o){e.$unauth(),t.go(o.redirect||"jobs")}],controllerAs:"logout"}).state("jobs",{url:"/jobs",templateUrl:"app/jobs/index.html",controller:"JobsController",controllerAs:"home",resolve:{CurrentAuth:["Auth",function(e){return e.$waitForAuth()}]}}),t.otherwise("/jobs")}angular.module("detroitstartupjobs").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("detroitstartupjobs").constant("malarkey",malarkey).constant("moment",moment).constant("_",_).constant("FIREBASE_URL","https://detroitstartupjobs.firebaseio.com")}(),function(){"use strict";function e(e,t,o){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0,o.theme("default").primaryPalette("teal").accentPalette("cyan").backgroundPalette("grey"),o.theme("alt-background","default").backgroundPalette("blue-grey"),o.theme("grey").primaryPalette("grey")}angular.module("detroitstartupjobs").config(e),e.$inject=["$logProvider","toastrConfig","$mdThemingProvider"]}(),angular.module("detroitstartupjobs").run(["$templateCache",function(e){e.put("app/account/login.html",'<md-content flex="" layout-fill="" layout="row" layout-align="center center" ng-cloak="" md-theme="alt-background" class="md-background"><md-card flex="33" flex-sm="90" flex-md="66" layout="column" layout-align="center" layout-padding="" md-theme="default"><md-tabs md-dynamic-height="" md-border-bottom="" md-stretch-tabs="always" md-selected="account.tabIndex"><md-tab label="Login"><div layout="row" layout-align="center" layout-padding="" style="text-align: center;"><md-button class="md-fab md-primary"><md-icon>lock_open</md-icon></md-button></div><div layout="row" layout-align="center" layout-padding="" style="text-align: center;"><h1 class="md-headline">Login</h1></div><div layout="row" layout-align="center"><md-input-container flex="80"><label>Email</label> <input type="email" ng-model="account.user.email"></md-input-container></div><div layout="row" layout-align="center"><md-input-container flex="80"><label>Password</label> <input type="password" ng-model="account.user.password"></md-input-container></div><div layout="row" layout-align="center"><md-button flex="80" class="md-primary md-raised" ng-click="account.loginWithPassword()">Login</md-button></div></md-tab><md-tab label="Register"><div layout="row" layout-align="center" layout-padding="" style="text-align: center;"><md-button class="md-fab md-primary"><md-icon>person_add</md-icon></md-button></div><div layout="row" layout-align="center" layout-padding="" style="text-align: center;"><h1 class="md-headline">Register</h1></div><form name="registerForm"><div layout="row" layout-align="center"><md-input-container flex="80" placeholder="jordan@theironyard.com"><label>Email</label> <input type="email" ng-model="account.newUser.email" name="email" required=""><div ng-messages="registerForm.email.$error" ng-show="registerForm.email.$dirty"><div ng-message="required">Email is a required field</div><div ng-message="email">This isn\'t a valid email address</div></div></md-input-container></div><div layout="row" layout-align="center"><md-input-container flex="80"><label>Password</label> <input type="password" name="password" ng-model="account.newUser.password" minlength="7" required=""><div ng-messages="registerForm.password.$error" ng-show="registerForm.password.$dirty"><div ng-message="required">A password is required</div><div ng-message="minlength">Your password needs to be at least 7 characters long</div></div></md-input-container></div><div layout="row" layout-align="center"><md-input-container flex="80"><label>Confirm Password</label> <input type="password" name="passwordConfirm" ng-model="account.newUser.passwordConfirm" required="" ng-pattern="{{ user.password }}"><div ng-messages="registerForm.passwordConfirm.$error" ng-show="registerForm.passwordConfirm.$dirty"><div ng-message="pattern">Your passwords must match</div><div ng-message="required">Please confirm your password</div></div></md-input-container></div><div layout="row" layout-align="center"><md-button flex="80" ng-disabled="!registerForm.$valid" class="md-primary md-raised" ng-click="account.createUser()">Submit</md-button></div></form></md-tab><md-tab label="Social"><div layout="row" layout-align="center" layout-padding="" style="text-align: center;"><md-button class="md-fab md-primary"><md-icon>security</md-icon></md-button></div><div layout="row" layout-align="center" layout-padding="" style="text-align: center;"><h1 class="md-headline">Login With OAuth</h1></div><div layout="row" layout-align="center"><md-button flex="80" class="md-primary md-raised"><md-icon>phonelink_lock</md-icon>Google</md-button></div><div layout="row" layout-align="center"><md-button flex="80" class="md-primary md-raised"><md-icon>phonelink_lock</md-icon>Facebook</md-button></div></md-tab></md-tabs><div style="min-height: 60px; text-align: center;"><p flex="">Return to <a ui-sref="jobs">Jobs Listings</a></p></div><md-progress-linear md-mode="indeterminate" ng-show="account.loading"></md-progress-linear></md-card></md-content>'),e.put("app/account/update.html",'<md-toolbar class="md-whiteframe-z3" ng-show="!showSearch"><div class="md-toolbar-tools"><md-button ng-click="home.toggleNav()" class="md-icon-button" aria-label="Settings"><md-icon>menu</md-icon></md-button><h2><a ui-sref="jobs">Detroit Startup Jobs</a></h2><span flex=""></span><md-button class="md-icon-button md-primary" aria-label="Search" ng-click="showSearch = !showSearch"><md-icon>search</md-icon></md-button><md-button class="md-icon-button" aria-label="Saved Jobs"><md-icon>bookmark</md-icon></md-button><md-button class="md-icon-button" aria-label="Notifications"><md-icon>notifications</md-icon></md-button><md-menu md-position-mode="target-right target"><md-button ng-click="$mdOpenMenu($event)" class="md-icon-button" aria-label="Open Account menu"><md-icon md-menu-origin="">account_circle</md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ui-sref="account.login({action: \'login\'})" class="md-primary" aria-label="Login to Account"><div layout="row"><p flex="">Login</p><md-icon md-menu-align-target="" style="margin: auto 3px auto 0;">lock_open</md-icon></div></md-button></md-menu-item><md-menu-item><md-button ui-sref="account.login({action: \'register\'})" class="md-primary" aria-label="Register an Account"><div layout="row"><p flex="">Register</p><md-icon style="margin: auto 3px auto 0;">person_add</md-icon></div></md-button></md-menu-item></md-menu-content></md-menu><md-button ng-click="home.createJob($event)" class="md-icon-button md-fab md-warn md-mini" aria-label="Add Job"><md-icon>add</md-icon></md-button></div></md-toolbar><md-toolbar class="md-hue-1 md-whiteframe-z3" ng-show="showSearch"><div class="md-toolbar-tools"><md-button ng-click="showSearch = !showSearch" aria-label="Back"><ng-md-icon icon="arrow_back"></ng-md-icon></md-button><h3 flex="10">Back</h3><md-input-container md-theme="input" flex=""><label>&nbsp;</label> <input ng-model="search.who" placeholder="enter search"></md-input-container><md-button aria-label="Search" ng-click="showSearch = !showSearch"><ng-md-icon icon="search"></ng-md-icon></md-button><md-button aria-label="Open Settings" ng-click="showListBottomSheet($event)"><ng-md-icon icon="more_vert"></ng-md-icon></md-button></div></md-toolbar><section layout="row" flex="" layout-align="center"><md-content flex-gt-md="80" layout="column"><div layout="row"><h1 class="md-display-1">Your personal info</h1></div><div layout="row"><div flex="40" layout-padding=""><p class="md-body-1">Manage this basic information — your name, email, and phone number — to help {{ account.employer ? \'applicants\' : \'employers\'}} find you and to quickly apply for jobs {{ account.employer ? \'you have posted\' : \'you like\'}}.</p><md-card><md-list-item md-no-ink=""><p>Are you an employer?</p><md-checkbox class="md-primary" ng-model="account.employer"></md-checkbox></md-list-item></md-card><p ng-show="profile.employer && !profile.approved" class="md-body-1">Awesome! We will verify your account information. If everything checks out, you should be able to post jobs soon!</p><p class="md-headline">Your profile is {{ profile.complete }}% complete</p><md-progress-linear md-mode="determinate" value="{{ profile.complete }}"></md-progress-linear></div><span flex="5"></span><md-card flex=""><md-subheader class="md-primary"><md-icon class="md-primary">account_circle</md-icon>Personal Information</md-subheader><md-progress-linear md-mode="determinate" value="20" flex=""></md-progress-linear><div layout="" layout-sm="column" layout-align="center"><md-input-container flex="95"><label>Email Address</label> <input type="email" ng-model="profile.email"></md-input-container></div><div layout="" layout-sm="column" layout-align="center"><md-input-container flex="45"><label>First name</label> <input ng-model="profile.first_name"></md-input-container><span flex="5"></span><md-input-container flex="45"><label>Last Name</label> <input ng-model="profile.last_name"></md-input-container></div><div layout="" layout-sm="column" layout-padding=""><md-datepicker ng-model="account.birthday" md-placeholder="Birthday" ng-change="account.birthdateChange()"></md-datepicker></div><md-divider></md-divider><md-subheader class="md-primary"><md-icon class="md-primary">phone</md-icon>Phone</md-subheader><md-progress-linear md-mode="determinate" value="20" flex=""></md-progress-linear><div layout="" layout-sm="column" layout-align="center"><md-input-container flex="95"><label>Mobile Phone</label> <input type="text" ng-model="profile.mobile"></md-input-container></div><div layout="" layout-sm="column" layout-align="center"><md-input-container flex="95"><label>Home Phone</label> <input type="text" ng-model="profile.phone"></md-input-container></div><md-divider></md-divider><div ng-show="!account.employer"><md-subheader class="md-primary"><md-icon class="md-primary">home</md-icon>Address</md-subheader><md-progress-linear md-mode="determinate" value="20" flex=""></md-progress-linear><div layout="" layout-sm="column" layout-align="center"><md-input-container flex="95"><label>Street</label> <input ng-model="profile.street"></md-input-container></div><div layout="" layout-sm="column" layout-align="center"><md-input-container flex="95"><label>Street 2</label> <input ng-model="profile.street2"></md-input-container></div><div layout="" layout-sm="column" layout-align="center"><md-input-container flex="40"><label>City</label> <input ng-model="profile.city"></md-input-container><md-input-container flex="30"><label>State</label><md-select ng-model="profile.state"><md-option ng-repeat="state in account.states" value="{{state.abbrev}}">{{state.abbrev}}</md-option></md-select></md-input-container><md-input-container flex="25"><label>Postal Code</label> <input name="postalCode" ng-model="profile.postal_code" placeholder="12345" required="" ng-pattern="/^[0-9]{5}$/" md-maxlength="5"><div ng-messages="profileForm.postalCode.$error" role="alert" multiple=""><div ng-message="required" class="my-message">You must supply a postal code.</div><div ng-message="pattern" class="my-message">That doesn\'t look like a valid postal code.</div><div ng-message="md-maxlength" class="my-message">Don\'t use the long version silly...we don\'t need to be that specific...</div></div></md-input-container></div><md-divider></md-divider></div><div ng-show="account.employer"><md-subheader class="md-primary"><md-icon class="md-primary">business</md-icon>Company Information</md-subheader><md-progress-linear md-mode="determinate" value="20" flex=""></md-progress-linear><div ng-show="profile.employer" layout="" layout-sm="column" layout-align="center"><md-input-container flex="95"><label>Company Name</label> <input ng-model="profile.company.name"></md-input-container></div><div ng-show="account.employer" layout="" layout-sm="column" layout-align="center"><md-input-container flex="95"><label>Company Website</label> <input ng-model="profile.company.street"></md-input-container></div><div ng-show="account.employer" layout="" layout-sm="column" layout-align="center"><md-input-container flex="95"><label>Street</label> <input ng-model="profile.company.street2"></md-input-container></div><div layout="" layout-sm="column" layout-align="center"><md-input-container flex="40"><label>City</label> <input ng-model="profile.company.city"></md-input-container><md-input-container flex="30"><label>State</label><md-select ng-model="profile.state"><md-option ng-repeat="state in account.states" value="{{state.abbrev}}">{{state.abbrev}}</md-option></md-select></md-input-container><md-input-container flex="25"><label>Postal Code</label> <input name="postalCode" ng-model="profile.company.postalCode" placeholder="12345" required="" ng-pattern="/^[0-9]{5}$/" md-maxlength="5"><div ng-messages="profileForm.postalCode.$error" role="alert" multiple=""><div ng-message="required" class="my-message">You must supply a postal code.</div><div ng-message="pattern" class="my-message">That doesn\'t look like a valid postal code.</div><div ng-message="md-maxlength" class="my-message">Don\'t use the long version silly...we don\'t need to be that specific...</div></div></md-input-container></div><md-divider></md-divider></div></md-card></div><div layout="row" layout-align="end" layout-padding="" md-theme="grey"><md-button layout="" class="md-primary" ui-sref="jobs">Back to Jobs Listings<md-icon>arrow_forward</md-icon></md-button></div><div layout="row" style="min-height: 140px;"><div flex=""></div></div></md-content></section>'),e.put("app/jobs/create.html",'<md-dialog aria-label="Mango (Fruit)" ng-cloak="" flex="50"><md-toolbar><div class="md-toolbar-tools"><h2>Add a Job Posting</h2><span flex=""></span><md-button class="md-icon-button" ng-click="dialog.cancel()"><md-icon md-font-library="material-icons" aria-label="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><div layout=""><md-input-container flex=""><label>Title</label> <input type="text" ng-model="dialog.job.title"></md-input-container></div><div layout=""><md-input-container flex=""><label>Location</label> <input type="text" ng-model="dialog.job.location"></md-input-container><md-input-container flex=""><label>Company</label> <input type="text" ng-model="job.company"></md-input-container></div><div layout=""><div flex="10" layout="" layout-align="center center"><span class="md-body-1">Salary:</span></div><md-slider flex="" min="30" max="120" ng-model="dialog.job.salary" aria-label="Salary" class="md-primary"></md-slider><div flex="10" layout="" layout-align="center center">{{ \'$\' + dialog.job.salary + \'k\' }}</div></div><div layout=""><div flex="10" layout="" layout-align="center center"><span class="md-body-1">Skills:</span></div><md-chips ng-model="dialog.job.skills" placeholder="+ Skill" secondary-placeholder="Add a Skill" flex=""></md-chips></div><md-input-container><label>Description</label> <textarea ng-model="dialog.job.description"></textarea></md-input-container></div></md-dialog-content><div class="md-actions" layout="row"><span flex=""></span><md-button ng-click="dialog.cancel()">Cancel</md-button><md-button ng-click="dialog.save()" style="margin-right:20px;">Save</md-button></div></md-dialog>'),e.put("app/jobs/index.html",'<md-toolbar class="md-whiteframe-z3" ng-show="!showSearch"><div class="md-toolbar-tools"><md-button ng-click="home.toggleNav()" class="md-icon-button" aria-label="Settings"><md-icon>menu</md-icon></md-button><h2><a ui-sref="jobs.index">Detroit Startup Jobs</a></h2><span flex=""></span><md-button class="md-icon-button" aria-label="Search" ng-click="showSearch = !showSearch"><md-icon>search</md-icon></md-button><md-button class="md-icon-button" aria-label="Saved Jobs"><md-icon>bookmark</md-icon></md-button><md-button class="md-icon-button" aria-label="Notifications"><md-icon>notifications</md-icon></md-button><md-menu md-position-mode="target-right target"><md-button aria-label="Open demo menu" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-menu-origin="">account_circle</md-icon></md-button><md-menu-content width="4"><md-menu-item ng-show="!home.user"><md-button ng-click="home.go(\'account.login\', {action: \'login\'})" class="md-primary"><div layout="row"><p flex="">Login</p><md-icon md-menu-align-target="" style="margin: auto 3px auto 0;">lock_open</md-icon></div></md-button></md-menu-item><md-menu-item ng-show="!home.user"><md-button ng-click="home.go(\'account.login\', {action: \'register\'})" class="md-primary"><div layout="row"><p flex="">Register</p><md-icon md-menu-align-target="" style="margin: auto 3px auto 0;">person_add</md-icon></div></md-button></md-menu-item><md-menu-item ng-show="home.user"><md-button ng-click="home.go(\'account.update\', {uid: home.user.uid })" class="md-primary"><div layout="row"><p flex="">My Profile</p><md-icon md-menu-align-target="" style="margin: auto 3px auto 0;">mode_edit</md-icon></div></md-button></md-menu-item><md-menu-item ng-show="home.user"><md-button ng-click="home.go(\'account.logout\')" class="md-primary"><div layout="row"><p flex="">Logout</p><md-icon md-menu-align-target="" style="margin: auto 3px auto 0;">exit_to_app</md-icon></div></md-button></md-menu-item></md-menu-content></md-menu><md-button ng-click="home.createJob($event)" class="md-icon-button md-fab md-warn md-mini" aria-label="Add Job"><md-icon>add</md-icon></md-button></div></md-toolbar><md-toolbar class="md-hue-1 md-whiteframe-z3" ng-show="showSearch"><div class="md-toolbar-tools"><md-button ng-click="showSearch = !showSearch" aria-label="Back"><ng-md-icon icon="arrow_back"></ng-md-icon></md-button><h3 flex="10">Back</h3><md-input-container md-theme="input" flex=""><label>&nbsp;</label> <input ng-model="search.who" placeholder="enter search"></md-input-container><md-button aria-label="Search" ng-click="showSearch = !showSearch"><ng-md-icon icon="search"></ng-md-icon></md-button><md-button aria-label="Open Settings" ng-click="showListBottomSheet($event)"><ng-md-icon icon="more_vert"></ng-md-icon></md-button></div></md-toolbar><section layout="row"><div flex=""></div><md-content flex="80" layout="column"><div ui-view=""><md-subheader>New Job Postings:</md-subheader><md-card><md-list class="md-no-style" layout-fill="" style="padding: 0px;"><md-list-item ng-repeat="job in home.jobs" class="md-3-line" ng-click="goToJob()"><div class="md-list-item-text"><h3>{{ job.title }}</h3><p><span ng-repeat="skill in job.skills" class="md-hue-1">{{ skill }}{{$last ? \'\' : \', \'}}</span></p><p>{{ job.description }}</p><md-icon class="md-secondary" ng-click="job.favorite = !job.favorite" ng-class="{\'md-warn\': job.favorite}">{{ job.favorite ? \'favorite\' : \'favorite_border\' }}</md-icon></div><md-divider></md-divider></md-list-item></md-list></md-card></div></md-content><div flex=""></div></section>')}]);
//# sourceMappingURL=../maps/scripts/app-00231a69a8.js.map