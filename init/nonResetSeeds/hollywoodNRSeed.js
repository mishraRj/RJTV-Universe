require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const { hollywoodTerrifyingThriller, movies } = require("../Categories/hollywoodPlanet.js");
const { HollywoodPlanet } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    const allHollywood = [...hollywoodTerrifyingThriller, ...movies];
    let added = 0, updated = 0, deleted = 0;

    const currentTitles = allHollywood.map(movie => movie.title);

    // Step 1: Delete movies no longer present in data
    const toDelete = await HollywoodPlanet.find({
        title: { $nin: currentTitles }
    });

    for (const movie of toDelete) {
        await HollywoodPlanet.findOneAndDelete({ _id: movie._id });
        deleted++;
    }

    // Step 2: Add or update movies
    for (const movie of allHollywood) {
        const existing = await HollywoodPlanet.findOne({ title: movie.title });

        if (existing) {
            const res = await HollywoodPlanet.updateOne(
                { title: movie.title },
                { $set: movie }
            );
            if (res.modifiedCount > 0) updated++;
        } else {
            await HollywoodPlanet.create(movie);
            added++;
        }
    }

    console.log(`✅ HollywoodPlanet seed complete: ${added} added, ${updated} updated, ${deleted} deleted.`);
    mongoose.connection.close();
};

seedDB();
