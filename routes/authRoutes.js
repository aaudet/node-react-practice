const passport = require('passport');

module.exports = app => {

    app.get('/auth/google/',
        passport.authenticate('google', {
      //when accessing this part, use passport to authenticate google user
      //using our givens strategy
        scope: ['profile', 'email']
      //specifies to google servers for users profile and email address
      //Google has their own list of permissions, etc. super awesome
      })
  );

app.get('/auth/google/callback', passport.authenticate('google'));
//makes new instance of user getting authetnicated
//.use just makes passport using a particular strategy
};
