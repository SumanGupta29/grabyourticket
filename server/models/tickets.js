const mongoose = require("mongoose");
const user = require("./users");

TicketSchema = new mongoose.Schema({
  Booking_type: String,
  Train_name: String,
  Train_number: String,
  from: String,
  to: String,
  Departure_date: String,
  Departure_time: String,
  Class: String,
  Full_name: String,
  Phone_number: String,
  email: String,
  Hotel_name: String,
  Arrival_date: String,
  Arrival_time: String,
  Room_type: String,
  Airline_name: String,
  booking_type: {
    type: String,
    enum: ['Flight', 'Hotel', 'Train'],
  },
  no_of_adults: String,
  no_of_childrens: String,
  no_of_infants: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user
  }
})

module.exports = mongoose.model("Ticket", TicketSchema)