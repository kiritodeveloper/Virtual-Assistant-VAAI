'use strict';
var flux = flux || {};
(function() {
	flux.actions = flux.actions || {};
	var dispatcher = flux.dispatcher;
	var actions = {
		//Mobile
		swipe: function(direction) {
			dispatcher.handleViewAction({
				actionType: 'SWIPE_PAGE',
				direction: direction
			});
		}
	};
	flux.actions = actions;
})();