exports = module.exports = function (app) {
    const express = require("express");
    const router = express.Router();
    const User = require('../model');

    router.put("/add", (req , res)=>{
        console.log(res,'-=-=-=');
        
        User.update(
            { _id: "5decbb064ee4f8269c9f14d1" },
            {
                $set:
                    { name: "ali" , "age": "12456" }
            },
            (err, result) => {
                console.log(err, '*/*/*/*', result);

                res.send(result);
            });
    })

    app.use('/Update', router)

}


// not complete...