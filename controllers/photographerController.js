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

exports.getPhotographerByID = (req, res, next)=>{
    let id = req.params.id;
    console.log(id)
    Photographer.findById(id, function(err, result){
        if (err){
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    })
};

exports.deletePhotographerByID = (req, res, next)=>{
    let id = req.params.id;
    console.log(id)
    Photographer.findByIdAndRemove(id, function(err, result){
        //returns null if id not in db
        if (err){
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    })
};

exports.updatePhotographerByID = (req, res, next)=>{
    let id = req.params.id;
    let changes = req.body;
    console.log(id)
    Photographer.findByIdAndUpdate(id, changes, function(err, result){
        //returns null if id not in db
        if (err){
            res.status(500).json(err); 
        }
        else{
            res.json(result);
        }
    })
};