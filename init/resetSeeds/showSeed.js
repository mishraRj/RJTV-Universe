require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const dramas = require("../Categories/rjtvShows.js")

const { RjtvShows } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    await RjtvShows.deleteMany({});
    console.log("🗑 Deleted old Shows...");

    await RjtvShows.insertMany(dramas); // ✅ Insert all categories
    console.log("✅ All Shows Inserted!");

    mongoose.connection.close();
};

seedDB();
