const mongoose = require('mongoose')
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, validateReview, isReviewAuthor } = require('../middleware.js');
const moviesController = require('../controllers/moviesController.js');

router.get("/", wrapAsync(moviesController.index));

// Show Page of Movies
router.get("/:id", wrapAsync(moviesController.showPage));

// Player
router.get('/:id/player', isLoggedIn, wrapAsync(moviesController.player));

// Reviews
router.post("/:id/reviews", isLoggedIn, validateReview, wrapAsync(moviesController.postReview));

// Delete Reviews
router.delete("/:id/reviews/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(moviesController.deleteReview));

module.exports = router;