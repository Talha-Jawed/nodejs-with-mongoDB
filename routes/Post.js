exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const User = require('../model');


    router.post("/add", (req, res) => {
        const user = new User.User(req.body)

        user.save()
            .then((success) => {
                res.send(success)
            })
            .catch(e => {
                res.send(500, { message: e.message })
            })

    })

    app.use('/post', router)

}