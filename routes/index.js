// const express = require('express');
// const route = express.Router();

// route.use('/post', require('./Post'));

// route.use('/get', require('./Get'));

// module.exports = route;


exports = module.exports = function (app) {
    require('./Post')(app)
    require('./Update')(app)
}