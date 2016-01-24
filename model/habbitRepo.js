var request = require('superagent');
var fs = require('fs');
var path = require('path');
var token = process.env.HabitToken;
var user = process.env.HabitUser;
var prefix = 'https://habitica.com/api/v2/';
var writeFileName =  path.join(path.resolve(__dirname),'habitUser.json');

function habitData() {
	//console.log('token', token);
	//console.log('user', user);

}
habitData.prototype = {
	getUser : function (cb) {
		request
			.get(prefix+'user/')
			.set('x-api-key', token)
			.set('x-api-user', user )
			.end(function(err, res){
				if (err) console.log(err);
				cb(res.res.body);
			});
	},
	saveData : function (cb) {
		this.getUser(function(userData){
			fs.writeFile(writeFileName, JSON.stringify(userData), function(err) {
				if (err) throw err
				cb(writeFileName);
			});
		});
	},
	updateUserTask : function(taskId, cb){
		var sendUpdate;

		request.get(prefix+'user/tasks/'+taskId)
			.set('x-api-key', token)
			.set('x-api-user', user )
			.end(function(err, res){
				if (err) console.log(err);
				sendUpdate(res.res.body);
			});		

		sendUpdate = function (task){
			//add entry to task
			console.log("recived task", task.history);
			task.history.push({value:2, date: new Date().getTime()});

			request.put(prefix+'user/tasks/'+taskId)
			.send(task)
			.set('x-api-key', token)
			.set('x-api-user', user )
			.end(function(err, res){
				if (err) console.log(err);
				cb(res.res.body);
			});
		}

		
	},
	getCacheUser : function (cb) {
		fs.readFile(writeFileName, (err, data) => {
		  if (err) throw err;
		  cb(JSON.parse(data));
		});
	}
}

module.exports = habitData;