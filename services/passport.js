const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
  //refers to the mongoid in the collection
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
  //lecture 41 1:32
});

passport.use(
  new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
        //route sent to after granted permissions to application
        //Lecture 51 4:00
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((existingUser) => {
            if (existingUser) {
              //we already have a record with the given profile ID
              done(null, existingUser);
              //finished o-auth process
              //null means that we're all good.
            } else {
              new User({ googleId: profile.id }).save().then(user => done(null, user));
              //creates new instance of a user using their Google ID
              //.save() saves user to the database for us.

            }
          })
      }
    )
);
