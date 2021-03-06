exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const User = require('../model');

    router.get("/getAll", (req, res) => {
        User.User.find()
            .then((resp => {
                res.send(resp)
            })).catch(e => {
                res.send(500, { message: e.message })
            })
    });

    app.use('/Get', router)
}