'use strict';

angular
.module('copilotjsApp')
.controller('accountCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals','$location', function($scope, $rootScope, $window, flux, generals, $location) {


	var path = $location.url().split('/').pop();

	if(path === 'informacion'){
		var renderApp = function() {
			ReactDOM.render(
				React.createElement(renders.views.micuenta.informacion, {
					agent: $scope.agent,
					device: $scope.device,
					deviceType: $scope.deviceType,
					store: flux.store,
					actions: flux.actions
				}), document.getElementById('page')
			)
		};
	}else if(path === 'edicion'){
		var renderApp = function() {
			ReactDOM.render(
				React.createElement(renders.views.micuenta.edicion, {
					agent: $scope.agent,
					device: $scope.device,
					deviceType: $scope.deviceType,
					store: flux.store,
					actions: flux.actions
				}), document.getElementById('page')
			)
		};
	}else if(path === 'notificacion'){
		var renderApp = function() {
			ReactDOM.render(
				React.createElement(renders.views.micuenta.notificacion, {
					agent: $scope.agent,
					device: $scope.device,
					deviceType: $scope.deviceType,
					store: flux.store,
					actions: flux.actions
				}), document.getElementById('page')
			)
		};
	}else if(path === 'usuarios-bloqueados'){
		var renderApp = function() {
			ReactDOM.render(
				React.createElement(renders.views.micuenta.bloqueados, {
					agent: $scope.agent,
					device: $scope.device,
					deviceType: $scope.deviceType,
					store: flux.store,
					actions: flux.actions
				}), document.getElementById('page')
			)
		};
	}else if(path === 'eliminar-cuenta'){
		var renderApp = function() {
			ReactDOM.render(
				React.createElement(renders.views.micuenta.eliminar, {
					agent: $scope.agent,
					device: $scope.device,
					deviceType: $scope.deviceType,
					store: flux.store,
					actions: flux.actions
				}), document.getElementById('page')
			)
		};
	}




	$scope.$watch('deviceType', function() {
		$window.requestAnimationFrame(renderApp);
	});
}]);
