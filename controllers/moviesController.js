const mongoose = require('mongoose')
const { Movie,
    MarvelPlanet,
    AnimePlanet,
    BollywoodPlanet,
    HollywoodPlanet,
    CartoonsPlanet,
    RjtvShows } = require("../models/movies.js");
const masterCollection = require('../models/masterModel.js');
const User = require('../models/user.js');
const Channel = require('../models/channels.js');
const Review = require('../models/review.js')

const getCollectionData = async (collectionName, query = {}) => {
    switch (collectionName) {
        case "Movie":
            return Movie.find(query);
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

module.exports.index = async (req, res) => {
    try {
        // Fetch latest movies from masterCollection
        const latestMasterMovies = await masterCollection.find({ latest: true });

        // Fetch random trailer true movies from masterCollection
        const randomTrailerMaster = await masterCollection.find({ randomTrailer: true });

        // Extract unique linkedCollections
        const uniqueCollections = [...new Set(latestMasterMovies.map(movie => movie.linkedCollection))];
        const uniqueRandomCollections = [...new Set(randomTrailerMaster.map(movie => movie.linkedCollection))];

        // Fetch latest movies from each collection in parallel
        const latestReleasesResults = await Promise.all(
            uniqueCollections.map(collection => getCollectionData(collection, { latest: true }))
        );

        const randomTrailerResults = await Promise.all(
            uniqueRandomCollections.map(collection => getCollectionData(collection, { randomTrailer: true }))
        );

        // Merge all latest releases
        const latestReleases = latestReleasesResults.flat(); 

        const randomTrailers = randomTrailerResults.flat(); 

        // Fetch other necessary data
        const [
            channels, comingSoon, MCUmovies, animes,
            bollywoodTerrifyingThriller, hollywoodTerrifyingThriller, cartoonShows, cartoonMovies, dramas
        ] = await Promise.all([
            Channel.find(), Movie.find({ homeShow: true }),
            MarvelPlanet.find({ homeShow: true }), AnimePlanet.find({ homeShow: true }),
            BollywoodPlanet.find({ genre: { $in: ["Horror"] }, homeShow: true }),
            HollywoodPlanet.find({ genre: { $in: ["Horror"] }, homeShow: true }),
            CartoonsPlanet.find({ type: "cartoon", homeShow: true }),
            CartoonsPlanet.find({ type: "movie", homeShow: true }),
            RjtvShows.find({ homeShow: true }), 
        ]);

        // Organize channel data
        const allChannels = {
            animePlanet: channels.find(ch => ch.title === "Anime Planet"),
            cartoonsPlanet: channels.find(ch => ch.title === "Cartoons Planet"),
            marvelPlanet: channels.find(ch => ch.title === "Marvel Planet"),
            rjtvShows: channels.find(ch => ch.title === "RJTV Shows"),
        };

        // Merge thrillers
        const terrifyingThriller = [...bollywoodTerrifyingThriller, ...hollywoodTerrifyingThriller];

        // Organize final data
        const categorizedMovies = { latestReleases, comingSoon, terrifyingThriller, MCUmovies, animes, dramas, cartoonShows, cartoonMovies };

        res.render("pages/homePage.ejs", { ...categorizedMovies, ...allChannels, randomTrailers, currUser: req.user, isLoggedIn: !!req.user, });

    } catch (err) {
        console.error("❌ Error fetching home page data:", err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports.showPage = async (req, res) => {
    // Extract just the ID part (before "-")
    const rawId = req.params.id.split('-')[0].trim();

    if (!mongoose.Types.ObjectId.isValid(rawId)) {
        req.flash("error", "🚨 Uh-oh! Movie Not Found in the Universe! 🌌👾")
        return res.redirect('/home_page');;
    }

    // Search in all collections
    const results = await Promise.all([
        Movie.findById(rawId).populate({
            path: 'reviews',
            populate:{
                path:"author"
            }
        }),
        MarvelPlanet.findById(rawId).populate({
            path: 'reviews',
            populate:{
                path:"author"
            }
        }),
        AnimePlanet.findById(rawId).populate({
            path: 'reviews',
            populate:{
                path:"author"
            }
        }),
        BollywoodPlanet.findById(rawId).populate({
            path: 'reviews',
            populate:{
                path:"author"
            }
        }),
        HollywoodPlanet.findById(rawId).populate({
            path: 'reviews',
            populate:{
                path:"author"
            }
        }),
        CartoonsPlanet.findById(rawId).populate({
            path: 'reviews',
            populate:{
                path:"author"
            }
        }),
        RjtvShows.findById(rawId).populate({
            path: 'reviews',
            populate:{
                path:"author"
            }
        })
    ]);

    // Get the first found movie
    const movie = results.filter(result => result !== null)[0];

    if (!movie) {
        req.flash("error", "Movie Doesn't Exist!")
        return res.redirect('/home_page');
    }

    // Check if it's a horror movie
    const isHorror = movie.genre.includes("Horror");

    // Define search conditions for recommended movies
    const conditions = { channel: movie.channel, type: movie.type, genre: { $in: movie.genre }, _id: { $ne: movie._id }};

    // Fetch recommended movies dynamically
    const recommendedMovies = await getCollectionData(movie.channel, conditions);

    res.render("pages/show.ejs", { movie, recommendedMovies, isHorror});
}

module.exports.player = async (req, res) => {
    // Extract just the ID part (before "-")
    const rawId = req.params.id.split('-')[0].trim();

    if (!mongoose.Types.ObjectId.isValid(rawId)) {
        req.flash("error", "🚨 Uh-oh! Movie Not Found in the Universe! 🌌👾");
        return res.redirect('/home_page');
    }

    try {
        // ✅ Efficient search in all collections
        const results = await Promise.all([
            MarvelPlanet.findById(rawId),
            AnimePlanet.findById(rawId),
            BollywoodPlanet.findById(rawId),
            HollywoodPlanet.findById(rawId),
            CartoonsPlanet.findById(rawId),
            RjtvShows.findById(rawId)
        ]);

        // ✅ Get the actual movie (skip nulls)
        const movie = results.filter(result => result !== null)[0];

        if (!movie) {
            req.flash("error", "🚨 Movie Not Found! Something went wrong! 🌌👾");
            return res.redirect('/home_page');
        }

        const sourceCollection = movie.channel; // ✅ Cleaner + reliable
        const user = await User.findById(req.user._id);

        // ✅ Remove if already in history
        user.watchHistory = user.watchHistory.filter(item =>
            !(item.movieId.equals(rawId) && item.sourceCollection === sourceCollection)
        );

        // ✅ Add to beginning
        user.watchHistory.unshift({ movieId: rawId, sourceCollection });

        // ✅ Limit to 50 entries
        if (user.watchHistory.length > 50) user.watchHistory.pop();

        await user.save();
        const isHorror = movie.genre.includes("Horror");

        res.render("pages/player.ejs", { movie, isHorror });

    } catch (err) {
        console.error("🚨 Player Route Error:", err);
        res.status(500).send("Server error");
    }
}

module.exports.postReview = async (req, res) => {
    const userId = req.user._id;

    // Search in all collections
    const results = await Promise.all([
        Movie.findById(req.params.id),
        MarvelPlanet.findById(req.params.id),
        AnimePlanet.findById(req.params.id),
        BollywoodPlanet.findById(req.params.id),
        HollywoodPlanet.findById(req.params.id),
        CartoonsPlanet.findById(req.params.id),
        RjtvShows.findById(req.params.id)
    ]);

    let movie = results.filter(result => result !== null)[0];
    if (!movie) return res.status(404).send("Movie not in universe!");

    //  Check if user already reviewed this movie
    const existingReview = await Review.findOne({
        _id: { $in: movie.reviews },
        author: userId
    });

    if (existingReview) {
        req.flash("error", "🛸 You've already dropped a review on this one!");
        return res.redirect(`/home_page/${movie._id}`);
    }

    // ✅ Otherwise, create and push new review
    let newReview = new Review(req.body.review);
    newReview.author = userId;
    await newReview.save();

    movie.reviews.push(newReview._id);
    await movie.save();

    req.flash("success", "✨ Stellar Review Now Live! 🚀");
    res.redirect(`/home_page/${movie._id}`);
}

module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;

    // ✅ Search in all collections
    const results = await Promise.all([
        Movie.findById(id),
        MarvelPlanet.findById(id),
        AnimePlanet.findById(id),
        BollywoodPlanet.findById(id),
        HollywoodPlanet.findById(id),
        CartoonsPlanet.findById(id),
        RjtvShows.findById(id)
    ]);

    // ✅ Filter out 'null' results to get the found movie
    let movie = results.filter(result => result !== null)[0];

    // ✅ If no movie found, handle the error
    if (!movie) {
        return res.status(404).send("Movie not in universe!");
    }

    // ✅ Get the collection name from the 'channel' property of the found movie
    const collectionName = movie.channel;  // Example: "AnimePlanet", "MarvelPlanet", etc.

    // ✅ Use getCollectionData function to get the model dynamically
    const collection = await getCollectionData(collectionName, { _id: id });

    if (!collection || collection.length === 0) {
        return res.status(404).send("Collection not found");
    }

    // ✅ Safely remove the review reference from the correct collection
    await collection[0].updateOne({ $pull: { reviews: reviewId } });

    // ✅ Delete the review itself
    await Review.findByIdAndDelete(reviewId);

    // ✅ Flash success message
    req.flash("success", "❌ Deleting Review... Galactic Data Erased! 🌌");

    res.redirect(`/home_page/${id}`);
}