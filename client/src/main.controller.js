(function () {
    'use strict';

    angular.module('GrabYourTicketApp')
        .controller('MainController', MainController);

    MainController.$inject = ['AuthenticationService', '$rootScope', '$location'];
    function MainController(AuthenticationService, $rootScope, $location) {
        var mainCtrl = this;


        mainCtrl.logout = function () {
            var response = AuthenticationService.logout();
            response.then(data => {
                if (data.logout) {
                    delete sessionStorage.user;
                    delete sessionStorage.fullName;
                    $rootScope.user = undefined;
                    swal("LoggedOut Successfully!", "Click the Below Button!", "success");
                    $location.path('home');
                }
            })
        }



    }
})();