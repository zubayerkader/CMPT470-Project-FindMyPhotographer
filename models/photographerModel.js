var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotographerSchema = new Schema(
    {
        name: {type: String, maxlength: 50 },
        email: {type: String, maxlength: 50, required:true },
        phone: {type: Number, maxlength: 10, minlength:10},
        fees: {type: Number},
        tags: {type: [String]},
        
    }
);

module.exports = mongoose.model("Photographer", PhotographerSchema);