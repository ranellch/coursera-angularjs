(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo','menuItem', 'ApiPath'];
function MyInfoController(userInfo,menuItem,ApiPath) {
  var infoCtrl = this;
  infoCtrl.basePath = ApiPath;
  infoCtrl.userInfo = userInfo;
  infoCtrl.menuItem = menuItem;
}


})();
