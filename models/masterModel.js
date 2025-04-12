const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const masterSchema = new Schema({
    title: { type: String, required: true },
    latest: { type: Boolean, default: false },
    linkedCollection: { type: String, required: true },
    trending: { type: Boolean, default: false },
    randomTrailer: { type: Boolean, default: false }
});

const masterCollection = mongoose.model("masterCollection", masterSchema);

module.exports = masterCollection;