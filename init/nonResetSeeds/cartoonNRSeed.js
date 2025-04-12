require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const { cartoonShows, cartoonMovies } = require("../Categories/cartoonsPlanet.js");
const { CartoonsPlanet } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    const allCartoons = [...cartoonShows, ...cartoonMovies];
    let added = 0, updated = 0, deleted = 0;

    const currentTitles = allCartoons.map(movie => movie.title);

    // Step 1: Delete old cartoons not in current collection
    const toDelete = await CartoonsPlanet.find({
        title: { $nin: currentTitles }
    });

    for (const movie of toDelete) {
        await CartoonsPlanet.findOneAndDelete({ _id: movie._id });
        deleted++;
    }

    // Step 2: Add or update cartoons
    for (const movie of allCartoons) {
        const existing = await CartoonsPlanet.findOne({ title: movie.title });

        if (existing) {
            const res = await CartoonsPlanet.updateOne(
                { title: movie.title },
                { $set: movie }
            );
            if (res.modifiedCount > 0) updated++;
        } else {
            await CartoonsPlanet.create(movie);
            added++;
        }
    }

    console.log(`✅ Cartoons seed completed: ${added} added, ${updated} updated, ${deleted} deleted.`);
    mongoose.connection.close();
};

seedDB();
