(function (){
	var max = Math.max.apply(Math,data.habits.map(function(habit){return habit.history.length;}));

	var x = d3.scale.linear()
		.domain([0, max])
		.range([0, 100])

	var cnt = d3.select("#d3Container")
		.selectAll('div')
			.data(data.habits)
		.enter().append('div')
			.style('display', function(d){ return d.history.length <= 2 ? "none" : 'block' })
			.style('width', function(d, i){ return x(d.history.length) + "%"})
			.text(function(d){ return d.text + "  " + d.history.length  })
}())

