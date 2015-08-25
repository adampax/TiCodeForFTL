var args = arguments[0] || {};

const API_KEY = 'get yours here: https://secure.meetup.com/meetup_api/key/';

var xhr = require('xhr');
var moment = require('alloy/moment');

var timeRange = moment().subtract(6, 'months').valueOf() + ',' + moment().add(6, 'months').valueOf();

xhr.send({
	url : 'https://api.meetup.com/2/events?key=' + API_KEY + '&group_urlname=Code-for-FTL&sign=true&status=upcoming,past&time=' + timeRange,
	method : 'GET',
	success : addRows,
	error : function(err) {
		console.log(err);
		//alert('Something happened when retrieving the meetup data');
		$.table.setData([Ti.UI.createTableViewRow({
			title : 'Something happened with the meetup.com api fetch'
		})]);
	}
});

function addRows(res) {
	var rows = [];
	res.results.forEach(function(r) {
		console.log(moment(r.time).toDate());
		
		rows.push(Ti.UI.createTableViewRow({
			title: moment(r.time).format('HH:mm:ss MM/DD/YY')
		}));
		
		$.table.setData(rows);
		
	});
}

