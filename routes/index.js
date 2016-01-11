var express = require('express');
var router = express.Router();
var Habbit = require('../model/habbitRepo');
var habbitData = new Habbit();


/* GET home page. */
router.get('/', function(req, res, next) {
	habbitData.getCacheUser(function(user){
		res.render('index', { title: 'Habits', user : user});		
	})
});

module.exports = router;
