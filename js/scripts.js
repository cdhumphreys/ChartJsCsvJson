var data = {
	labels: ["Expanded Ad Visible", "1%", "25%", "50%", "75%", "100%"],
	datasets: [
		{
			label: "Bacardi Untameable Bats", 
			fillColor: "rgba(220,220,220,0.2)",
	        strokeColor: "rgba(220,220,220,1)",
	        pointColor: "rgba(220,220,220,1)",
	        pointStrokeColor: "#fff",
	        pointHighlightFill: "#fff",
	        pointHighlightStroke: "rgba(220,220,220,1)",
	        data: [33.16, 17.49, 11.48, 9.42, 8.19]
		},
		{
			label: "Air New Zealand",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [63.42, 28.07, 17.82, 14.57, 9.66]
		}
	]
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var myChart = new Chart(ctx).Line(data);