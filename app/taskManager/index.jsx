require('./style.scss');
var React = require('react')
var ReactDOM = require('react-dom')
var PubSub = require("event-pubsub");

//vars
var emiter;

var Task = React.createClass({
	didToday: function (history){
		var latest =  Math.max.apply(Math, history.map(function(time){return time.date;}));
		var latestDate = new Date(latest);
		var today =  new Date(new Date().setHours(0));
		console.log(this.props.name +" is "+today<latestDate);
		return today<latestDate;
	},
	handleClick: function(event) {
		emiter.trigger('didHabit', this.props.id);
	},
	render: function(){
		var selected = this.didToday(this.props.history) ? "selected" : "";

		return <li className={selected} onClick={this.handleClick}> 
			{this.props.name}
		</li>
	}
});

module.exports = function (data){
	
	ReactDOM.render(
		<ul>
			{data.habits.map(function(habit) {
				return <Task key={habit.id} id={habit.id} name={habit.text} history={habit.history}  />
			})}
		</ul>, 
		document.getElementById('taskManager')
	)

	emiter = new PubSub();
	return emiter;
}


