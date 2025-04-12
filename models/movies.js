const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Reviews = require("./review.js");

const movieSchema = new Schema({
    title: { type: String, required: true },
    movieClass: String,
    watch: String,
    genre: [{ type: String, required: true }],  // ✅ Now an array of strings
    language: [String],  
    channel: { type: String, required: true },
    mcuPhase: Number,
    type: String, // Movie, Series, Anime !?
    category: String, // DC/ Harry Potter etc
    season: Number,
    homeShow: { type: Boolean, default: false },
    latest: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
    recommended: { type: Boolean, default: false },
    description: { type: String, required: true },
    randomTrailer: { type: Boolean, default: false },
    randomTrailerLink: String,
    randomImageLink: String,
    image: { url: String, filename: String },  // ✅ Cloudinary image storage
    banner: String,
    trailer: String, // ✅ YouTube or Video CDN link
    year: Number,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});


movieSchema.post("findOneAndDelete", async function (movie) {
    if (movie) {
        await Reviews.deleteMany({ _id: { $in: movie.reviews } });
        console.log("✅ Deleted all reviews related to the movie!");
    }
});

// Creating multiple collections from the same schema
const Movie = mongoose.model("Movie", movieSchema);  // Movies Collection
const MarvelPlanet = mongoose.model("MarvelPlanet", movieSchema);  // MCU Movies
const AnimePlanet = mongoose.model("AnimePlanet", movieSchema);  // Anime
const BollywoodPlanet = mongoose.model("BollywoodPlanet", movieSchema);  // Bollywood
const HollywoodPlanet = mongoose.model("HollywoodPlanet", movieSchema);  // Bollywood
const CartoonsPlanet = mongoose.model("CartoonsPlanet", movieSchema);  // Bollywood
const RjtvShows = mongoose.model("RjtvShows", movieSchema);  // Bollywood

module.exports = { Movie, MarvelPlanet, AnimePlanet, BollywoodPlanet, HollywoodPlanet, CartoonsPlanet, RjtvShows };