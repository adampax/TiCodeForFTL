// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var xhr = require('xhr');
var Papa = require('papaparse.min');
var Map = require('ti.map');

var ROUTES = require('routes');

//iniate the fetch of route data 
xhr.send({
	url : 'https://raw.githubusercontent.com/qtrandev/suntrolleygtfs/master/shapes.txt',
	method : 'GET',
	success : loadRoutes,
	error : function(err) {
		console.log(err);
		alert('Something happened when retrieving the map annotations');
	}
});

function loadRoutes(raw) {
	var data = parseCSV(raw);

	ROUTES.forEach(function(route) {
		var arr = [];

		//build the point data for each route and add to the map as a polyline
		data.forEach(function(val) {
			if (parseInt(route.route_id) === parseInt(val.shape_id)) {
				arr.push([val.shape_pt_lon, val.shape_pt_lat]);
			}
		});

		addPolyline({
			points : arr,
			strokeColor : route.route_color
		});
	});
}

function addPolyline(obj) {

	var line = Map.createPolyline(_.extend({
		strokeWidth : 3
	}, obj || {}));
	$.mapview.addPolyline(line);

}

function parseCSV(csv) {
	// Parse CSV string
	var data = Papa.parse(csv, {
		header : true,
		skipEmptyLines : true
	});

	return data.data;
}


function closeWindow() {
	$.win.close();
}

/**
 * make the remote call 
 */
function fetchTrolleys() {
	xhr.send({
		url : 'http://suntrolley.herokuapp.com/api',
		method : 'GET',
		success : loadTrolleys,
		error : function(err) {
			console.log(err);
			alert('Something happened when retrieving the trolley data');
		}
	});
}

/**
 * Upon success fetching of live trolley data, add annotations to the map
 * @param {Array} data response data from trolley api 
 */
function loadTrolleys(data){
	var points = _.chain(data)
			.pluck('points')
			.flatten()
			.value();
	
	$.mapview.removeAllAnnotations();
	
	points.forEach(function(pt){
		var arr = pt.split(',');
		addTrolleyAnnotation({
			latitude: arr[0],
			longitude: arr[1]
		});
	});
	
	//set a refresh to get new data
	setTimeout(fetchTrolleys, 20000);
	
}

function addTrolleyAnnotation(obj){
	$.mapview.addAnnotation(Map.createAnnotation({
		latitude : obj.latitude,
		longitude : obj.longitude,
		//title : pt.properties.descriptio || 'No Description',
		//subtitle : 'Mountain View, CA',
		pincolor : Map.ANNOTATION_GREEN
	}));
}

fetchTrolleys();

