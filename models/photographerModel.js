var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotographerSchema = new Schema(
    {
        name: {type: String, maxlength: 50 },
        email: {type: String, maxlength: 50, required:true },
        phone: {type: Number, maxlength: 10, minlength:10},
        fees: {type: Number},
        tags: {type: [String]},
        type: {type: String, enum: ["photographer"], required:true}
        
    }
);

module.exports = mongoose.model("Photographer", PhotographerSchema);