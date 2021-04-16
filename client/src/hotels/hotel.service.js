(function () {
    'use strict';

    angular.module('GrabYourTicketApp')
        .service('HotelService', HotelService);

    HotelService.$inject = ['$http', 'ServerUrl'];
    function HotelService($http, ServerUrl) {
        var service = this;
        service.hotelName = '';
        service.checkInDate = '';
        service.checkOutDate = '';
        // service.getSearchedHotels = {}
        service.hotelSearchService = function (location, checkIn, checkOut) {
            service.checkInDate = checkIn;
            service.checkOutDate = checkOut;
            var data = {
                location: location,
                checkIn: checkIn,
                checkOut: checkOut
            };
            return $http.post(ServerUrl + '/search_hotel', data)
                .then(response => {
                    console.log(response.data);
                    service.getSearchedHotels = response.data.hotelData.data.body.searchResults.results;
                    return response.data
                })
        }

        service.getAllSearchedHotels = function () {
            return service.getSearchedHotels;
        }

        service.addHotelDetails = function (name) {
            service.hotelName = name;
            return true;
        }

        service.getHotelDetails = function () {
            return { hotelName: service.hotelName, checkInDate: service.checkInDate, checkOutDate: service.checkOutDate }
        }

        service.bookHotel = function (hotelName, checkInDate, checkInTime, room, phoneNo) {
            var data = {
                hotelName: hotelName,
                checkInDate: checkInDate,
                checkInTime: checkInTime,
                room: room,
                phoneNo: phoneNo

            };
            return $http.post(ServerUrl + '/book_hotel', data)
                .then(response => {
                    // service.getSearchedFlights = response.data.flightData;
                    return response.data
                })
        }
    }
})();