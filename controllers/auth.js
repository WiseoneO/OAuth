const User = require("../model/User")
exports.login = async (req, res) => {
    res.render('login');
}

exports.logout = async (req, res) => {
    // handle with passport
    res.send(`<h3>Logging out</h3>`)
}
exports.googleRedirect = async (req, res) => {
    res.send(`<h2>You've reached a call back uri</h2>`)
}



