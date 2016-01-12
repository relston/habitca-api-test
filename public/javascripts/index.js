(function (){
	var x = d3.scale.linear()
		.domain([0, 9])
		.range([0, 100])

	var cnt = d3.select("#d3Container")
		.selectAll('div')
			.data(data.habits)
		.enter().append('div')
			.style('width', function(d, i){ return x(d.history.length) + "%"})
			.text(function(d){ return d.text + "  " + d.history.length  })
}())

