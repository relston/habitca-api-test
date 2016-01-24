var express = require('express');
var router = express.Router();
var Habit = require('../model/habbitRepo');
var habitData = new Habit();


/* GET home page. */
router.get('/', function(req, res, next) {
	habitData.getCacheUser(function(user){
		res.json(user);		
	})
});
router.put('/:taskId', function(req, res, next) {
	var taskId = req.params.taskId;
	habitData.updateUserTask(taskId, function(task){
		res.json(task);		
	});
});

module.exports = router;