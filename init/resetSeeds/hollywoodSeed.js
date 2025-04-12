require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const { hollywoodTerrifyingThriller, movies } = require("../Categories/hollywoodPlanet.js")

const { HollywoodPlanet } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    await HollywoodPlanet.deleteMany({});
    console.log("🗑 Deleted old Hollywood movies...");

    await HollywoodPlanet.insertMany(
        [...hollywoodTerrifyingThriller, ...movies]);
    console.log("✅ All Hollywood Movies Inserted!");

    mongoose.connection.close();
};

seedDB();
