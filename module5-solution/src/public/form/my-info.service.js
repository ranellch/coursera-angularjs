(function () {

angular.module('public')
.service('MyInfoService', MyInfoService);


function MyInfoService() {
    var service = this;
    service.info = null;
    service.menuItem = null;

    service.addUserInfo = function (userInfo,menuItem) {
            service.info = userInfo;
            service.menuItem  = menuItem;
        }

    service.getStoredInfo = function () {
            return service.info;
        }

    service.getFavoriteItem = function () {
            return service.menuItem;
        }
    }
})();
