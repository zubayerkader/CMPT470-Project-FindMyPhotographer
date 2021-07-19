var express = require('express');
var router = express.Router();
const ClientController = require("../controllers/clientController");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });





// {
//     "name": "raad",
//     "phone": "8888888888",
//     "budget": 500
// }

// router.post('/', function(req,res,next){
//     // add user data
//     console.log(req.body);
//     client.connect(err =>{
//         var database = client.db('cmpt470');
//         var collection = database.collection('clients');
//         collection.insertOne(req.body, function(err, result){
//             if (err){
//                 console.log(`ERROR: ${err}`);
//             }
//             else{
//                 res.json("success");
//             }
//             client.close();
//         })  
//     });
// })

router.post('/', ClientController.createClient)



router.get('/', function(req,res,next){
    client.connect(err =>{
        var database = client.db('cmpt470');
        var collection = database.collection('clients');
        // var myCursor = collection.find();
        // var myDocument = myCursor.hasNext() ? myCursor.next() : null;
        // if (myDocument) {
        //     var myName = myDocument.name;
        //     console.log ((myName));
        // }

        
        // collection.find().forEach(function(mydoc){
        //               console.log(mydoc);
        //               client.close();
        //           });


        // const findResult = collection.find({}).toArray().then((data)=> {
        //     console.log('Found documents =>', data)
        // })

        const findResult = collection.find({}).toArray(function(err, result){
            if (err){
                console.log(`ERROR: ${err}`);
            }
            else{
                console.log('Found documents =>', result)
            }
        })
        
        
    res.json("results")
});
})




    



module.exports = router;