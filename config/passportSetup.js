const User = require("../model/User")
const dotenv = require("dotenv");
dotenv.config();

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
    new GoogleStrategy({
        // options for the strategy
        clientID:     process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/redirect"
    }, (accessToken, refreshToken,email,  profile, done) => {
        // check if user already exist in our database
         User.findOne({googleId : profile.id}).then(currentUser=>{
            if(currentUser){
                console.log(`You already have an account. Please login in to continue ` + currentUser);
            }else{
                new User({
                    username : profile.displayName,
                    googleId : profile.id
                }).save().then(result=>{
                    console.log(`new user created ` + result)
                })
            }
         })
        
    })
)
