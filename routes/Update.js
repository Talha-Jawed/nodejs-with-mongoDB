exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const User = require('../model');

    router.put("/add/:id", (req, res) => {
        console.log(req.params, '-=-=-=');

        User.updateMany(
            { _id: req.params.id },
            {
                $set: req.body
            },
            (err, result) => {
                console.log(err, '*/*/*/*', req.body);

                res.send(req.body);
            });
    })

    app.use('/Update', router)

}

