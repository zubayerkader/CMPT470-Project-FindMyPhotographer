var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
    {
        title: {type: String, maxlength: 50, required:true },
        description: {type: String, maxlength: 300, required:true },
        client: {type: Schema.Types.ObjectId, required: true, ref: "Client"},
        photographer: {type: Schema.Types.ObjectId, ref: "Photographer"},
        status: {type: String, enum: ["Accepted", "Rejected", "Pending", "Negotiating"], required:true},
        tags: {type: [String]},
        photographer_ask: {type: Number },
        client_offer: {type: Number, required:true },
        argeed_fee: {type: Number},
    }
)

module.exports = mongoose.model("Booking", bookingSchema);