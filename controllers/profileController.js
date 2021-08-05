const Booking = require("../models/bookingModel");
const Client = require("../models/clientModel");
const Photographer = require("../models/photographerModel");
const Review = require("../models/reviewModel");


// http://localhost:4000/profiles/photographer/60f5b295c9554f57cd249d8b
// http://localhost:5000/profiles/client/60f5b60e677fb859444c4eae

exports.getClientProfile = (req, res, next)=>{
    let id = req.params.id;
    console.log(id)

    let returnData = {
        personalInfo: {},
        bookingInfo: {},
    }
    
    Client.findById(id)
    .then((personalInfo)=>{
        returnData.personalInfo = personalInfo;
        return Booking.find({client: id});
    })
    .then((bookings)=>{
        returnData.bookingInfo = bookings;
        return res.json(returnData);
    })
    .catch((err)=>{
        if (!err.statusCode) err.statusCode = 500;
          next(err);
    });
};


exports.getPhotographerProfile = (req, res, next)=>{
    let id = req.params.id;
    console.log(id)

    let returnData = {
        personalInfo: {},
        bookingInfo: {},
        reviewInfo: {},
    }
    
    Photographer.findById(id)
    .then((personalInfo)=>{
        returnData.personalInfo = personalInfo;
        return Booking.find({photographer: id});
    })
    .then((bookings)=>{
        returnData.bookingInfo = bookings;
        return Review.find({photographer: id});
    })
    .then((reviews)=>{
        returnData.reviewInfo = reviews;
        return res.json(returnData);
    })
    .catch((err)=>{
        if (!err.statusCode) err.statusCode = 500;
          next(err);
    });


};