var mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
var imageSchema = new Schema({
    photographer: {type: Schema.Types.ObjectId, ref: "Photographer", required:true},
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
//Image is a model which has a schema imageSchema
 
module.exports = mongoose.model('Image', imageSchema);