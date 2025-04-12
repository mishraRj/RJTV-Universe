require('dotenv').config({ path: '../../.env' });

const mongoose = require("mongoose");
const { animes, animeMovies } = require("../Categories/animePlanet.js")

const { AnimePlanet } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    await AnimePlanet.deleteMany({});
    console.log("🗑 Deleted old anime...");

    await AnimePlanet.insertMany(
        [...animes, ...animeMovies,]); 
console.log("✅ All Anime Inserted!");

    mongoose.connection.close();
};

seedDB();
