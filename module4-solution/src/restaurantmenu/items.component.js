(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/restaurantmenu/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
