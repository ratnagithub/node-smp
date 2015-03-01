var mongoskin = require('mongoskin'),
    dbHost = '127.0.0.1',
    dbPort = '27017',
    dbName = 'smp';

module.exports = mongoskin.db('mongodb://'+dbHost+':'+dbPort+'/'+dbName, {safe:true})