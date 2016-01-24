require('./style.scss');
var React = require('react')
var ReactDOM = require('react-dom')
var PubSub = require("event-pubsub");

//vars
var emiter;

var Task = React.createClass({
	handleClick: function(event) {
		emiter.trigger('didHabit', this.props.id);
	},
	render: function(){
		return <li onClick={this.handleClick}> 
			{this.props.name}
		</li>
	}
});

module.exports = function (data){
	ReactDOM.render(
		<ul>
			{data.habits.map(function(habit) {
				return <Task key={habit.id} id={habit.id} name={habit.text}  />
			})}
		</ul>, 
		document.getElementById('taskManager')
	)

	emiter = new PubSub();
	return emiter;
}


