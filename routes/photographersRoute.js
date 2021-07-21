var express = require('express');
var router = express.Router();

const PhotographerController = require("../controllers/photographerController");


router.use('/' , function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
router.post('/', PhotographerController.createPhotographer); 
router.get('/', PhotographerController.getPhotographers); 

module.exports = router;