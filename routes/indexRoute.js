var express = require('express');
var router = express.Router();

const Client = require("../models/clientModel");
const Photographer = require("../models/photographerModel");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Express: Listening on port 3000")
  res.render('index', { title: 'Express' });
});

router.get('/getInfoFromEmail/:email',function(req, res, next) {
  let email_id = req.params.email;
  console.log(email_id)
  // res.json(email);
  let tempData = {}

  Client.find({email: email_id}, function (err, result){
    if (err){
      res.status(500).json(err);
      return;
    }
    else{
        console.log("client" ,result)
        tempData.client = result;
        // res.json(result);
    }
  }).then( ()=>{
    Photographer.find({email: email_id}, function (err, result){
      if (err){
        res.status(500).json(err);
        return;
      }
      else{
          console.log("photographer" ,result)
          tempData.photographer = result;
          console.log("TEMPDATA", tempData)
          // res.json(result);
          let ret = {};
          if (tempData.client.length == 0 && tempData.photographer.length == 0){
            ret.value = null;
            ret.type = null;
          }
          else if (tempData.client.length == 0){
            ret.value = tempData.photographer;
            ret.type = "photographer"
          }
          else if (tempData.photographer.length == 0){
            ret.value = tempData.client;
            ret.type = "client"
          }
          res.json(ret)
      }
    
    }
    )
    
    

  })});

module.exports = router;



