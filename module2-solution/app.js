(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var ToBuyList = this;

    ToBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    ToBuyList.moveItem = function (itemIndex) {
        ShoppingListCheckOffService.moveItem(itemIndex);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var AlreadyBoughtList = this;

    AlreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;

    //Initial list of items to buy
    var tobuy = [{ name: "carrots", quantity: 2 },
                { name: "tomatoes", quantity: 4 },
                { name: "potatoes", quantity: 6 },
                { name: "onions", quantity: 2 },
                { name: "steaks", quantity: 4 }];

    //List of items bought
    var bought = [];

    service.moveItem = function (itemIndex) {
        bought.push(tobuy[itemIndex]);
        tobuy.splice(itemIndex,1);
    };

    service.getToBuyItems = function () {
      return tobuy;
    };

    service.getBoughtItems = function () {
      return bought;
    };
}

})();
