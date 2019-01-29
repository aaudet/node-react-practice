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

app.get('/api/logout', (req, res) => {
  req.logout();
  res.send(req.user);
  //Lecture 44, section 4
});

app.get('/api/current_user', (req, res) => {
    res.send(req.user);
    //Lecture 43 4:00
});

};
