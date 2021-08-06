var express = require('express');
var router = express.Router();
const ImageController = require("../controllers/imageController");

router.post('/', ImageController.storeImage);
router.get('/photographer/:id', ImageController.getAllImagesByPhotographerID);

module.exports = router;