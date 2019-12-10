const express = require("express");
const router = express.Router();
const User = require('../model')


router.get("/getAll", (req, res) => {
    console.log("get All chal raha hai")

    User.find({}).then((response) => {
        console.log('find');
        res.json(response)

    }).catch((e) => {

        res.send({ message: e.message })
    })
})

// router.get("/get/:id", (req, res) => {
//     console.log("/get/:id chal raha hai", req.params.id)
// })

module.exports = router;