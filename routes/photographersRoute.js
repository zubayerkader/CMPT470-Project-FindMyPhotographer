var express = require('express');
var router = express.Router();

const PhotographerController = require("../controllers/photographerController");

// {
//     "name": "Sarar",
//     "email": "sarar@gmail.com",
//     "phone": "9999999999",
//     "fees": 50,
//     "tags": ["wedding", "cars"]
// }
router.post('/', PhotographerController.createPhotographer); 
router.get('/', PhotographerController.getPhotographers); 
module.exports = router;