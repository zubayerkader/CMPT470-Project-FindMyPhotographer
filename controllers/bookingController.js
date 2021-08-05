const Booking = require("../models/bookingModel");

// {
//     "title": "Demo Job 2!!",
//     "description": "Demo Job Desc",
//     "client": "60f5b60e677fb859444c4eae",
//     "status": "Pending",
//     "client_offer": 200,

//     "photographer": "60f5b2a6c9554f57cd249d8d",
//     "photographer_ask" : 400,
//     "tags": [ "weddings"]
// }
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
