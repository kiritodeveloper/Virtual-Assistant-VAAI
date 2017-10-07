'use strict';

angular
.module('copilotjsApp')
.controller('vickyCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.views.nosotros.vicky, {
				agent: $scope.agent,
				device: $scope.device,
				deviceType: $scope.deviceType,
				store: flux.store,
				actions: flux.actions
			}), document.getElementById('page')
		)
	};

	$scope.$watch('deviceType', function() {
		$window.requestAnimationFrame(renderApp);
	});
}]);
