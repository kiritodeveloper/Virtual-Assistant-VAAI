'use strict';
var flux = flux || {};
(function() {
	flux.store = flux.store || {};
	var $ = window.$ || {};
	var dispatcher = flux.dispatcher;
	var fx = {};
	var initCount = 0;
	var store = {
		swipe: ['rigth'],
		addListener: function(callback) {
			fx['action' + initCount] = callback;
			initCount++;
		},
		change: function() {
			$.map(fx, function(val, key) {
				if (val.__reactBoundContext._lifeCycleState !== 'UNMOUNTED') {
					val();
				} else {
					delete fx[key];
				}
			});
		}
	};

	dispatcher.register(function(payload) {
		var fx = {
			SWIPE_PAGE: function(args) {
				return store.swipe[0] = args.direction;
			}
		};

		var action = payload.action;
		var fxValue = fx[action.actionType](action);
		if (fxValue === 'fxBreak') {
			return false;
		}
		return store.change();
	});
	flux.store = store;
})();