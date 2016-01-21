// Object holding objects with sheet data
// Access through database[row]["header"] e.g. database[0]["campaign"] or database[2].videolength

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var database = {};
var keys = [];

// For some reason 1%, 25%, 50%, 75%, 100% are labelled as _cre1l, _chk2m, _ciyn3, _ckd7g, _clrrx respectively
var percentagesKey = ["expandedadvisible","_cre1l", "_chk2m", "_ciyn3", "_ckd7g", "_clrrx"];

// Google sheets API, requires published Google sheet
var jsonpCallback = function(data) {
	

	for (var i = 0; i < data.feed.entry.length; i+=1) {
		for (var j in data.feed.entry[i]) {
			if (j.indexOf('$') !== -1) {
				
				j = (j.substring(j.indexOf('$') + 1, j.length));
				if (keys.indexOf(j) === -1) {
					keys.push(j);
					
				}
			}
		}						
	}				

	for (var i = 0; i < data.feed.entry.length; i+=1) {
		database[i] = {};

		for (var j = 0; j < keys.length; j+=1) {
			database[i][keys[j]] = data.feed.entry[i]['gsx$' + keys[j]]['$t'];
		}
	}
	// console.table(database);
	// Fills in graphData object with properly organised data and labels
	var fillGraphData = function() {
		var len = objectLength(database);

		
		
		for (var i=0; i < len; i++) {

			var rowEntry = database[i];	
			var entry = {

				label: rowEntry.campaign,
				// fillColor: "rgba(220,220,220,0.2)",
	   //          strokeColor: "rgba(220,220,220,1)",
	   //          pointColor: "rgba(220,220,220,1)",
	   //          pointStrokeColor: "#fff",
	   //          pointHighlightFill: "#fff",
	   //          pointHighlightStroke: "rgba(220,220,220,1)",
	            data: []

			};
			for (var key in rowEntry) {
				// console.log(key);
				if (percentagesKey.indexOf(key) !== -1) {
							
					entry.data.push(parseFloat(rowEntry[key]));
				}
			}	
			graphData.datasets.push(entry);
		}
	};

	var graphData = {
		labels: ["Expanded Ad Visible", "1%", "25%", "50%", "75%", "100%"],
		datasets: []
	};
	fillGraphData();
	var myChart = new Chart(ctx).Line(graphData);
};




// Finds number of entries in database collection of objects
var objectLength = function(object) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};

// Data has to be in the following form to work with ChartJS
// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.2)",
//             strokeColor: "rgba(220,220,220,1)",
//             pointColor: "rgba(220,220,220,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.2)",
//             strokeColor: "rgba(151,187,205,1)",
//             pointColor: "rgba(151,187,205,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// };

// Data for ChartJS




