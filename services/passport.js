const keys = require("../config/keys.js");
const cookieSession = require('cookie-session');
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");
// This created a unique id for the user
passport.serializeUser((user,done)=>{
        done(null, user.id);
})
// this decodes the unique id sent from the browser
passport.deserializeUser((id, done)=>{
    User.findById(id)
        .then(user=>{
            done(null, user);
        })
})


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id})
        .then ((oldUser)=>{
            if (oldUser){
                done(null, oldUser)
            }else{
                (new User ({googleId: profile.id}))
                    .save()
                    .then(user=>done(null,user));
        }
    })

}
));