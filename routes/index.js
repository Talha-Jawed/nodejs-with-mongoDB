exports = module.exports = function (app) {
    require('./Post')(app)
    require('./Update')(app)
    require('./Get')(app)
    require('./GetOffset')(app)
    require('./Login')(app)
    require('./SignUp')(app)
    require('./NodeMailer')(app)
};