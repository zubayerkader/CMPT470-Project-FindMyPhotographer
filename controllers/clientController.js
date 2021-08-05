const Client = require("../models/clientModel");

exports.createClient = (req, res, next)=>{
    console.log("reached clientcontroller");
    var newClient = new Client(req.body);
    newClient.save(function (error) {
        if (error){
            console.log(error);
            res.status(500).json(error);
        }
        else{
            console.log("Client ADDED");
            res.json("Client ADDED");

        }
    });
};

exports.getClients = (req, res, next)=>{
    Client.find({}, function(err, result){
        if (err){
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    });
};

exports.getClientByID = (req, res, next)=>{
    let id = req.params.id;
    console.log(id)
    Client.findById(id, function(err, result){
        if (err){
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    })
};

exports.deleteClientByID = (req, res, next)=>{
    let id = req.params.id;
    console.log(id)
    Client.findByIdAndRemove(id, function(err, result){
        //returns null if id not in db
        if (err){
            res.status(500).json(err);
        }
        else{
            res.json(result);
        }
    })
};

exports.updateClientByID = (req, res, next)=>{
    let id = req.params.id;
    let changes = req.body;
    console.log(id)
    Client.findByIdAndUpdate(id, changes, function(err, result){
        //returns null if id not in db
        if (err){
            res.status(500).json(err); 
        }
        else{
            res.json(result);
        }
    })
};