var express = require('express');
var router = express.Router();

const ProfileController = require("../controllers/profileController");


router.get('/photographer/:id', ProfileController.getPhotographerProfile); 
router.get('/client/:id', ProfileController.getClientProfile); 

module.exports = router;