require('./style.scss')
//libaries
var http = require('superagent');
//coponents
var Chart = require('./chart');
var TaskManager  = require('./taskManager');
//variables
var apiUrl = "api";

//grab my data and pass it to the components
var req = http.get(apiUrl).end(function(err, resp){
	var data = resp.body;
    var chart = new Chart(data);
    var myTasks = new TaskManager(data);
});
