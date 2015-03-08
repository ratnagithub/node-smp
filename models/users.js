'use strict';
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.static({
    login: function(params, callback){
        var query = { $and: [
                {'login':params.login},
                {'password':params.password}
            ]
        };
        this.findOne(query, function(error, user){
            if (!error) {
                callback(false, user);
            } else {
                callback(true);
            }
        });
    }
});
module.exports = mongoose.model('users', userSchema);