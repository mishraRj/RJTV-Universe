const mongoose = require('mongoose')
const {
    MarvelPlanet,
    AnimePlanet,
    BollywoodPlanet,
    HollywoodPlanet,
    CartoonsPlanet,
    RjtvShows } = require("../models/movies.js");
const masterCollection = require('../models/masterModel.js');
const User = require('../models/user.js');
const Channel = require('../models/channels.js');

const fetchMovieFromPlanet = async (source, id) => {
    const Model = planetCollections[source];
    if (!Model) return null;
    return await Model.findById(id);
};

const getCollectionData = async (collectionName, query = {}) => {
    switch (collectionName) {
        case "AnimePlanet":
            return AnimePlanet.find(query);
        case "MarvelPlanet":
            return MarvelPlanet.find(query);
        case "BollywoodPlanet":
            return BollywoodPlanet.find(query);
        case "HollywoodPlanet":
            return HollywoodPlanet.find(query);
        case "CartoonsPlanet":
            return CartoonsPlanet.find(query);
        case "RjtvShows":
            return RjtvShows.find(query);
        default:
            return []; // Return an empty array if collection is unknown
    }
};

const planetCollections = {
    AnimePlanet,
    MarvelPlanet,
    HollywoodPlanet,
    BollywoodPlanet,
    CartoonsPlanet,
    RjtvShows,
};

module.exports.RjtvChannels = async (req, res) => {
    const channels = await Channel.find();
    res.render("pages/channels.ejs", { channels });
}

module.exports.planets = async (req, res) => {
    // Extract just the ID part (before "-")
    const rawId = req.params.id.split('-')[0].trim();

    if (!mongoose.Types.ObjectId.isValid(rawId)) {
        req.flash("error", "🚨 Planet Lost in the Cosmos! 🌌👽");
        return res.redirect('/home_page/categories');
    }

    const channel = await Channel.findById(rawId);

    if (!channel || !channel.linkedCollection) {
        req.flash("error", "🚨This channel drifted into a black hole.🛰️");
        return res.redirect('/home_page/categories');
    }

    let content;
    try {
        content = await getCollectionData(channel.linkedCollection);
    } catch (err) {
        req.flash("error", "⚠️ Failed to land on this planet.");
        return res.redirect('/home_page/categories');
    }

    res.render("pages/Extras/planet.ejs", { channel, content });
}

