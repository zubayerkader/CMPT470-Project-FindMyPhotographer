var express = require('express');
var router = express.Router();
const ReviewController = require("../controllers/reviewController");

router.post('/', ReviewController.createReview);
// router.post('/:id', BookingController.updateBookingByID);
// router.get('/', BookingController.getBookings);
router.get('/photographer/:id', ReviewController.getReviewByPhotographerID);
// router.delete('/:id', BookingController.deleteBookingByID);

module.exports = router;