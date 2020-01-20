exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const jwt = require("jsonwebtoken");
    const bcrypt = require("bcryptjs");
    const User = require('../model');


    router.post("/SignUp", async (req, res) => {
        // console.log("TCL: exports -> req", req.body)
        const { name, email, password } = req.body;
        const user = new User.SignUp({
            name,
            email,
            password
        })
        User.SignUp.findOne({email}, async (err, userdb) => {
            if (!userdb) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);
                await user.save()
                    .then((success) => {
                        res.send(success)
                    })
                    .catch(e => {
                        res.send(500, { message: e.message })
                    })
            } else {
                res.send('Email Already Exists')
            }
        })

    })

    app.use('/Admin', router)

}