const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//authorization
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access Token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile: ', profile);
}));

//route for auth
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

//route for response of auth
app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = process.env.PORT || 5000;
app.listen(PORT);