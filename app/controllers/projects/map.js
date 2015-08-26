var args = arguments[0] || {};

//We would probably want to handle this in a library

var xhr = require('xhr');
var Map = require('ti.map');

xhr.send({
	url : 'https://raw.githubusercontent.com/CodeForFtL/ftlviz/master/cip_projects_pt.geojson',
	method : 'GET',
	success : addPointsToMap,
	error : function(err) {
		console.log(err);
		alert('Something happened when retrieving the map annotations');
	}
});

/**
 * Upon success fetching of points data, add it to a map with this callback
 * @param {Object} obj
 */
function addPointsToMap(obj) {
	//console.log(obj);
	obj.features.forEach(function(pt) {
		console.log(pt);
		if (pt.geometry) {
			if (pt.geometry.type === 'Point') {
				
				$.mapview.addAnnotation(Map.createAnnotation({
					latitude : pt.geometry.coordinates[1],
					longitude : pt.geometry.coordinates[0],
					title : pt.properties.descriptio || 'No Description',
					//subtitle : 'Mountain View, CA',
					pincolor : Map.ANNOTATION_GREEN
				}));
			}
		}
	});
}

function closeWindow(){
	$.win.close();
}

