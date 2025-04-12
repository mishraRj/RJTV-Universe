const Review = require('./models/review');
const { reviewSchema } = require('./schema');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;  // ✅ Always store original URL
        req.session.showSignUpPopup = false;  // ✅ Enable signup popup
        req.session.showLoginPopup = true;   // ✅ Enable login popup
        req.flash("error", "You Must Be Logged In To Travel Further in Universe!");
        return res.redirect('/login');  // ✅ Redirect to home where popup will show
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;  // ✅ Ensure locals have the correct redirect
    }
    next();
};

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    next();
};

module.exports.isReviewAuthor = async(req, res, next) => {
    let {id, reviewId} = req.params;  // Get the listing ID from the URL parameters
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to perform this action!")
        return res.redirect(`/home_page/${id}`);
    }
    next();
}