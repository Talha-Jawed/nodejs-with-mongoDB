exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const nodemailer = require("nodemailer");

    router.post("/sent", (req, res) => {
        const { to, subject, text } = req.body;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'jawedtalha0@gmail.com',
                pass: 'fvgvbmzpphzaxhsa'
            }
        });

        var mailOptions = {
            from: 'jawedtalha0@gmail.com',
            to: to,
            subject: subject,
            text: text
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.send("Error")
            } else {
                res.send(info)
            }
        });
    })

    app.use('/post', router)

}