var express = require('express');
var router = express.Router();
const BookingController = require("../controllers/bookingController");

router.post('/', BookingController.createBooking);
router.post('/:id', BookingController.updateBookingByID);
router.get('/', BookingController.getBookings);
router.get('/:id', BookingController.getBookingByID);
router.delete('/:id', BookingController.deleteBookingByID);

module.exports = router;