const Photographer = require("../models/PhotographerModel");


exports.createPhotographer = (req, res, next)=>{
    var newPhotographer = new Photographer(req.body)
    newPhotographer.save(function (error) {
        if (error){
            console.log(error);
            res.json(error);
        }
        else{
            console.log("Photographer ADDED");
            res.json("Photographer ADDED")

        }
        
    })

}

exports.getPhotographers = (req, res, next)=>{
    // var allPhotographers = new Photographer();
    // Photographer.find({}).then((data)=> {
    //     console.log('Found documents =>', data)
    //     res.json(data);
    //     } 
    // );

    Photographer.find({}, function(err, result){
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
    
    // Photographer.find({}).toArray(function(err, result){
    //     if (err){
    //         console.log(`ERROR: ${err}`);
    //     }
    //     else{
    //         console.log('Found documents =>', result)
    //     }
    // });

}