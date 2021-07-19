// const { Mongoose } = require("mongoose");
const Client = require("../models/clientModel");


exports.createClient = (req, res, next)=>{
    console.log("reached clientcontroller")
    var newClient = new Client(req.body)
    newClient.save(function (error) {
        if (error){
            console.log(error);
            res.json(error);
        }
        else{
            console.log("Client ADDED");
            res.json("Client ADDED")

        }
        
    })

}

exports.getClients = (req, res, next)=>{
    Client.find({}, function(err, result){
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
}