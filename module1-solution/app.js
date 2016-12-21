(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message = "";

  $scope.checkCount = function () {
    if ($scope.lunch) {
        if($scope.lunch.split(',').length <= 3) {
            $scope.message = "Enjoy!"
        } else {
            $scope.message = "Too much!"
        }
    }
    else{
        $scope.message = "Please enter data first"
    }
  };
}

})();
