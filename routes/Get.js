const express = require("express");
const router = express.Router();
const User = require('../model')


// router.get("/getAll", (req, res) => {
//     console.log("get All chal raha hai")
//     var query = { name: "ali" };
//     User.find(query).then((response) => {
//         console.log('find');
//         res.json(response)

//     }).catch((e) => {

//         res.send({ message: e.message })
//     })
// })

router.get("/getAll/", (req, res) => {
    console.log("/get/:id chal raha hai", req.query)
    var query = req.query;
    User.find(query).then((response) => {
        console.log('find**');
        res.json(response)
    }).catch((e) => {

        res.send({ message: e.message })
    })
})

module.exports = router;