(function () {
    'use strict';

    angular.module('GrabYourTicketApp')
        .controller('HistoryController', HistoryController);

    HistoryController.$inject = ['ServerUrl', '$http', '$rootScope']
    function HistoryController(ServerUrl, $http, $rootScope) {
        var historyCtrl = this;
        console.log($rootScope.user);
        if ($rootScope.user != null) {
            var res = $http.get(ServerUrl + '/history')
                .then(response => {
                    return response.data
                })
            res.then(res => {
                historyCtrl.data = res.result
                console.log(historyCtrl.data);
            })
                .catch(error => {
                    console.log(error);
                })
        }
    }
})();