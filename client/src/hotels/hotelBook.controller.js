(function () {
    'use strict';

    angular.module('GrabYourTicketApp')
        .controller('HotelBookController', HotelBookController);

    HotelBookController.$inject = ['HotelService', '$state'];
    function HotelBookController(HotelService, $state) {
        var hotelBookCtrl = this;
        var { hotelName, checkInDate, checkOutDate } = HotelService.getHotelDetails();
        hotelBookCtrl.fullName = sessionStorage.getItem('fullName');
        hotelBookCtrl.email = sessionStorage.getItem('user');
        hotelBookCtrl.hotelName = hotelName;
        hotelBookCtrl.checkInDate = checkInDate;
        hotelBookCtrl.checkOutDate = checkOutDate;

        hotelBookCtrl.checkInTime = '';
        hotelBookCtrl.checkOutTime = '';
        hotelBookCtrl.room = '';
        hotelBookCtrl.adult = '';
        hotelBookCtrl.children = '';
        hotelBookCtrl.infant = '';
        hotelBookCtrl.phoneNo = '';

        hotelBookCtrl.book = function () {
            var response = HotelService.bookHotel(hotelBookCtrl.hotelName, hotelBookCtrl.checkInDate, hotelBookCtrl.checkInTime, hotelBookCtrl.room, hotelBookCtrl.phoneNo)
            response.then(result => {
                console.log(result);
                $state.go('home');
                swal("Hotel booked Successfully!", "Click the Below Button!", "success");
            })
                .catch(err => {
                    console.log(err);
                });
        }
    }
})();