exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const User = require('../model');
    var cloud = require('../config/CloudinaryConfig');
    var multer = require('multer')
    var upload = multer()

    var createApp = (req, res) => {
        try {
            var imageDetails = {
                imageName: req.body.imageName,
            }
            //USING MONGO METHOD TO FINE IF IMAGE-NAME EXIST IN THE DB
            User.ImageUpload.find({ imageName: imageDetails.imageName }, (err, callback) => {
                //CHECKING IF ERROR OCCURRED      
                if (err) {
                    res.json({
                        err: err,
                        message: 'there was a problem uploading image'
                    })
                } else if (callback.length >= 1) {
                    res.json({
                        message: 'file already exist'
                    })
                } else {
                    var imageDetails = {
                        imageName: req.body.imageName,
                        cloudImage: req.files[0].path,
                        imageId: ''
                    }
                    // IF ALL THING GO WELL, POST THE IMAGE TO CLOUDINARY
                    cloud.uploads(imageDetails.cloudImage).then((result) => {
                        var imageDetails = {
                            imageName: req.body.imageName,
                            cloudImage: result.url,
                            imageId: result.id
                        }
                        //THEN CREATE THE FILE IN THE DATABASE
                        User.ImageUpload.create(imageDetails, (err, created) => {
                            if (err) {
                                res.json({
                                    err: err,
                                    message: 'could not upload image, try again'
                                })
                            } else {
                                res.json({
                                    created: created,
                                    message: "image uploaded successfully!!"
                                })
                            }
                        })
                    })
                }
            });
        } catch (execptions) {
            console.log("execptions", execptions)
        }
    }

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                cb(null, './');
            } else {
                cb({ message: 'this file is neither a video or image file' }, false)
            }
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
    var upload = multer({ storage: storage });

    router.post("/Image", upload.any(), createApp, (req, res) => {
        console.log("-=-=-=-=");

    });

    app.use('/Upload', router)
}