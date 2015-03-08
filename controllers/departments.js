'use strict';
var express = require('express'),
    router = express.Router(),
    departmentModel = require('../models/departments.js'),
    helper = require('../helpers');

router.use(helper.authentication);

router.get('/', function(req, res) {    
    departmentModel.find({}, function(error, departmentsData){
        if(!error){
            res.render('departments/index', 
                {
                    'msg': 'Here you will see the list of all departments',
                    'departments': departmentsData
                }
            );
        }
    });
});
module.exports = router;