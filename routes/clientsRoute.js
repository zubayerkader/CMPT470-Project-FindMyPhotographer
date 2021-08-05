var express = require('express');
var router = express.Router();
const ClientController = require("../controllers/clientController");

// router.use('/' , function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL); // update to match the domain you will make the request from
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

router.post('/', ClientController.createClient);
router.post('/:id', ClientController.updateClientByID);
router.get('/', ClientController.getClients);
router.get('/:id', ClientController.getClientByID);
router.delete('/:id', ClientController.deleteClientByID);

module.exports = router;