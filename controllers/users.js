'use strict';
var usersModel = require('../models/users.js');
exports.login = function(req, res) {
    res.render('users/login');
};
exports.logincheck = function(req, res) {
    var data = {
        'login': req.body.login,
        'password': req.body.password
    };
    usersModel.login(data, function(error, user){
        if (!error && user) {
            req.session.user = user;
            res.redirect('/');
        } else {
            res.redirect('/users/login');
        }
    });
};
exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};