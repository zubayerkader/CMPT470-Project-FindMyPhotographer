var express = require('express');
var router = express.Router();

const PhotographerController = require("../controllers/photographerController");

router.post('/', PhotographerController.createPhotographer); 
router.get('/', PhotographerController.getPhotographers); 

module.exports = router;