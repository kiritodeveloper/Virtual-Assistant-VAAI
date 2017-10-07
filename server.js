var express        = require('express'),
	request        = require('request'),
	bodyParser     = require('body-parser'),
	methodOverride = require("method-override"),
	_              = require('underscore'),
	app            = express(),
	router         = express.Router(),
	port           = 8080,
	perimitirCrossDomain = function(req, res, next) {res.header('Access-Control-Allow-Origin', '*'); res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); res.header('Access-Control-Allow-Headers', 'Content-Type'); next(); };

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; 
router.get('/webControls/:handler', 
	function(req, res) {
		var queryObj = req.query; 
		var handler = req.params.handler; 
		if (_.keys(queryObj).length) {
			var queryStr = '?' + _.map(queryObj, function(val, key) {
				return (key + '=' + val); }).join('&'); 
		}else {
			var queryStr = ''; 
		} 
		var defaultURL = serverRoute + req.params.handler + queryStr; request.get(defaultURL, function(error, response, body) {
			res.send(body); }); 
	});

app.use(bodyParser.urlencoded({
		extended: false
	}))
	.use(bodyParser.json())
	.use(bodyParser.json({
		type: 'application/vnd.api+json'
	}))
	.use(methodOverride('X-HTTP-Method-Override'))
	.use(perimitirCrossDomain)
	.use(router)
	.use(express.static(__dirname + '/build'))
	.get('*', function(req, res) {
		res.sendFile(__dirname + '/build/index.html')
	})
	.listen(port, function() {
		console.log("Node server running on:", port)
	});