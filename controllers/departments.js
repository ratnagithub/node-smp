'use strict';
var departmentModel = require('../models/departments.js');


exports.index = function(req, res) {    
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
};