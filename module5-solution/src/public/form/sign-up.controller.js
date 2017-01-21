(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','MyInfoService']
function SignUpController(MenuService,MyInfoService) {
  var signUpCtrl = this;

  signUpCtrl.user = {firstname : '',
                     lastname : '',
                     phone : '',
                     email : '',
                     menuitem : ''};

  signUpCtrl.ShortNameInvalid = false;

  signUpCtrl.submit = function () {
    var promise = MenuService.getMenuItem(signUpCtrl.user.menuitem);
    promise.then(function (data){
        if (data) {
            signUpCtrl.ShortNameInvalid = false;
            MyInfoService.addUserInfo(signUpCtrl.user,data);
            signUpCtrl.completed = true;
        }
        else {
            signUpCtrl.ShortNameInvalid = true;
        }
    });
  };
}

})();
