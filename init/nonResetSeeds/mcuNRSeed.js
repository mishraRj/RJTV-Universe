require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const { phase1, phase2, phase3, phase4, phase5 } = require("../Categories/marvelPlanet.js");
const { MarvelPlanet } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    const allMarvel = [...phase1, ...phase2, ...phase3, ...phase4, ...phase5];
    let added = 0, updated = 0, deleted = 0;

    const currentTitles = allMarvel.map(movie => movie.title);

    // Step 1: Delete movies that are no longer in the dataset
    const toDelete = await MarvelPlanet.find({
        title: { $nin: currentTitles }
    });

    for (const movie of toDelete) {
        await MarvelPlanet.findOneAndDelete({ _id: movie._id });
        deleted++;
    }

    // Step 2: Add or update the rest
    for (const movie of allMarvel) {
        const existing = await MarvelPlanet.findOne({ title: movie.title });

        if (existing) {
            const res = await MarvelPlanet.updateOne(
                { title: movie.title },
                { $set: movie }
            );
            if (res.modifiedCount > 0) updated++;
        } else {
            await MarvelPlanet.create(movie);
            added++;
        }
    }

    console.log(`✅ MarvelPlanet seed complete: ${added} added, ${updated} updated, ${deleted} deleted.`);
    mongoose.connection.close();
};

seedDB();
