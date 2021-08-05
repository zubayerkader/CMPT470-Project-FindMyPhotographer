const Review = require("../models/reviewModel");

exports.createReview = (req, res, next)=>{
    var newReview = new Review(req.body);
    newReview.save(function (error) {
        if (error){
            console.log(error);
            res.status(500).json(error);
        }
        else{
            console.log("Review ADDED");
            res.json("Review ADDED");
        }
    });
};




exports.getReviewByPhotographerID = (req, res, next)=>{
    let id = req.params.id;
    console.log(id)

    Review.find({photographer: id}, function(err, result){
        if (err){
            res.status(500).json(err);
            return;
        }
        else{
            res.json(result);
        }
    })}