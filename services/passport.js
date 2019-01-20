const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        //route sent to after granted permissions to application
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
          .then((existingUser) => {
            if (existingUser) {
              //we already have a record with the given profile ID
              done(null, existingUser);
              //finished o-auth process
              //null means that we're all good.
            } else {
              new User({ googleId: profile.id })
              .save()
              .then(user => done(null, user));
              //creates new instance of a user using their Google ID
              //.save() saves user to the database for us.

            }
          })
      }
    )
);
