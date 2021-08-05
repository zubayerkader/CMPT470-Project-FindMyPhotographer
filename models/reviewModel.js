var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        client: {type: Schema.Types.ObjectId, required: true, ref: "Client"},
        clientName: {type: String,required: true,},
        photographer: {type: Schema.Types.ObjectId, required: true, ref: "Photographer"},
        review: {type: String, maxlength: 300, required:true },
        stars: {type: String, min: 0, max: 5}
        
    }
);

module.exports = mongoose.model("Review", reviewSchema);