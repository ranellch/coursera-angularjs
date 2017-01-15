(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/restaurantmenu/templates/categories.template.html',
  bindings: {
    allCategories: '<'
  }
});

})();
