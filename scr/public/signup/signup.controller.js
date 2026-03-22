(function () {
"use strict";
angular.module('public')
.controller('SignupController', ['UserService', function (UserService) {
  var $ctrl = this;
  $ctrl.user = {};

  $ctrl.submit = function () {
    UserService.getMenuItem($ctrl.user.favoriteDish).then(function (response) {
      $ctrl.success = true;
      $ctrl.error = false;
      $ctrl.user.dishDetails = response.data;
      UserService.saveUser($ctrl.user);
    }, function (error) {
      $ctrl.error = true;
      $ctrl.success = false;
    });
  };
}]);
})();
