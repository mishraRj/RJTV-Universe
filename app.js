if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ExpressError = require("./utils/ExpressError.js");
const Channel = require('./models/channels');
const movies = require('./routes/movies.js');
const methodOverride = require("method-override");  // Allows overriding of HTTP methods (PUT, DELETE)
const ejsMate = require("ejs-mate");  // EJS engine with extended functionality
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js')
const userRouter = require('./routes/userRoute.js');
const generalRouter = require('./routes/generalRoute.js');
require("./config/passportGoogle.js"); // Load Google Auth Strategy

const app = express();
const port = 3000;
const dbUrl = process.env.ATLASDB_URL;

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
})

store.on("error", () => {
    console.log("ERROR ON MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 15 * 24 * 60 * 60 * 1000,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}

app.use(session(sessionOptions));
app.use(flash());

//basic connection code of mongoose
async function main() {
    await mongoose.connect(dbUrl);
    console.log("✅ Connected to DB");
}

// ✅ Call the `main` function
main().catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
});

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// ✨ Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.redirect("/home_page");
});


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

// ✅ Middleware ko routes ke pehle define 
app.use(async (req, res, next) => {
    try {
        const channels = await Channel.find();
        res.locals.rjtvShows = channels.find(ch => ch.title === "RJTV Shows"); 
        res.locals.success = req.flash("success");
        res.locals.error = req.flash("error");
        res.locals.currUser = req.user;
        res.locals.currentUrl = req.path;
        res.locals.themeUrl = req.user?.selectedTheme || 'https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Themes/neonUniverse.webp';
        // ✅ Flash ke zariye popups ko control karne ke liye new flash messages set karenge
        res.locals.showSignUpPopup = req.flash("showSignUpPopup").length > 0;
        res.locals.showLoginPopup = !req.isAuthenticated() && req.flash("showLoginPopup").length > 0;
        // ✅ If user is logged in, reset login popup session variable
        if (req.isAuthenticated()) {
            req.session.showLoginPopup = false;
        }

    } catch (err) {
        console.error("❌ Error fetching channels:", err);
        res.locals.rjtvShows = null; // Error handle karne ke liye fallback
    }
    next();
});

app.use('/home_page', movies);
app.use('/', userRouter);
app.use('/', generalRouter);

// Catch-all route for undefined paths (404 error)
app.all("*", (req, res, next) => {
    req.flash("error", "🚀 Error 404: Cosmic Rift Detected! 🌌💥");  // Set the flash message
    res.redirect('/home_page');
});

// Global error handling middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong :(" } = err;  // Set default error values
    // Set a flash error message before rendering the error page
    req.flash("error", message);
    // Render the error page with the flash message
    res.status(statusCode).render("error.ejs", { message: req.flash("error") });
});

app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})