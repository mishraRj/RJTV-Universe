require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const { bollywoodTerrifyingThriller, movies } = require("../Categories/bollywoodPlanet.js")

const { BollywoodPlanet } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    await BollywoodPlanet.deleteMany({});
    console.log("🗑 Deleted old Bollywood movies...");

    await BollywoodPlanet.insertMany(
        [...bollywoodTerrifyingThriller, ...movies]
    );
    console.log("✅ All Bollywood Movies Inserted!");

    mongoose.connection.close();
};

seedDB();
