require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const comingSoon = require("../Categories/moviesData.js");
const { Movie } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    const allMovies = comingSoon;
    let added = 0, updated = 0, deleted = 0;

    const currentTitles = allMovies.map(movie => movie.title);

    // Step 1: Delete old movies not in current list
    const toDelete = await Movie.find({
        title: { $nin: currentTitles }
    });

    for (const movie of toDelete) {
        await Movie.findOneAndDelete({ _id: movie._id });
        deleted++;
    }

    // Step 2: Add or update movies
    for (const movie of allMovies) {
        const existing = await Movie.findOne({ title: movie.title });

        if (existing) {
            const res = await Movie.updateOne(
                { title: movie.title },
                { $set: movie }
            );
            if (res.modifiedCount > 0) updated++;
        } else {
            await Movie.create(movie);
            added++;
        }
    }

    console.log(`✅ Home Page Movies seed complete: ${added} added, ${updated} updated, ${deleted} deleted.`);
    mongoose.connection.close();
};

seedDB();
