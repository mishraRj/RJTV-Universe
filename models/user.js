const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: { type: String, required: true }, // ✅ Add this if needed
    email: {
        type: String,
        required: true,
        unique: true // ✅ Ensures no duplicate emails
    },
    avatar: { type: String, required: true },
    avatarPublicId: String,
    googleId: String,
    highScore: { type: Number, default: 0 },
    aliensEnabled: { type: Boolean, default: true },
    ghostsEnabled: { type: Boolean, default: true },
    selectedTheme: {
        type: String,
        default: 'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/neonUniverse.webp'
        },
    watchLater: [
    {
        movieId: { type: Schema.Types.ObjectId, required: true, refPath: 'watchLater.sourceCollection' },
        sourceCollection: {
        type: String,
        required: true,
        enum: [
            'AnimePlanet',
            'MarvelPlanet',
            'BollywoodPlanet',
            'HollywoodPlanet',
            'CartoonsPlanet',
            'RjtvShows'
        ]
        }
    }
    ],
    favorites: [
    {
        movieId: { type: Schema.Types.ObjectId, required: true, refPath: 'watchLater.sourceCollection' },
        sourceCollection: {
        type: String,
        required: true,
        enum: [
            'AnimePlanet',
            'MarvelPlanet',
            'BollywoodPlanet',
            'HollywoodPlanet',
            'CartoonsPlanet',
            'RjtvShows'
        ]
        }
    }
    ],
    watchHistory: [
    {
        movieId: { type: Schema.Types.ObjectId, required: true, refPath: 'watchLater.sourceCollection' },
        sourceCollection: {
        type: String,
        required: true,
        enum: [
            'AnimePlanet',
            'MarvelPlanet',
            'BollywoodPlanet',
            'HollywoodPlanet',
            'CartoonsPlanet',
            'RjtvShows'
        ]
        }
    }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);