(function () {
"use strict";
angular.module('public')
.controller('MyInfoController', ['UserService', 'ApiPath', function (UserService, ApiPath) {
  var $ctrl = this;
  $ctrl.user = UserService.getUser();
  $ctrl.basePath = ApiPath;
}]);
})();
