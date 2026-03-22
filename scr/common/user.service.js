(function () {
"use strict";
angular.module('common')
.service('UserService', ['$http', 'ApiPath', function ($http, ApiPath) {
  var service = this;
  var _user = null;

  service.saveUser = function (user) { _user = user; };
  service.getUser = function () { return _user; };
  
  service.getMenuItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json');
  };
}]);
})();
