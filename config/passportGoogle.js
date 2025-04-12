const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");
const cloudinary = require("cloudinary").v2;
const axios = require("axios");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// 👇 Upload Google avatar to Cloudinary
async function uploadToCloudinary(imageUrl) {
    try {
        const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
        const base64Image = Buffer.from(response.data).toString('base64');
        const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${base64Image}`);
        return result; // Contains secure_url & public_id
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        return null;
    }
}

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `${process.env.BASE_URL}/auth/google/callback`,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // ✅ First check by googleId
                let user = await User.findOne({ googleId: profile.id });

                // 🔁 If not found, fallback to email
                if (!user) {
                    user = await User.findOne({ email: profile.emails[0].value });

                    if (user) {
                        // 🧠 Link Google account to existing user
                        user.googleId = profile.id;
                        await user.save();
                    } else {
                        // 🆕 New user via Google
                        const defaultAvatar = "https://res.cloudinary.com/dsa8vlzig/image/upload/v1743603286/2_rgilma.jpg";
                        let googleAvatar = profile.photos.length
                            ? profile.photos[0].value.replace("s96-c", "s400-c")
                            : defaultAvatar;

                        let cloudinaryResult = null;

                        if (googleAvatar !== defaultAvatar) {
                            cloudinaryResult = await uploadToCloudinary(googleAvatar);
                        }

                        user = new User({
                            googleId: profile.id,
                            username: profile.displayName,
                            email: profile.emails[0].value,
                            avatar: cloudinaryResult ? cloudinaryResult.secure_url : defaultAvatar,
                            avatarPublicId: cloudinaryResult ? cloudinaryResult.public_id : null,
                        });

                        await user.save();
                    }
                }

                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);
