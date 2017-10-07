angular
.module('copilotjsApp', ['ngRoute', 'ngTouch'])
.factory('flux', function fluxFactory() {
	var temp = window.flux;
	return {
		actions: temp.actions,
		dispatcher: temp.dispatcher,
		store: temp.store
	};
})
.factory('generals', function getGeneralInfo() {
	var temp = window.generalInfo;
	// KEEP IN DEVELOPMENT
	// window.generalInfo = null;
	return {
		info: temp,
		innerWidth: window.innerWidth
	};
});