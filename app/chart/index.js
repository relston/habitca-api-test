require('./style.scss');
var d3 = require('d3');


function renderChart(data) {
	var widthPcnt = 100;
	var barHeight = 20;
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
function renderVertChart(data) {
	var widthPcnt = 100;
	var height = 400;
	var barHeight = 300;
	var barwidth = widthPcnt / data.habits.length;
	var gutter = .2;
	

	var max = Math.max.apply(Math,data.habits.map(function(habit){return habit.history.length;}));
	var barHeightScaler = d3.scale.linear()
		.domain([0, max])
		.range([0, barHeight])

	var chart = d3.select('.chart')
		.attr('width', widthPcnt+"%")
		.attr('height', height);

	var bar = chart.selectAll("g")
		.data(data.habits)
	.enter().append('g')
		.attr("transform", function (d, i){ return ""; });  // translate("+ (i * barwidth) +"% , 0)

	function barXFunc (d, i) { return (i * barwidth)+"%" ; }
	function barHeightFunc (d, i){ return barHeightScaler(d.history.length); }

	bar.append("rect")
		.attr("width", (barwidth-gutter) +"%" )
		.attr('height', barHeightFunc )
		.attr('x', barXFunc)
		.attr('y', function (d, i){ return barHeight - barHeightFunc(d,i); });
		
	bar.append('svg')
		.attr('x', barXFunc )
		.attr('y',  barHeight )
		//.attr('width', '100%')
		//.attr('height', '100%')
		.append('text')
			.attr('x', 10)
			.attr('transform', function (d, i) { return 'rotate(30)'; } )
			//.attr("dy", "1em")
			.text(function(d) { return d.history.length + "  "  + d.text  });
}


module.exports = function (data) {
	if (data) {
		renderVertChart(data);	
	} else {
		console.error("CHART: No data");
	}
	
}
