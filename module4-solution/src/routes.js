(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurantmenu/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    template: '<categories-list all-categories="categoriesList.allCategories"></categories-list>',
    controller: 'CategoriesController as categoriesList',
    resolve: {
        allCategories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
            }]
        }
    })

  // Items page
  .state('items', {
    url: '/items/{categoryShortName}',
    template: '<items-list category = "itemsList.category" items="itemsList.items"></items-list>',
    controller: 'ItemsController as itemsList',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        });
    }

})();
