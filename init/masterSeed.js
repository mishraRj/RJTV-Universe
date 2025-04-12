require('dotenv').config({ path: '../.env' });
const mongoose = require("mongoose");
const masterCollection = require("../models/masterModel.js");

// Importing all datasets
const { animes, animeMovies } = require("./Categories/animePlanet.js");
const { bollywoodTerrifyingThriller, movies: bollywoodMovies } = require("./Categories/bollywoodPlanet.js");
const { cartoonShows, cartoonMovies } = require("./Categories/cartoonsPlanet.js");
const { hollywoodTerrifyingThriller, movies: hollywoodMovies } = require("./Categories/hollywoodPlanet.js");
const { phase1, phase2, phase3, phase4, phase5 } = require("./Categories/marvelPlanet.js");
const comingSoon = require("./Categories/moviesData.js");
const dramas = require("./Categories/rjtvShows.js");

// MongoDB Connection
const dbUrl = process.env.ATLASDB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

// **Function to safely process datasets**
const processDataset = (dataset, linkedCollectionName) => {
    if (!dataset || !Array.isArray(dataset)) {
        console.warn(`⚠️ Warning: Dataset for ${linkedCollectionName} is empty or missing!`);
        return [];
    }

    return dataset.map(item => ({
        title: item.title,
        latest: item.latest || false,
        linkedCollection: item.channel || linkedCollectionName, // Default to dataset name if channel is missing
        trending: item.trending || false,
        randomTrailer: item.randomTrailer || false
    }));
};

// **Combining all data into masterCollection**
const masterData = [
    ...processDataset(animes, "AnimePlanet"),
    ...processDataset(animeMovies, "AnimePlanet"),
    ...processDataset(bollywoodTerrifyingThriller, "BollywoodPlanet"),
    ...processDataset(bollywoodMovies, "BollywoodPlanet"),
    ...processDataset(cartoonShows, "CartoonsPlanet"),
    ...processDataset(cartoonMovies, "CartoonsPlanet"),
    ...processDataset(hollywoodTerrifyingThriller, "HollywoodPlanet"),
    ...processDataset(hollywoodMovies, "HollywoodPlanet"),
    ...processDataset(phase1, "MarvelPlanet"),
    ...processDataset(phase2, "MarvelPlanet"),
    ...processDataset(phase3, "MarvelPlanet"),
    ...processDataset(phase4, "MarvelPlanet"),
    ...processDataset(phase5, "MarvelPlanet"),
    ...processDataset(comingSoon, "ComingSoon"),
    ...processDataset(dramas, "RJTVShows")
];

// **Debugging: Log dataset counts before inserting**
console.log(`🔹 Anime: ${animes.length}, Anime Movies: ${animeMovies.length}`);
console.log(`🔹 Bollywood Thrillers: ${bollywoodTerrifyingThriller.length}, Bollywood Movies: ${bollywoodMovies.length}`);
console.log(`🔹 Cartoons Shows: ${cartoonShows.length}, Cartoon Movies: ${cartoonMovies.length}`);
console.log(`🔹 Hollywood Thrillers: ${hollywoodTerrifyingThriller.length}, Hollywood Movies: ${hollywoodMovies.length}`);
console.log(`🔹 Marvel Phase 1-5: ${phase1.length + phase2.length + phase3.length + phase4.length + phase5.length}`);
console.log(`🔹 Coming Soon: ${comingSoon.length}, RJTV Shows: ${dramas.length}`);
console.log(`✅ Total Master Collection Entries: ${masterData.length}`);

// **Store Data in MongoDB**
const storeData = async () => {
    try {
        // **Delete old records and log the count**
        const deleteResult = await masterCollection.deleteMany();
        console.log(`🗑 Deleted ${deleteResult.deletedCount} old records from masterCollection`);

        // **Insert new records**
        const insertResult = await masterCollection.insertMany(masterData);
        console.log(`🎉 Inserted ${insertResult.length} new records into masterCollection`);

        // **Close connection**
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Error Storing Data:", error);
    }
};

// **Run the function**
storeData();
