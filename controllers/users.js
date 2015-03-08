'use strict';
var express = require('express'),
    router = express.Router(),
    usersModel = require('../models/users.js');

router.get('/login', function(req, res) {
    res.render('users/login');
});
router.post('/login', function(req, res) {
    var data = {
        'login': req.body.login,
        'password': req.body.password
    };
    usersModel.login(data, function(error, user){
        if(!error && user.id){
            req.session.user = user;
        }
        res.redirect('/');
    });
    
});
router.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});
module.exports = router;