(function (d3){
	var widthPcnt = 100;
	var barHeight = 20;
	var apiUrl = "api";

	function renderChart(data) {
		var max = Math.max.apply(Math,data.habits.map(function(habit){return habit.history.length;}));
		var d3Scaler = d3.scale.linear()
			.domain([0, max])
			.range([0, 100])

		var chart = d3.select('.chart')
			.attr('width', widthPcnt+"%")
			.attr('height', barHeight * data.habits.length);

		var bar = chart.selectAll("g")
			.data(data.habits)
		.enter().append('g')
			.attr("transform", function (d, i){ return "translate(0,"+ i * barHeight +")"; });

		bar.append("rect")
			.attr("width", function (d, i ) { return d3Scaler(d.history.length) + "%"; } )
			.attr('height', barHeight - 1);

		bar.append('text')
			.attr('x', function (d){ return (d3Scaler(d.history.length) - 1) +  "%" })
			.attr('y',  barHeight /2)
			.attr("dy", ".35em")
			.text(function(d) { return d.text + " " + d.history.length });
	}
	d3.json(apiUrl, renderChart);
	
	var button = document.getElementById('doit');
	button.addEventListener('click', function(e){
		//data.habits[0].text = "This was just changed";
	});

}(d3))

