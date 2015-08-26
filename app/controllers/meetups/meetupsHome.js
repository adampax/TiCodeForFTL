var args = arguments[0] || {};

const API_KEY = 'get yours here: https://secure.meetup.com/meetup_api/key/';

var xhr = require('xhr');
var moment = require('alloy/moment');


//format the date range according to meetup.com's api requirement
var timeRange = moment().subtract(6, 'months').valueOf() + ',' + moment().add(6, 'months').valueOf();

xhr.send({
	url : 'https://api.meetup.com/2/events?key=' + API_KEY + '&group_urlname=Code-for-FTL&sign=true&status=upcoming,past&time=' + timeRange,
	method : 'GET',
	success : function(res){
		Alloy.Collections.meetups.reset(res.results);
	},
	error : function(err) {
		console.log(err);
		$.table.setData([Ti.UI.createTableViewRow({
			title : 'Something happened with the meetup.com api fetch'
		})]);
	}
});

function transformModel(model) {
    //console.log(model.toJSON());
    transform = model.toJSON();
    transform.time = moment(transform.time).format('MM/DD/YY');
    transform.rsvp = 'RSVPs: ' + transform.yes_rsvp_count;
    
    return transform;	
}


