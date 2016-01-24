require('./style.scss');
var React = require('react')
var ReactDOM = require('react-dom')


var TaskManager = React.createClass({
	getInitialState: function() {
		return { data:{}, liked: true};
	},
	handleClick: function(event) {
		this.setState({liked: !this.state.liked});
	},
	render: function() {
		var text = this.state.liked ? 'liked' : 'haven\'t liked';

		return (
				<ul>
					{this.props.data.habits.map(function(habit) {
						return <Task key={habit.id} name={habit.text} />
					})}
				</ul>
		)
	}
})

var Task = React.createClass({
	render: function(){
		return <li>
			{this.props.name}
		</li>
	}
})


var init = function (data){
	ReactDOM.render(
		<TaskManager name="Ryan" data={data} />, document.getElementById('taskManager')
	)
}

module.exports = init


