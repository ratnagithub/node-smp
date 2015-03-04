var express = require('express'),
    router = express.Router(),
    usersModel = require('../models/users.js'),
    helper = require('../helpers');

router.get('/login', function(req, res) {
    res.render('users/login');
});
router.post('/login', function(req, res) {
    var data = {
        'login': req.body.login,
        'password': req.body.password
    };
    usersModel.login(data, function(error, response){
        if(!error && response){
            req.session.user = response;
        }
        res.redirect('/');
    });
    
});
router.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});
module.exports = router