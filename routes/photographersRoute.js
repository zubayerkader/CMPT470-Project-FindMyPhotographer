var express = require('express');
var router = express.Router();

const PhotographerController = require("../controllers/photographerController");


// router.use('/' , function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL); // update to match the domain you will make the request from
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// {
//     "name": "jeff",
//     "email": "jeff@gmail.com",
//     "phone": 8888888888,
//     "fees": 500,
//     "tags": ["wedding", "cars"],
//     "type": "photographer"
// }
router.post('/', PhotographerController.createPhotographer);
router.post('/:id', PhotographerController.updatePhotographerByID);
router.get('/', PhotographerController.getPhotographers); 
router.get('/:id', PhotographerController.getPhotographerByID);
router.delete('/:id', PhotographerController.deletePhotographerByID);

module.exports = router;