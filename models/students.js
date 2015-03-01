var db = require('./db.js'),
    collection = db.collection('students');
exports.find = function(params, callback){
    collection.find(params).toArray(function(error, students){
        if (!error) {
            callback(false, students);
        } else {
            callback(true);
        }
    });
};
exports.save = function(data, callback){
    collection.insert(data, function(error, response){
        if (!error) {
            callback(false, response);
        } else {
            callback(true);
        }
    });
};
exports.remove = function(id, callback){
    collection.removeById(id, function(error, response){
        if (!error) {
            callback(false, response);
        } else {
            callback(true);
        }
    });
}