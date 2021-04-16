(function () {
    'use strict';

    angular.module('GrabYourTicketApp')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider'];
    function routesConfig($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/home/home.template.html'
            })
            .state('flight-search', {
                url: '/flight-search',
                templateUrl: 'src/flights/flight-search.template.html',
                controller: 'FlightController as flightCtrl'
            })
            .state('flight-search.get-flights', {
                url: '/get-flights',
                templateUrl: 'src/flights/search-result.template.html',
                controller: 'GetFlightController as getFlightCtrl'
            })
            .state('train-search', {
                url: '/train-search',
                templateUrl: 'src/trains/train-search.template.html',
                controller: 'TrainController as trainCtrl'
            })
            .state('train-search.get-trains', {
                url: '/get-trains',
                templateUrl: 'src/trains/search-result.template.html',
                controller: 'GetTrainController as getTrainCtrl'
            })
            .state('bus-search', {
                url: '/bus-search',
                templateUrl: 'src/bus/bus-search.template.html'
            })
            .state('hotel-search', {
                url: '/hotel-search',
                templateUrl: 'src/hotels/hotel-search.template.html',
                controller: 'HotelController as hotelCtrl'
            })
            .state('hotel-search.get-hotels', {
                url: '/get-hotels',
                templateUrl: 'src/hotels/hotel-search-result.template.html',
                controller: 'GetHotelController as getHotelCtrl'
            })
            .state('flight-book-form', {
                url: '/flight-booking-form',
                templateUrl: 'src/flights/flight-booking-form.template.html',
                controller: 'FlightBookController as flightBookCtrl'
            })
            .state('train-book-form', {
                url: '/train-book-form',
                templateUrl: 'src/trains/booking-form.template.html',
                controller: 'TrainBookController as trainBookCtrl'
            })
            .state('hotel-book-form', {
                url: '/hotel-booking-form',
                templateUrl: 'src/hotels/hotel-booking-form.template.html',
                controller: 'HotelBookController as hotelBookCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'src/authentication/login.template.html',
                controller: 'LoginController as loginCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'src/authentication/signup.template.html',
                controller: 'SignupController as signupCtrl',
            })
            .state('booking-history', {
                url: '/booking-history',
                templateUrl: 'src/history/booking-history.template.html',
                controller: 'HistoryController as historyCtrl'
            });
    }
})();