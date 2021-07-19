var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema(
    {
        name: {type: String, maxlength: 50 },
        email: {type: String, maxlength: 50, required:true },
        phone: {type: Number, maxlength: 10, minlength:10},
        budget: {type: Number},
    }
);

module.exports = mongoose.model("Client", clientSchema);

