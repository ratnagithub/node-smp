'use strict';
var mongoose = require('mongoose');
var departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hod: String,
    nos: Number
});
module.exports = mongoose.model('departments', departmentSchema);