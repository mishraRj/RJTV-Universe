require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const { animes, animeMovies } = require("../Categories/animePlanet.js");
const { AnimePlanet } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    const allAnime = [...animes, ...animeMovies];
    let added = 0, updated = 0, deleted = 0;

    const currentTitles = allAnime.map(movie => movie.title);

    // Step 1: Delete movies not in current list (and trigger review deletion via middleware)
    const moviesToDelete = await AnimePlanet.find({
        title: { $nin: currentTitles }
    });

    for (const movie of moviesToDelete) {
        await AnimePlanet.findOneAndDelete({ _id: movie._id });
        deleted++;
    }

    // Step 2: Add or update movies
    for (const movie of allAnime) {
        const existing = await AnimePlanet.findOne({ title: movie.title });

        if (existing) {
            const res = await AnimePlanet.updateOne(
                { title: movie.title },
                { $set: movie }
            );
            if (res.modifiedCount > 0) updated++;
        } else {
            await AnimePlanet.create(movie);
            added++;
        }
    }

    console.log(`✅ Anime seed completed: ${added} added, ${updated} updated, ${deleted} deleted.`);
    mongoose.connection.close();
};

seedDB();
