var db = require('./db.js'),
    collection = db.collection('users');
exports.login = function(params, callback){
    var query = { $and: [
            {'login':params.login},
            {'password':params.password}
        ]
    };
    collection.findOne(query, function(error, user){
        if (!error) {
            callback(false, user);
        } else {
            callback(true);
        }
    });
};