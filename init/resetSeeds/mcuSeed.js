require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const { phase1, phase2, phase3, phase4, phase5 } = require("../Categories/marvelPlanet.js")

const { MarvelPlanet } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    await MarvelPlanet.deleteMany({});
    console.log("🗑 Deleted old Marvel movies...");

    await MarvelPlanet.insertMany(
        [
            ...phase1,
            ...phase2,
            ...phase3,
            ...phase4,
            ...phase5
        ]); // ✅ Insert all categories
    console.log("✅ All Marvel Movies Inserted!");

    mongoose.connection.close();
};

seedDB();
