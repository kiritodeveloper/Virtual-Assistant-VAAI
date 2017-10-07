'use strict';

angular
.module('copilotjsApp')
.controller('CopilotJSCtrl', ['$scope', '$rootScope', '$window', '$location', 'generals', 'flux', function($scope, $rootScope, $window, $location, generals, flux) {
	// Initilization of touch event on react

	function getPortraitSize() {
		//Doesn't have an orientation IE9-
		if ($scope.ie !== false && $scope.ie < 10) return $window.innerHeight;
		// Portrait (width) / Landscape (height)
		if (getOrientationMatch()) {
			return window.innerWidth === 0 ? screen.width : $(window).width();
		} else {
			return window.innerHeight === 0 ? screen.width : $(window).height();
		}
	}

	function getOrientationMatch() {
		//Doesnt have an orientation IE9-
		if ($scope.ie !== false && $scope.ie < 10) return false;

		//Get it by MatchMedia
		if (typeof $window.matchMedia === 'undefined') {
			return false;
		} else {
			return $window.matchMedia('(orientation: portrait)').matches;
		}
	}

	/* fix for tablet and mobile view */
	function getDefaultParams() {
		if ($scope.ie !== false && $scope.ie < 10) {
			var $html = $window.$('html');
			$window.$('html, body, #headerNg').css({
				minWidth: '1000px'
			});
			$html.addClass('ie-old');
			if ($scope.ie == 8) $html.addClass('ie-8');
			$scope.device = 'desktop';
			$scope.deviceType = 'desktop';
		} else {
			if ($scope.windowWidth >= 1024) {
				$scope.deviceType = 'desktop';
			} else if ($scope.windowWidth >= 768) {
				$scope.deviceType = 'tablet';

			} else if ($scope.windowWidth < 768) {
				$scope.deviceType = 'phone';
			}
		}
	}

	function userAgent() {
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			return $scope.agent = true;
		} else {
			return $scope.agent = false;
		}
	}

	function isIE() {
		var myNav = navigator.userAgent.toLowerCase();
		if (!(window.ActiveXObject) && "ActiveXObject" in window) return 11;
		return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	$scope.ie = $rootScope.ie = isIE();
	$scope.agent = userAgent();
	$scope.breadCrumb = ['Inicio'];
	$scope.deviceType = 'desktop';
	//Get WindowWidth
	$scope.windowWidth = generals.innerWidth;
	//Get Client Params
	getDefaultParams();

	// Scroll to the top function
	$rootScope.backToTop = function() {
		$('body, html').animate({
			scrollTop: 0
		}, {
			duration: 500,
			queue: false
		});
	};

	$rootScope.$on('$routeChangeSuccess', function() {});
	$rootScope.$on('$routeChangeError', function(event) {});

	//If not old IE
	if ($scope.ie === false || $scope.ie > 9) {
		angular.element($window).bind('resize', function(e) {
			e.preventDefault();
			e.stopPropagation();
			$scope.$apply(function() {
				$scope.windowWidth = $window.innerWidth;
				getDefaultParams();
			});
		});
	}

	$rootScope.swipeLeft = function() {
		flux.actions.swipe('left');
	};
	$rootScope.swipeRight = function() {
		flux.actions.swipe('right');
	};

}]);