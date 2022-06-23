const router = require("express").Router()
const passport = require("passport");
const {login,googleRedirect,logout} = require("../controllers/auth");

router.get('/login', login);
router.get('/logout', logout);

// conscent screen 
router.get('/google', passport.authenticate("google", {
    scope : ["email", "profile"]
}));

// callback route for google to redirect to
router.get("/google/redirect",passport.authenticate("google"), googleRedirect)


module.exports = router