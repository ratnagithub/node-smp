var mongoskin = require('mongoskin'),
    dbHost = '127.0.0.1',
    dbPort = '27017',
    dbName = 'smp';
try{
    module.exports = mongoskin.db('mongodb://'+dbHost+':'+dbPort+'/'+dbName, {safe:true});
}catch(e){
    throw new Error('Error: '+ e);
}