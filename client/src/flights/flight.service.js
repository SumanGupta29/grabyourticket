(function () {
    'use strict';

    angular.module('GrabYourTicketApp')
        .service('FlightService', FlightService);

    FlightService.$inject = ['$http', 'ServerUrl'];
    function FlightService($http, ServerUrl) {
        var service = this;
        service.getSearchedFlights = {}
        service.sourceName = "";
        service.destinationName = "";
        service.date = "";
        service.departureTime = "";
        service.classes = "";
        service.adult = "";
        service.children = "";
        service.infant = "";
        service.message = "";
        service.phoneNo = "";

        service.searchFlightService = function (sourceCode, destinationCode, date, sourceName, destinationName) {
            service.sourceName = sourceName;
            service.destinationName = destinationName;
            service.date = date;
            service.airlineName
            var data = {
                sourceCode: sourceCode,
                destinationCode: destinationCode,
                date: date
            };
            return $http.post(ServerUrl + '/search_flight', data)
                .then(response => {
                    service.getSearchedFlights = response.data.flightData;
                    return response.data
                })
        }

        service.getAllFlights = function () {
            return service.getSearchedFlights
        }

        service.airlineName = function (airlineName) {
            service.airlineName = airlineName;
            return airlineName;
        }

        service.getSourceAndDestinationName = function () {
            return { sourceName: service.sourceName, destinationName: service.destinationName, date: service.date, airlineName: service.airlineName }
        }

        service.bookFlightTicket = function (departureTime, classes, adult, children, infant, message, phoneNo, sourceName, destinationName, airlineName, date) {
            console.log(airlineName);
            var data = {
                departureTime: departureTime,
                class: classes,
                adult: adult,
                children: children,
                infant: infant,
                message: message,
                phoneNo: phoneNo,
                sourceName: sourceName,
                destinationName: destinationName,
                airlineName: airlineName,
                date: date
            };
            return $http.post(ServerUrl + '/book_flight_ticket', data)
                .then(response => {
                    // service.getSearchedFlights = response.data.flightData;
                    return response.data
                })
        }
    }
})();