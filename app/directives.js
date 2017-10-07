'use strict';

angular
.module('copilotjsApp')
.directive('headerNg', ['$window', '$location', 'generals', 'flux', function($window, $location, generals, flux) {

	return {
		restrict: 'A',
		link: function($scope) {
			var renders = $window.renders;
			var renderApp = function() {
				// Render the header directive
				ReactDOM.render(
					React.createElement(renders.components.header, {
						agent: $scope.agent,
						device: $scope.device,
						deviceType: $scope.deviceType,
						ie: $scope.ie,
						store: flux.store,
						actions: flux.actions,
					}), document.getElementById('lockheed-header')
				);

				ReactDOM.render(
					React.createElement(renders.components.menu, {
						agent: $scope.agent,
						device: $scope.device,
						deviceType: $scope.deviceType,
						ie: $scope.ie,
						store: flux.store,
						actions: flux.actions,
					}), document.getElementById('lockheed-menu')
				);


				// Render the footer directive
				ReactDOM.render(
					React.createElement(renders.components.footer, {
						agent: $scope.agent,
						device: $scope.device,
						deviceType: $scope.deviceType,
						ie: $scope.ie,
						store: flux.store,
						actions: flux.actions,
					}), document.getElementById('lockheed-footer')
				);
			};

			$scope.$watch('deviceType', function() {
				$window.requestAnimationFrame(renderApp);
			});
		}
	}
}]);
