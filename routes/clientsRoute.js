var express = require('express');
var router = express.Router();
const ClientController = require("../controllers/clientController");

router.post('/', ClientController.createClient);
router.get('/', ClientController.getClients);

module.exports = router;