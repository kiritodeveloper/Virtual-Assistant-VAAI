'use strict';
var renders = renders || {};
var flux = flux || {};
var $ = window.$;
(function() {
	flux.dispatcher = flux.dispatcher || {};
	var callbacks = [];
	var dispatcher = {
		dispatch: function(a) {
			$.map(callbacks, function(val) {
				val(a);
			});
		},
		register: function(callback) {
			callbacks.push(callback);
		},
		handleViewAction: function(action) {
			this.dispatch({
				source: 'VIEW_ACTION',
				action: action
			});
		}
	};
	flux.dispatcher = dispatcher;
})();