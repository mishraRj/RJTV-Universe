const User = require('../models/user.js');
const cloudinary = require("cloudinary").v2;
const passport = require('passport');

// Dynamic themes
const availableThemes = [
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/neonUniverse.webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/a%20(4).webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/a%20(8).webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/a%20(9).webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/a%20(12).webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/a%20(13).webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/a%20(14).webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/new1.webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/new2.webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/new3.webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/new4.webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/newGreen1.webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/newGreen2.webp',
    'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/bluePlanets.webp',
];

module.exports.googleRedirect = passport.authenticate("google", { scope: ["profile", "email"] });

module.exports.googleCallback = (req, res, next) => {
    passport.authenticate("google", {
        failureRedirect: "/login",
        failureFlash: "Google login failed!",
    })(req, res, () => {
        req.flash("success", "Welcome to the Universe, Space Traveler! 🚀");
        res.redirect("/home_page");
    });
};

module.exports.localSignupForm = async(req, res) => {
    req.flash("showSignUpPopup", "true");  // ✅ Signup popup enable
    res.redirect(req.get('Referer') || '/home_page'); 
}

module.exports.alienAvatars = async (req, res) => {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        req.flash("error", "🚀 Oops, this traveler already exists in the universe!");
        req.flash("showSignUpPopup", "true");
        return res.redirect(req.get('Referer') || '/home_page');
    }

    // ✅ Pass isProfileUpdate as false
    res.render("pages/Extras/avatars.ejs", {
        username,
        email,
        password,
        isProfileUpdate: false
    });
}

module.exports.localSignup = async (req, res) => {
    try {
        let { username, email, password, avatar } = req.body;

        // ✅ Check again to prevent any bypassing (Edge case)
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            req.flash("error", "🚀 Oops, this traveler already exist in universe! Try a different route!");
            return res.redirect("/signup");
        }

        const newUser = new User({ email, username, avatar });
        let registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "🌌 Welcome aboard, explorer! The Universe awaits you! 🚀");
            res.redirect("/home_page");
        });

    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}

module.exports.localLoginForm = async(req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect(req.get('Referer') || '/home_page');  // ✅ Agar logged in hai toh wahi page load karo
    }
    // ✅ Flash error message *only if* redirectUrl includes '/player'
    if (req.session.redirectUrl && req.session.redirectUrl.includes('/player')) {
        req.flash('error', "You Must Be Logged In To Travel Further in Universe!");
    }
    req.flash("showLoginPopup", "true");  // ✅ Login popup enable karo
    res.redirect(req.get('Referer') || '/home_page');  // ✅ Redirect back to previous page
}

module.exports.localLogin = async (req, res, next) => {
    const redirectUrl = req.session.redirectUrl || req.get('Referer') || "/home_page";  // ✅ Use previous page

    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) {
            req.flash("error", "⚠️ Invalid credentials! The universe doesn't recognize you yet. Try again! 🌌"); // ✅ Show error
            req.flash("showLoginPopup", "true");  // ✅ Show login popup again
            return res.redirect(req.get('Referer') || '/home_page');  // ✅ Redirect to previous page
        }
        req.logIn(user, (err) => {
            if (err) return next(err);
            delete req.session.redirectUrl;
            req.flash("success",  "🌌 Welcome aboard, explorer! The Universe awaits you! 🚀");
            // ✅ Reset `showLoginPopup` because the user has logged in
            req.session.showLoginPopup = false;
            res.redirect(redirectUrl);
        });
    })(req, res, next);
}

module.exports.logout = async (req, res) => {
    req.logout((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "🚀 You've safely exited the Universe! See you on your next adventure! 🌌");
        res.redirect('/home_page');
    })
}

module.exports.watchLater = async (req, res) => {
    const { movieId, sourceCollection, movieTitle } = req.body;

    try {
        const user = await User.findById(req.user._id);

        const alreadyInWL = user.watchLater.some(item =>
            item.movieId.equals(movieId) && item.sourceCollection === sourceCollection
        );

        if (alreadyInWL) {
            // Remove from Watch Later
            user.watchLater = user.watchLater.filter(item =>
                !(item.movieId.equals(movieId) && item.sourceCollection === sourceCollection)
            );
            await user.save();
            req.flash("success", `${movieTitle} Removed from Watch Bucket❌`);
        } else {
            // Add to Watch Later (no casting needed if schema is correct)
            user.watchLater.push({ movieId, sourceCollection });
            await user.save();
            req.flash("success", `✅ ${movieTitle} Added to Watch Bucket in your Spaceship 🛸!`);
        }
    } catch (err) {
        console.error("❌ Watch Later toggle error:", err);
        req.flash("error", "Something went wrong!");
    }

    const returnTo = req.get("Referrer") || "/";
    res.redirect(returnTo);
}

