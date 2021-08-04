var express = require('express');
var router = express.Router();

const ProfileController = require("../controllers/profileController");


router.get('/:userType/:id', ProfileController.getProfile); 

module.exports = router;