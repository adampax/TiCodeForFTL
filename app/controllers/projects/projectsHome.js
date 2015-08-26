var args = arguments[0] || {};


//add some animation when the window is first opened
$.logo.animate({
	opacity:1,
	duration:700
});

$.container.animate({
	opacity:1,
	top:0,
	duration: 1000
});


//our event listeners wired to each control in xml

function openMap() {
	var v = Alloy.createController('projects/map').getView();
	Alloy.Globals.tabgroup.activeTab.open(v);
}


