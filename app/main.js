require('./style.scss')
//libaries
var http = require('superagent');
//coponents
var Chart = require('./chart');
var TaskManager  = require('./taskManager');
//variables
var apiUrl = "api";
var self = this;

//update method
this.didHabit = function (id) {
	console.log("this is happening", id);
	http.put(apiUrl+"/"+id).end(function(err, resp){
		console.log(resp.text);
	});
}


//grab my data and pass it to the components
http.get(apiUrl).end(function(err, resp){
	var data = resp.body;
    var chart = new Chart(data);
    var myTasks = new TaskManager(data);
    myTasks.on('didHabit', function(id){ 
    	self.didHabit(id);
    });
});


