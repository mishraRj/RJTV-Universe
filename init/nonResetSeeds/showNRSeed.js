require('dotenv').config({ path: '../../.env' });
const mongoose = require("mongoose");
const dramas = require("../Categories/rjtvShows.js");
const { RjtvShows } = require("../../models/movies.js");

const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

const seedDB = async () => {
    let added = 0, updated = 0, deleted = 0;
    const currentTitles = dramas.map(show => show.title);

    // Step 1: Delete shows not in the current data
    const toDelete = await RjtvShows.find({
        title: { $nin: currentTitles }
    });

    for (const show of toDelete) {
        await RjtvShows.findOneAndDelete({ _id: show._id });
        deleted++;
    }

    // Step 2: Add or update the rest
    for (const show of dramas) {
        const existing = await RjtvShows.findOne({ title: show.title });

        if (existing) {
            const res = await RjtvShows.updateOne(
                { title: show.title },
                { $set: show }
            );
            if (res.modifiedCount > 0) updated++;
        } else {
            await RjtvShows.create(show);
            added++;
        }
    }

    console.log(`✅ RJTV Shows seed complete: ${added} added, ${updated} updated, ${deleted} deleted.`);
    mongoose.connection.close();
};

seedDB();
