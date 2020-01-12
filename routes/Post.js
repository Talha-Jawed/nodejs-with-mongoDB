// const express = require("express");
// const router = express.Router();
// const User = require('../model')
// // const hash = require('bcrypt')


// // router.post('/register' , (req, res)=>{
// //     const user = req.body;
// //     const hash = hash()
// // })

// router.post("/add", (req, res) => {
//     console.log("add request chal rahi hai****");
//     console.log(res);
//     const user = new User(req.body)

//     user.save()
//         .then((success) => {
//             // res.send(success)
//             User.find().then((response) => {
//                 console.log('find**');
//                 res.send(response)
//             }).catch((e) => {

//                 res.send({ message: e.message })
//             })
//         })
//         .catch(e => {
//             res.send(500, { message: e.message })
//         })

// })


// module.exports = router;

exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const User = require('../model');


    router.post("/add", (req, res) => {
        console.log("add request chal rahi hai****");
        const user = new User(req.body)

        user.save()
            .then((success) => {
                // res.send(success)
                User.find().then((response) => {
                    console.log('find**');
                    user.update(
                        { _id: "5decbb064ee4f8269c9f14d1" },
                        {
                            $set:
                                { name: "ali" , "newName": "12456" }
                        },
                        (err, result) => {
                            console.log(err, '*/*/*/*', result);

                            // res.send('user updated sucessfully');
                        });
                    res.send(response)
                }).catch((e) => {

                    res.send({ message: e.message })
                })
            })
            .catch(e => {
                res.send(500, { message: e.message })
            })

    })

    app.use('/post', router)

}