const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv');
dotenv.config();

// models 
const User = require('../models/users');
// console.log(process.env.DB_STRING)
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_LOGIN_CLIENT_ID,
    clientSecret: process.env.GOOGLE_LOGIN_SECRET_ID,
    callbackURL: process.env.GOOGLE_LOGIN_CALLBACK_URL
}, ((accessToken,refreshToken,profile,done)=>{
    const data = profile._json;
    console.log(profile)
     console.log(data);
})));

module.exports = passport;