module.exports.fav = async (req, res) => {
    const referer = req.get('Referer'); // full URL (e.g., /mySpace)
    const redirectUrl = req.session.redirectUrl || referer || "/home_page";
    const { movieId, sourceCollection, movieTitle } = req.body;
    try {
        const user = await User.findById(req.user._id);

        const alreadyInFavs = user.favorites.some(item =>
            item.movieId.equals(movieId) && item.sourceCollection === sourceCollection
        );

        if (alreadyInFavs) {
            user.favorites = user.favorites.filter(item =>
                !(item.movieId.equals(movieId) && item.sourceCollection === sourceCollection)
            );
            await user.save();
            if (referer && referer.includes('/mySpace')) {
                req.flash("success", `${movieTitle} Removed from Favorites ❤️`);
                return res.redirect(referer);
            }
            else {
                return res.json({ success: true, status: 'removed' });
            }
        } else {
            user.favorites.push({ movieId, sourceCollection });
            await user.save();
            return res.json({ success: true, status: 'added' });
        }
    } catch (err) {
        console.error("🚨 Favorites toggle error:", err);
        return res.status(500).json({ success: false });
    }
}

module.exports.deleteWatchHistory = async (req, res) => {
    const { movieId, sourceCollection, movieTitle } = req.body;

    try {
        const user = await User.findById(req.user._id);

        // Remove from history
        user.watchHistory = user.watchHistory.filter(item =>
            !(item.movieId.equals(movieId) && item.sourceCollection === sourceCollection)
        );

        await user.save();

        req.flash("success", `🗑️ Removed "${movieTitle}" from your Watch History`);
        res.redirect(req.get('Referer') || '/mySpace');
    } catch (err) {
        console.error("🚨 Failed to delete from watch history:", err);
        req.flash("error", "Something went wrong while removing from history.");
        res.redirect('/mySpace');
    }
}

module.exports.selectAvatar = async (req, res) => {
    res.render('pages/Extras/avatars.ejs', {
        username: req.user.username,
        email: req.user.email,
        password: null, // not needed for logged-in users
        isProfileUpdate: true // custom flag
    });
}

module.exports.updateAvatar = async (req, res) => {
    const { avatar } = req.body;
    const user = await User.findById(req.user._id);

    // 🧼 Remove old Cloudinary image if present
    if (user.avatarPublicId) {
        await cloudinary.uploader.destroy(user.avatarPublicId);
        user.avatarPublicId = null;
    }

    user.avatar = avatar; // alien avatar URL
    await user.save();

    req.flash('success', '✨ Avatar updated!');
    res.redirect('/mySpace');
}

module.exports.editProfile = async (req, res) => {
        const userId = req.user._id;
        const user = await User.findById(userId);

        if (!user) {
            req.flash('error', 'User not found!');
            return res.redirect('/edit-profile');
        }

        const { username, email } = req.body;

        user.username = username || user.username;

        // ✅ Only allow email change if not a Google user
        if (!user.googleId && email) {
            user.email = email;
        }

        if (req.file) {
            // 🗑️ Delete previous Cloudinary image (if any)
            if (user.avatarPublicId) {
                await cloudinary.uploader.destroy(user.avatarPublicId);
            }

            // ✅ Save new one
            user.avatar = req.file.path;
            user.avatarPublicId = req.file.filename;
        }

        await user.save();

        req.flash('success', 'Profile updated successfully!');
        res.redirect('/mySpace');
}

module.exports.selectTheme = async (req, res) => {
    res.render('pages/Extras/themes.ejs', { availableThemes, user: req.user });
}

module.exports.updateTheme = async (req, res) => {
    const { selectedTheme } = req.body;
    await User.findByIdAndUpdate(req.user._id, { selectedTheme });
    req.flash('success', "🪐 Welcome to your new universe, Commander!");
    res.redirect('/home_page');
}

module.exports.updateHighScore = async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const { newScore } = req.body;
    const userId = req.user._id;

    try {
        const user = await User.findById(userId);

        if (newScore > user.highScore) {
            user.highScore = newScore;
            await user.save();
        }

        res.status(200).json({ success: true, updatedScore: user.highScore });
    } catch (err) {
        console.error("Error updating high score:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}