const Photographer = require("../models/PhotographerModel");

exports.createPhotographer = (req, res, next)=>{
    var newPhotographer = new Photographer(req.body);
    newPhotographer.save(function (error) {
        if (error){
            console.log(error);
            res.json(error);
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
            res.json(err);
        }
        else{
            res.json(result);
        }
    });

};