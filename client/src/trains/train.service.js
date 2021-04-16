(function () {
    'use strict';

    angular.module('GrabYourTicketApp')
        .service('TrainService', TrainService);

    TrainService.$inject = ['$http', 'ServerUrl'];
    function TrainService($http, ServerUrl) {
        var service = this;
        service.getSearchedTrains = {};
        service.sourceName = '';
        service.destinationName = '';
        service.date = '';
        service.departTime = '';
        service.trainName = '';
        service.trainNumber = '';
        service.searchTrain = function (searchTrain, sourceTrainCode, destinationTrainCode, date, sourceName, destinationName) {
            service.sourceName = sourceName;
            service.destinationName = destinationName;
            service.date = date;
            const data = {
                searchTrain,
                sourceTrainCode,
                destinationTrainCode,
                date
            };
            return $http.post(ServerUrl + '/search-train', data)
                .then(response => {
                    service.getSearchedTrains = response.data;
                    return response.data
                })
        }

        service.getMatchedTrains = function () {
            return service.getSearchedTrains;
        }

        service.addTrainDetails = function (departTime, trainName, trainNumber) {
            service.departTime = departTime;
            service.trainName = trainName;
            service.trainNumber = trainNumber;
            return true;
        }

        service.getSourceAndDestinationName = function () {
            return { sourceName: service.sourceName, destinationName: service.destinationName, date: service.date, departTime: service.departTime, trainName: service.trainName, trainNumber: service.trainNumber }
        }

        service.bookTrainTicket = function (trainName, trainNumber, sourceName, destinationName, departTime, date, classes, adult, children, infant, phoneNo) {
            var data = {
                trainName: trainName,
                trainNumber: trainNumber,
                sourceName: sourceName,
                destinationName: destinationName,
                date: date,
                departTime: departTime,
                class: classes,
                adult: adult,
                children: children,
                infant: infant,
                phoneNo: phoneNo

            };
            return $http.post(ServerUrl + '/book_train_ticket', data)
                .then(response => {
                    // service.getSearchedFlights = response.data.flightData;
                    return response.data
                })
        }
    }
})();