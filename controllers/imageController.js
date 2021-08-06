const Image = require("../models/imageModel");

exports.storeImage = (req, res, next) => {
    console.log("reached image controller", req.file);
    var newImage = new Image({
        photographer: req.body.photographer,
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    });
    newImage.save(function (error) {
        if (error){
            console.log(error);
            res.status(500).json(error);
        }
        else{
            console.log("Image ADDED");
            res.json("Image ADDED");
        }
    });
}

// url: /images/photographer/:id
exports.getAllImagesByPhotographerID = (req, res, next) => {
    let photographer_id = req.params.id;
    console.log(photographer_id)
    Client.find({photographer: photographer_id}, function(err, result){
        if (err){
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    });
}