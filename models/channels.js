const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    channelId: { type: String, required: true },
    title: { type: String, required: true },
    image: { url: String, filename: String },
    description: { type: String, required: true },
    planet: { type: String, required: true },
    card: [{ type: String, required: true }],
    linkedCollection: { type: String, required: true } // ✅ Stores the collection name
}); // ✅ Adds createdAt & updatedAt automatically

module.exports = mongoose.model("Channel", channelSchema);