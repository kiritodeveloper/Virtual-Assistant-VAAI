'use strict';

/**
 * @component   : APP nail
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.views.appnail = renders.views.appnail || {};
	function getState(store) {
		return {
			//swipe: store.swipe
		};
	};

	renders.views.appnail.app = React.createClass({
		displayName: "app",
		initialColor: "#ffffff",
		colors: [],
		secondColors: [],
		getInitialState: function() {
			return getState(this.props.store);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		componentWillMount: function(){
			var _this = this;
	        $.ajax({
	          url:'/scripts/staticFiles/colors.js',
	          method: 'GET',
	          dataType: 'JSON',
	          success(data){
	              _this.colors = data[0].colors;
	              _this.forceUpdate();

	          }
		  });
		},
		componentDidMount: function(){
			this.getNails();
		},
		getSecondColor: function(palette){
			this.secondColors = palette;
			this.forceUpdate();
		},
		paletteSecondColor: function(){
			var _this = this;
			var cont = 0;
			return div({className:'colorBarSecond'},
						$.map(_this.secondColors, function(val, key){
							cont++;
							return div({
										className:'optionColor', key: cont,
										onClick: function(){
											_this.initialColor = val.color;
											_this.getNails();
										},
										style: {
											"backgroundColor": val.color
										}
									},
								null
							)
						})
			)
		},
		getNails: function(){
			var _this = this;
			var Hand = [
							{ "name":"lMenique", "cx":"40", "cy":"110", "rx":"18", "ry":"30", "rotation":"0" },
							{"name":"lAnular","cx":"180","cy":"40","rx":"21","ry":"33","rotation":"7"},
							{"name":"lMedio","cx":"50","cy":"50","rx":"21","ry":"34","rotation":"10"},
							{"name":"lIndice","cx":"42","cy":"105","rx":"20","ry":"32","rotation":"14"},
							{"name":"lPulgar","cx":"44","cy":"83","rx":"14","ry":"40","rotation":"65"},
							{"name":"rMenique","cx":"223","cy":"110","rx":"19","ry":"30","rotation":"0"},
							{"name":"rAnular","cx":"109","cy":"40","rx":"21","ry":"33","rotation":"-8"},
							{"name":"rMedio","cx":"50","cy":"48","rx":"21","ry":"34","rotation":"-9"},
							{"name":"rIndice","cx":"38","cy":"105","rx":"20","ry":"32","rotation":"-14"},
							{"name":"rPulgar","cx":"43","cy":"82","rx":"14","ry":"40","rotation":"-65"}
			]

			$.map(Hand, function(val, key){
				var canvas = document.getElementById(val.name);
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.ellipse(val.cx, val.cy, val.rx, val.ry, val.rotation * Math.PI/180, 0, 2 * Math.PI);
				ctx.fillStyle = _this.initialColor;
				ctx.fill();
			})

		},
		getColorSelector: function(){
			var _this = this;
			return div({className:'colorBar'},
					$.map(_this.colors, function(val, key){
						return div({className:'containerCorlor', key: key},
									div({
											className:'colorOption',
											onClick: function(){
												_this.getSecondColor(val.palette);
												_this.initialColor = val.default;
												_this.getNails();
											},
											style: {
												"backgroundColor": val.default
											}
											},
										null
									)
								)
					})
			)
		},
		render: function() {
			var _this = this;
			return div({ className: 'app'},
                        div({className:'containerApp'},
                            div({className:'controlsPanel'},
                                div({className:'colorSelector'},
									div({className:'label'},'Selecciona un color'),
									div({className:'selector'},
										div({
												className:'color',
												style: {
													"backgroundColor": _this.initialColor
												}
											},null),
									),
									this.getColorSelector()
								)
                            ),
                            div({className:'handsPanel'},
								div({className:'statusBar'},
									this.paletteSecondColor()
								),
								div({className:'hands'},
									div({className:'leftHand'},
										div({className:'imgHand'},
											img({src:'images/hand-izq.png'},null),
											div({className:'nails'},

												canvas({ id:'lMenique', style: { 'position': 'absolute', 'top': '65px', 'left': '27px' } },null),
												canvas({ id:'lAnular', style: { 'position': 'absolute', 'top': '43px', 'left': '34px' } },null),
												canvas({ id:'lMedio', style: { 'position': 'absolute', 'top': '0px', 'left': '270px' } },null),
												canvas({ id:'lIndice', style: { 'position': 'absolute', 'top': '0px', 'left': '380px' } },null),
												canvas({ id:'lPulgar', style: { 'position': 'absolute', 'top': '405px', 'left': '530px' } },null)
											)
										)
									),
									div({className:'rightHand'},
										div({className:'imgHand'},
											img({src:'images/hand-der.png'},null),
											div({className:'nails'},

												canvas({ id:'rMenique', style: { 'position': 'absolute', 'top': '65px', 'right': '0px' } },null),
												canvas({ id:'rAnular', style: { 'position': 'absolute', 'top': '43px', 'right': '34px' } },null),
												canvas({ id:'rMedio', style: { 'position': 'absolute', 'top': '0px', 'right': '80px' } },null),
												canvas({ id:'rIndice', style: { 'position': 'absolute', 'top': '0px', 'right': '170px' } },null),
												canvas({ id:'rPulgar', style: { 'position': 'absolute', 'top': '405px', 'right': '330px' } },null)
											)
										)
									)
								)
							)
                        )
                      );
		}
	});
})();
