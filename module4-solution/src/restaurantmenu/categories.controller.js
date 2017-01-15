(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService','allCategories'];
function CategoriesController(MenuDataService, allCategories) {
  var categoriesList = this;
  categoriesList.allCategories = allCategories;
}

})();
