require('dotenv').config({ path: '../.env' });
const mongoose = require("mongoose");
const channels = require("./channelData"); // Import trailers data
const channelSchema = require("../models/channels"); // Import Trailer model

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    await channelSchema.deleteMany({}); // Delete existing trailers
    console.log("✅ Channels Old Data Deleted Successfully!");
    await channelSchema.insertMany(channels); // Insert new trailers
    console.log("✅ Channels Data Inserted Successfully!");
    mongoose.connection.close();
};

// Run Seed Function
seedDB();
