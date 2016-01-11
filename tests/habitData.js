var expect = require('expect.js');
var fs = require("fs");
var HabitRepo = require('../model/habbitRepo');
var habitRepo = new HabitRepo();

describe("User Repo", function(){
	this.timeout(5000);
	it("should pull data from API", function (done){
		habitRepo.getUser(function(userData){
			expect(userData).not.to.be(undefined);
			done();
		});
	});
	it("should save pulled data into a file", function (done){
		habitRepo.saveData(function(filePath){
			fs.access(filePath, fs.F_OK, function(err){
				expect(err).to.be(null);
				console.log("It saved!")
				done();
			})
		});
	})
	it("should pull saved data from file", function (done){
		habitRepo.getCacheUser(function(userData){
			expect(userData).not.to.be(null);
			expect(userData.habits).to.be.an('array');
			done();

		});
	})
});