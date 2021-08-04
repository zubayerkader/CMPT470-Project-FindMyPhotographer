const Booking = require("../models/bookingModel");

exports.createBooking = (req, res, next)=>{
    console.log("reached bookingcontroller");
    var newBooking = new Booking(req.body);
    newBooking.save(function (error) {
        if (error){
            console.log(error);
            res.status(500).json(error);
        }
        else{
            console.log("Booking ADDED");
            res.json("Booking ADDED");
        }
    });
};

exports.getBookings = (req, res, next)=>{
    Booking.find({}, function(err, result){
        if (err){
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    });
};

// localhost:4000/bookings/6103e54246411f9e495e0d45
exports.getBookingByID = (req, res, next)=>{
    let id = req.params.id;
    console.log(id)
    Booking.findById(id, function(err, result){
        if (err){
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    })
};

exports.deleteBookingByID = (req, res, next)=>{
    let id = req.params.id;
    console.log(id)
    Booking.findByIdAndRemove(id, function(err, result){
        //returns null if id not in db
        if (err){
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    })
};

exports.updateBookingByID = (req, res, next)=>{
    let id = req.params.id;
    let changes = req.body;
    console.log(id)
    Booking.findByIdAndUpdate(id, changes, function(err, result){
        //returns null if id not in db
        if (err){
            res.status(500).json(err); 
        }
        else{
            res.json(result);
        }
    })
};
