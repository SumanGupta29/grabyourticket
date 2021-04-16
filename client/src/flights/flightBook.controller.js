(function () {
    'use strict';

    angular.module('GrabYourTicketApp')
        .controller('FlightBookController', FlightBookController);

    FlightBookController.$inject = ['FlightService', '$state'];
    function FlightBookController(FlightService, $state) {
        var flightBookCtrl = this;
        flightBookCtrl.fullName = sessionStorage.getItem('fullName');
        flightBookCtrl.email = sessionStorage.getItem('user');
        var { sourceName, destinationName, date, airlineName } = FlightService.getSourceAndDestinationName();
        flightBookCtrl.sourceName = sourceName;
        flightBookCtrl.destinationName = destinationName;
        flightBookCtrl.date = date;
        flightBookCtrl.airlineName = airlineName;

        flightBookCtrl.departureTime = '';
        flightBookCtrl.class = '';
        flightBookCtrl.adult = '';
        flightBookCtrl.children = '';
        flightBookCtrl.infant = '';
        flightBookCtrl.message = '';
        flightBookCtrl.phoneNo = '';

        flightBookCtrl.book = function () {
            var response = FlightService.bookFlightTicket(flightBookCtrl.departureTime, flightBookCtrl.class, flightBookCtrl.adult, flightBookCtrl.children, flightBookCtrl.infant, flightBookCtrl.message, flightBookCtrl.phoneNo, flightBookCtrl.sourceName, flightBookCtrl.destinationName, flightBookCtrl.airlineName, flightBookCtrl.date)
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