const passport = require('passport');

module.exports = app => {
    //route for auth
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    //route for response of auth
    app.get('/auth/google/callback', passport.authenticate('google'));

    //route to logout
    app.get('/api/logout', (req,res) => {
        req.logout();
        res.send(req.user);
    });

    //route for logged in user
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
