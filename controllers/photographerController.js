const Photographer = require("../models/photographerModel");

exports.createPhotographer = (req, res, next)=>{
    var newPhotographer = new Photographer(req.body);
    newPhotographer.save(function (error) {
        if (error){
            console.log(error);
            res.status(500).json(error);
        }
        else{
            console.log("Photographer ADDED");
            res.json("Photographer ADDED");
        }
    });
};

exports.getPhotographers = (req, res, next)=>{

    Photographer.find({}, function(err, result){
        if (err){
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    });

};