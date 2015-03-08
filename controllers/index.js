'use strict';
var express = require('express'),
    router = express.Router();

router.use('/students', require('./students'));
router.use('/departments', require('./departments'));
router.use('/users', require('./users'));

router.get('/', function(req, res) {
    res.redirect('/students');
});
module.exports = router;