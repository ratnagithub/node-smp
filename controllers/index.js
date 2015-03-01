var express = require('express')
  , router = express.Router();

router.use('/students', require('./students'))
router.use('/departments', require('./departments'))

router.get('/', function(req, res) {
    res.redirect('/students');
});
module.exports = router