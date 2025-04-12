require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const comingSoon = require("../Categories/moviesData.js"); // ✅ Import all

const { Movie } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    await Movie.deleteMany({});
    console.log("🗑 Deleted old movies...");

    await Movie.insertMany(comingSoon); // ✅ Insert all categories
    console.log("✅ Home Page Movies Inserted!");

    mongoose.connection.close();
};

seedDB();
