// config/cloudinary.config.js

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  // cloudinary: cloudinary,
  cloudinary,
  params: {
    allowed_formats: ['jpg', 'png', 'pdf'],
    folder: 'profilePics',
    // resource_type: 'raw' 
    //! we can upload the image and the pdf, the path to the image is ok (on cloudinary) but the path to the pdf doesn't work
    // DONE <3
  }
});


module.exports = multer({ storage });