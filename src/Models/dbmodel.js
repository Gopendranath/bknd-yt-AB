const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannels:{
        type: [String],
        required: true,
        default: []
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const dbModel = mongoose.model("ytUserdb", dbSchema);

module.exports = dbModel;