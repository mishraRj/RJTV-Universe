const mongoose = require('mongoose')
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require('../middleware.js');
const generalController = require('../controllers/generalController.js');

router.get("/categories", wrapAsync(generalController.RjtvChannels));

// Planet
router.get("/categories/:id", wrapAsync(generalController.planets));

// Horror Movies Page
router.get("/horror_Movies", wrapAsync(generalController.horrorPage));

// All Movies
router.get("/movies", wrapAsync(generalController.allMovies));

// Search Functionality
router.get("/explore", wrapAsync(generalController.explorePage));

// Spaceship
router.get("/mySpace", wrapAsync(generalController.spaceship));

router.get('/plans',isLoggedIn, wrapAsync(generalController.plans));

router.get('/terms_and_conditions', wrapAsync(generalController.termsAndConditions));

router.get('/about_us', wrapAsync(generalController.aboutUs));

router.get('/contact', wrapAsync(generalController.contactUs));

router.get('/support', wrapAsync(generalController.getSupport));

//Edit Profile
router.get('/edit-profile', isLoggedIn, wrapAsync(generalController.editProfile));

router.get('/games', isLoggedIn, wrapAsync(generalController.playGames));

module.exports = router;