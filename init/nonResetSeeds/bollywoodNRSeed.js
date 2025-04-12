require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const { bollywoodTerrifyingThriller, movies } = require("../Categories/bollywoodPlanet.js");
const { BollywoodPlanet } = require("../../models/movies.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/rjtv";

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    const allBollywood = [...bollywoodTerrifyingThriller, ...movies];
    let added = 0, updated = 0, deleted = 0;

    const currentTitles = allBollywood.map(movie => movie.title);

    // Step 1: Delete movies not in current list (triggers review deletion via middleware)
    const moviesToDelete = await BollywoodPlanet.find({
        title: { $nin: currentTitles }
    });

    for (const movie of moviesToDelete) {
        await BollywoodPlanet.findOneAndDelete({ _id: movie._id });
        deleted++;
    }

    // Step 2: Add or update movies
    for (const movie of allBollywood) {
        const existing = await BollywoodPlanet.findOne({ title: movie.title });

        if (existing) {
            const res = await BollywoodPlanet.updateOne(
                { title: movie.title },
                { $set: movie }
            );
            if (res.modifiedCount > 0) updated++;
        } else {
            await BollywoodPlanet.create(movie);
            added++;
        }
    }

    console.log(`✅ Bollywood seed completed: ${added} added, ${updated} updated, ${deleted} deleted.`);
    mongoose.connection.close();
};

seedDB();
