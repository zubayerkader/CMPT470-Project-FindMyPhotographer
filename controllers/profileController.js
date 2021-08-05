const Booking = require("../models/bookingModel");
const Client = require("../models/clientModel");
const Photographer = require("../models/photographerModel");


// localhost:4000/profiles/photographer/60f5b295c9554f57cd249d8b
exports.getProfile = (req, res, next)=>{
    let id = req.params.id;
    let type = req.params.userType;
    console.log(type)
    console.log(id)

    let querySchema;
    let returnData = {
        // personalInfo: {},
        // bookingInfo: {},
    }

    if (type === "photographer"){
        querySchema = Photographer;
    }
    else if (type === "client") {
        querySchema = Client;
    }
    else{
        res.status(500).json(`Not a valid user type: ${type}`);
        return
    }

    querySchema.findById(id, function(err, result){
        if (err){
            res.status(500).json(err);
            return;
        }
        else{
            returnData.personalInfo = result;
            // res.json(returnData);
        }
    }).then( ()=>{
        console.log(type)
        console.log(id)
        Booking.find({[type]: id}, function(err, result){
            if (err){
                res.status(500).json(err);
                return;
            }
            else{
                returnData.bookingInfo = result;
                res.json(returnData);
            }
        });
        
    })
};