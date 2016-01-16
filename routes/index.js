var express = require('express');
var router = express.Router();
var Habbit = require('../model/habbitRepo');
var habbitData = new Habbit();


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Habits'} );		
});

module.exports = router;
