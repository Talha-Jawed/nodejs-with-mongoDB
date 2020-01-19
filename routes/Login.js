exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const User = require('../model');


    router.post("/Login", (req, res) => {
        // console.log("TCL: exports -> req", req.body)

        User.User.findOne(req.body, function (err, user) {
            console.log(user, "TCL: exports -> err", err)
            if(user){
                res.send(user)
            }else{
                res.send('user does not exit') 
            }

        }).exec()
            // .then(success => {
            //     res.send(success)
            // })
            // .catch(e => {
            //     res.send(500, { message: e.message })
            // })



    })

    app.use('/Admin', router)

}