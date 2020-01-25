exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const bcrypt = require("bcryptjs");
    const jwt = require("jsonwebtoken");
    const User = require('../model');


    router.post("/Login", async (req, res) => {
        const { name, email, password } = req.body;
        User.SignUp.findOne({ email, name }, async (err, userdb) => {
            if (userdb) {
                const isMatch = await bcrypt.compare(password, userdb.password);
                if (!isMatch) {
                    return res.send('Incorrect Password !')
                }

                const payload = {
                    user: {
                        id: userdb._id
                    }
                };
                jwt.sign(payload,
                    "randomString", {
                    expiresIn: 10000
                },
                    (err, token) => {
                        const data = {
                            id: userdb._id,
                            name: userdb.name,
                            email: userdb.email,
                            password: userdb.password,
                            token: token,
                        }
                        if (err) throw err;
                        res.status(200).send(data)

                    })
            } else {
                res.send('user does not exit')
            }

        }).exec()

    })

    app.use('/Admin', router)

}