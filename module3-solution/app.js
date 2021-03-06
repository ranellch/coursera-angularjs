(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective);

function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundList.html',
      scope: {
        items: '<',
        noMatch: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'MenuSearch',
      bindToController: true
    };
    return ddo;
}

function FoundItemsDirectiveController() {
    var MenuSearch = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var MenuSearch = this;

    MenuSearch.searchTerm = "";

    MenuSearch.found = [];
    MenuSearch.noMatch = false;

    MenuSearch.getMatchedMenuItems = function () {
        if (MenuSearch.searchTerm == "") {
            MenuSearch.noMatch = true;
            MenuSearch.found = [];
        }
        else {
            var promise = MenuSearchService.getMatchedMenuItems(MenuSearch.searchTerm);
            promise.then(function (data){
                MenuSearch.found = data;
                if (data.length == 0) {
                    MenuSearch.noMatch = true;
                }
                else {
                    MenuSearch.noMatch = false;
                }
            });
        }
    };

    MenuSearch.removeItem = function (itemIndex) {
        MenuSearch.found.splice(itemIndex,1);
    };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        }).then(function (response) {
            var foundItems = [];
            for (var i = 0; i < response.data.menu_items.length; i++){
                if (response.data.menu_items[i].description.toLowerCase().includes(searchTerm.toLowerCase())){
                    foundItems.push(response.data.menu_items[i]);
                }
            }
            return foundItems;
        });
    }
}

})();
