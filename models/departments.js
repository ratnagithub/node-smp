var db = require('./db.js'),
    collection = db.collection('departments');
exports.find = function(params, callback){
    collection.find(params).toArray(function(error, departments){
        if (!error) {
            callback(false, departments);
        } else {
            callback(true);
        }
    });
};