require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const { cartoonShows, cartoonMovies, } = require("../Categories/cartoonsPlanet.js")

const { CartoonsPlanet } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    await CartoonsPlanet.deleteMany({});
    console.log("🗑 Deleted old Cartoons...");

    await CartoonsPlanet.insertMany(
        [...cartoonShows, ...cartoonMovies]); // ✅ Insert all categories
    console.log("✅ All Cartoons Inserted!");

    mongoose.connection.close();
};

seedDB();