module.exports.horrorPage = async (req, res) => {
    try {
        // ✅ Find horror movies in BollywoodPlanet and HollywoodPlanet
        const [bollywoodHorror, hollywoodHorror] = await Promise.all([
            BollywoodPlanet.find({ genre: { $in: ["Horror"] } }), 
            HollywoodPlanet.find({ genre: { $in: ["Horror"] } })
        ]);

        // ✅ Combine both collections into one array
        const horrorMovies = [...bollywoodHorror, ...hollywoodHorror];

        res.render("pages/Extras/horrorPage.ejs", { horrorMovies });

    } catch (err) {
        console.error("❌ Error fetching horror page data:", err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports.allMovies = async (req, res) => { 
    const [channels, mcu, anime, bollywood, hollywood, cartoon] = await Promise.all([
        Channel.find(),
        MarvelPlanet.find({ type: "movie", recommended: true }),
        AnimePlanet.find({ type: "movie", recommended: true }),
        BollywoodPlanet.find({ type: "movie", recommended: true }),
        HollywoodPlanet.find({ type: "movie", recommended: true }),
        CartoonsPlanet.find({ type: "movie", recommended: true }),
    ]);

    // ✅ Rename to avoid conflict
    const animePlanet = channels.find(ch => ch.title === "Anime Planet");
    const cartoonsPlanet = channels.find(ch => ch.title === "Cartoons Planet");
    const marvelPlanet = channels.find(ch => ch.title === "Marvel Planet");
    const hollywoodPlanetData = channels.find(ch => ch.title === "Hollywood Planet"); // ✅ Renamed
    const bollywoodPlanetData = channels.find(ch => ch.title === "Bollywood Planet"); // ✅ Renamed

    const allChannels = {
        animePlanet,
        cartoonsPlanet,
        marvelPlanet,
        hollywoodPlanet: hollywoodPlanetData, // ✅ No conflict
        bollywoodPlanet: bollywoodPlanetData  // ✅ No conflict
    };

    // ✅ Organizing data for easier EJS rendering
    const categorizedMovies = {
        mcu, anime, bollywood, hollywood, cartoon
    };

    res.render("pages/Extras/movies.ejs", {  
        ...categorizedMovies, 
        ...allChannels,
    });
}

module.exports.explorePage = async (req, res) => {
    let query = req.query.title;

    // Fetch trending movies first (so they are always available)
    const trendingMasterMovies = await masterCollection.find({ trending: true });

    // Extract unique linkedCollections
    const uniqueCollections = [...new Set(trendingMasterMovies.map(movie => movie.linkedCollection))];

    // Fetch latest movies from each collection in parallel
    const trendingResults = await Promise.all(
        uniqueCollections.map(collection => getCollectionData(collection, { trending: true }))
    );

    // Merge all latest releases
    const trendingMovies = trendingResults.flat(); 

    // If no search query, just render the explore page with trending movies
    if (!query) {
        return res.render("pages/explore.ejs", { movieResults: [], trendingMovies, noResultsFound: false });
    }

    // Step 1: Find ALL movie references in MoviesMaster collection
    const movieRefs = await masterCollection.find({ title: { $regex: query, $options: "i" } });

    if (!movieRefs.length) {
        return res.render("pages/explore.ejs", { movieResults: [], trendingMovies, noResultsFound: true });
    }

    // Step 2: Fetch ALL movies from their respective collections
    let movieResultsMap = new Map();

    for (let movieRef of movieRefs) {
        let movies = await getCollectionData(movieRef.linkedCollection, { title: movieRef.title });

        movies.forEach((movie) => {
            let uniqueKey = `${movieRef.linkedCollection}-${movie.title}-${movie.year}`;

            // If a movie with the same title & year already exists in the same collection, skip it
            if (!movieResultsMap.has(uniqueKey)) {
                movieResultsMap.set(uniqueKey, movie);
            }
        });
    }

    // Convert Map values back to an array
    let movieResults = Array.from(movieResultsMap.values());

    // If no results found, set flag to true
    let noResultsFound = movieResults.length === 0;

    // Render explore page with found movies and trending movies
    res.render("pages/explore.ejs", { movieResults, trendingMovies, noResultsFound });
}

module.exports.spaceship = async (req, res) => {
    if (!req.user) {
        return res.render("pages/mySpace", {
            watchLaterMovies: [],
            favoriteMovies: [],
            watchHistory: [],
            currUser: null
        });
    }

    const user = await User.findById(req.user._id);

    const populatedWatchLater = [];
    const populatedFavorites = [];
    const populatedWatchHistory = [];

    for (let item of user.watchLater) {
        const movieDoc = await fetchMovieFromPlanet(item.sourceCollection, item.movieId);
        if (movieDoc) populatedWatchLater.push(movieDoc);
    }

    for (let item of user.favorites) {
        const movieDoc = await fetchMovieFromPlanet(item.sourceCollection, item.movieId);
        if (movieDoc) populatedFavorites.push(movieDoc);
    }

    for (let item of user.watchHistory) {
        const movieDoc = await fetchMovieFromPlanet(item.sourceCollection, item.movieId);
        if (movieDoc) populatedWatchHistory.push(movieDoc);
    }

    res.render("pages/mySpace", {
        watchLaterMovies: populatedWatchLater,
        favoriteMovies: populatedFavorites,
        watchHistory: populatedWatchHistory,
        currUser: req.user,
    });
}

module.exports.editProfile = async (req, res) => {
    res.render('pages/Extras/profile.ejs', { currUser: req.user });
}

module.exports.plans = async (req, res) => {
    res.render('pages/Extras/plans.ejs');
}

module.exports.termsAndConditions = async (req, res) => {
    res.render('pages/Extras/TandC.ejs');
}

module.exports.aboutUs = async (req, res) => {
    res.render('pages/Extras/aboutUs.ejs');
}

module.exports.contactUs = async (req, res) => {
    res.render('pages/Extras/contact.ejs');
}

module.exports.getSupport = async (req, res) => {
    res.render('pages/Extras/support.ejs');
}

module.exports.playGames = async (req, res) => {
    res.render('pages/Extras/game.ejs');
}