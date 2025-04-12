const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// 🔐 Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// 📦 Define storage for avatars
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'RJTV-Avatars',
        allowed_formats: ['jpeg', 'png', 'jpg', 'webp']
    }
});

module.exports = {
    cloudinary,
    storage
};
