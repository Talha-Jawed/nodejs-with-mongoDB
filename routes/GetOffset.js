exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const User = require('../model');


    router.get("/DataLimit/:offSet", (req, res) => {
        User.User.find().skip(Number(req.params.offSet)).limit(5)
            .then((resp => {
                res.send(resp)
            })).catch(e => {
                res.send(500, { message: e.message })
            })

    })

    app.use('/Get', router)

}