'use strict';
var studentModel = require('../models/students.js');

exports.index = function(req, res) {
    var params = {};
    if(req.body.search) {
        var search = req.body.search;
        params = {$or: [{"name": search}, {"department": search}, {"email": search}]};
    }
    studentModel.find(params, function(error, studentsData){
        if(!error){
            res.render('students/index', 
                {
                    'msg': 'Welcome to the Students Management Portal',
                    'students': studentsData
                }
            );
        }
    });
};
exports.add =  function(req, res) {
    res.render('students/add');
};
exports.save = function(req, res) {
    var data = req.body;
    studentModel.create(data, function(error, response){
        if(!error){
            console.log(response);
        } else {
            console.log(error.message);
        }
    });    
    res.redirect('/');
};
exports.remove =  function(req, res) {
    if(!req.params.id){
        new Error('No ID passed');
    }
    var id = req.params.id;
    studentModel.findByIdAndRemove(id, function(error, response){
        if(!error){
            console.log(response);
        }
        res.redirect('/');
    });
};