'use strict';

angular
.module('copilotjsApp')
.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/views/page.html',
		controller: 'HomeCtrl'
	})
	.when('/ingresar', {
		templateUrl: '/views/page.html',
		controller: 'IngresarCtrl'
	})
	.when('/carrito', {
		templateUrl: '/views/page.html',
		controller: 'carritoCtrl'
	})
	.when('/registro', {
		templateUrl: '/views/page.html',
		controller: 'RegistroCtrl'
	})
	.when('/mapa-de-sitio', {
		templateUrl: '/views/page.html',
		controller: 'SiteMapCtrl'
	})
	.when('/recuperar-contrasena', {
		templateUrl: '/views/page.html',
		controller: 'RecoveryPasswordCtrl'
	})
	// Acerca de nosotros
	.when('/vicky', {
		templateUrl: '/views/page.html',
		controller: 'vickyCtrl'
	})
	.when('/mision', {
		templateUrl: '/views/page.html',
		controller: 'misionCtrl'
	})
	.when('/vision', {
		templateUrl: '/views/page.html',
		controller: 'visionCtrl'
	})
	.when('/terminos', {
		templateUrl: '/views/page.html',
		controller: 'terminosCtrl'
	})
	.when('/app-nail', {
		templateUrl: '/views/page.html',
		controller: 'appCtrl'
	})
	.when('/precios', {
		templateUrl: '/views/page.html',
		controller: 'pricesCtrl'
	})
	// Mi cuenta
	.when('/mi-cuenta/:section', {
		templateUrl: '/views/page.html',
		controller: 'accountCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);
}]);




/*
	Home -> /
	Login -> /ingresar
	Registro -> /registro
	Home -> /mapa-de-sitio
	Home -> /detalle/numero-de-item
	Home -> /recuperacion-de-contrasena
	Home -> /
	Home -> /
	Home -> /
*/
