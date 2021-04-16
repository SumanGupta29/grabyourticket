(function () {
    'use strict';

    angular.module('GrabYourTicketApp')
        .controller('TrainBookController', TrainBookController);

    TrainBookController.$inject = ['TrainService', '$state'];
    function TrainBookController(TrainService, $state) {
        var trainBookCtrl = this;
        trainBookCtrl.fullName = sessionStorage.getItem('fullName');
        trainBookCtrl.email = sessionStorage.getItem('user');
        var { sourceName, destinationName, date, departTime, trainName, trainNumber } = TrainService.getSourceAndDestinationName();
        trainBookCtrl.sourceName = sourceName;
        trainBookCtrl.destinationName = destinationName;
        trainBookCtrl.date = date;
        trainBookCtrl.departTime = departTime;
        trainBookCtrl.trainName = trainName;
        trainBookCtrl.trainNumber = trainNumber;

        trainBookCtrl.class = '';
        trainBookCtrl.adult = '';
        trainBookCtrl.children = '';
        trainBookCtrl.infant = '';
        trainBookCtrl.phoneNo = '';

        trainBookCtrl.book = function () {
            var response = TrainService.bookTrainTicket(trainBookCtrl.trainName, trainBookCtrl.trainNumber, trainBookCtrl.sourceName, trainBookCtrl.destinationName, trainBookCtrl.departTime, trainBookCtrl.date, trainBookCtrl.class, trainBookCtrl.adult, trainBookCtrl.children, trainBookCtrl.infant, trainBookCtrl.phoneNo)
            response.then(result => {
                console.log(result);
                $state.go('home');
                swal("Ticket booked Successfully!", "Click the Below Button!", "success");
            })
                .catch(err => {
                    console.log(err);
                });
        }
    }
})();