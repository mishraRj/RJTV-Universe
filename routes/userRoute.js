const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl, isLoggedIn } = require('../middleware.js');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });
const userController = require('../controllers/userController.js');
const user = require("../models/user.js");

// Google Auth Route
router.get("/auth/google", userController.googleRedirect);

// Google Auth Callback Route
router.get("/auth/google/callback", userController.googleCallback);

// Local Signup
router
    .route('/signup')
    .get(wrapAsync(userController.localSignupForm))
    .post(wrapAsync(userController.localSignup))

// Avatars Logic
router.post('/avatars', wrapAsync (userController.alienAvatars));

// Local Login
router
    .route('/login')
    .get(wrapAsync(userController.localLoginForm))
    .post(saveRedirectUrl, wrapAsync(userController.localLogin))

// Logout
router.get('/logout', wrapAsync(userController.logout));

// Watch Later
router.post('/watchLater/toggle', isLoggedIn, wrapAsync (userController.watchLater));

// Add Favorite Movies
router.post('/favorites/toggle', isLoggedIn, wrapAsync (userController.fav));

// Watch History
router.post('/watchHistory/delete', isLoggedIn, wrapAsync (userController.deleteWatchHistory));

// Choose Avatar For Profile edit
router.get('/choose-avatar', isLoggedIn, wrapAsync (userController.selectAvatar));

// Update Avatar
router.put('/update-avatar', isLoggedIn, wrapAsync(userController.updateAvatar));

// Edit Profile
router.put('/edit-profile', isLoggedIn, upload.single('avatar'), wrapAsync(userController.editProfile));

router
    .route('/themes')
    .get(isLoggedIn, wrapAsync(userController.selectTheme))
    .post(isLoggedIn, wrapAsync(userController.updateTheme))

router.post("/updateHighScore", isLoggedIn, wrapAsync(userController.updateHighScore));

module.exports = router;