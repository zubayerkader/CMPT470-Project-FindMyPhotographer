// const { Mongoose } = require("mongoose");
const Client = require("../models/clientModel");


exports.createClient = (req, res, next)=>{
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