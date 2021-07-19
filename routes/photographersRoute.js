var express = require('express');
var router = express.Router();

const PhotographerController = require("../controllers/photographerController");

/* GET users listing. */
router.post('/', PhotographerController.createPhotographer); 
router.get('/', PhotographerController.getPhotographers); 
module.exports = router;