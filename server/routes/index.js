var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname,'../../dist/bzs/index.html'));
  // res.sendFile(__dirname + '../../dist/bzs/index.html');
});

module.exports = router;
