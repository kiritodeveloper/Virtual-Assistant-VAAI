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
'use strict';
var flux = flux || {};
(function() {
	flux.actions = flux.actions || {};
	var dispatcher = flux.dispatcher;
	var actions = {
		//Mobile
		swipe: function(direction) {
			dispatcher.handleViewAction({
				actionType: 'SWIPE_PAGE',
				direction: direction
			});
		}
	};
	flux.actions = actions;
})();
'use strict';
(function() {
	var lastTime = 0,
		vendors = ['ms', 'moz', 'webkit', 'o'];

	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() {
				callback(currTime + timeToCall);
			}, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());


var a = React.DOM.a;
var abbr = React.DOM.abbr;
var address = React.DOM.address;
var animateTransform = React.DOM.animateTransform;
var area = React.DOM.area;
var article = React.DOM.article;
var aside = React.DOM.aside;
var audio = React.DOM.audio;
var b = React.DOM.b;
var base = React.DOM.base;
var bdi = React.DOM.bdi;
var bdo = React.DOM.bdo;
var big = React.DOM.big;
var blockquote = React.DOM.blockquote;
var body = React.DOM.body;
var br = React.DOM.br;
var button = React.DOM.button;
var canvas = React.DOM.canvas;
var caption = React.DOM.caption;
var cite = React.DOM.cite;
var circle = React.DOM.circle;
var code = React.DOM.code;
var col = React.DOM.col;
var colgroup = React.DOM.colgroup;
var data = React.DOM.data;
var datalist = React.DOM.datalist;
var dd = React.DOM.dd;
var defs = React.DOM.defs;
var del = React.DOM.del;
var details = React.DOM.details;
var dfn = React.DOM.dfn;
var dialog = React.DOM.dialog;
var div = React.DOM.div;
var dl = React.DOM.dl;
var dt = React.DOM.dt;
var ellipse = React.DOM.ellipse;
var em = React.DOM.em;
var embed = React.DOM.embed;
var fieldset = React.DOM.fieldset;
var figcaption = React.DOM.figcaption;
var figure = React.DOM.figure;
var footer = React.DOM.footer;
var form = React.DOM.form;
var h1 = React.DOM.h1;
var h2 = React.DOM.h2;
var h3 = React.DOM.h3;
var h4 = React.DOM.h4;
var h5 = React.DOM.h5;
var h6 = React.DOM.h6;
var head = React.DOM.head;
var header = React.DOM.header;
var hgroup = React.DOM.hgroup;
var hr = React.DOM.hr;
var html = React.DOM.html;
var i = React.DOM.i;
var iframe = React.DOM.iframe;
var img = React.DOM.img;
var input = React.DOM.input;
var ins = React.DOM.ins;
var kbd = React.DOM.kbd;
var keygen = React.DOM.keygen;
var label = React.DOM.label;
var legend = React.DOM.legend;
var li = React.DOM.li;
var linearGradient = React.DOM.linearGradient;
var link = React.DOM.link;
var main = React.DOM.main;
var map = React.DOM.map;
var mark = React.DOM.mark;
var menu = React.DOM.menu;
var menuitem = React.DOM.menuitem;
var meta = React.DOM.meta;
var meter = React.DOM.meter;
var nav = React.DOM.nav;
var noscript = React.DOM.noscript;
var object = React.DOM.object;
var ol = React.DOM.ol;
var optgroup = React.DOM.optgroup;
var option = React.DOM.option;
var output = React.DOM.output;
var p = React.DOM.p;
var param = React.DOM.param;
var picture = React.DOM.picture;
var pre = React.DOM.pre;
var progress = React.DOM.progress;
var polygon = React.DOM.polygon;
var q = React.DOM.q;
var rect = React.DOM.rect;
var rp = React.DOM.rp;
var rt = React.DOM.rt;
var ruby = React.DOM.ruby;
var s = React.DOM.s;
var samp = React.DOM.samp;
var script = React.DOM.script;
var section = React.DOM.section;
var select = React.DOM.select;
var small = React.DOM.small;
var source = React.DOM.source;
var span = React.DOM.span;
var strong = React.DOM.strong;
var style = React.DOM.style;
var sub = React.DOM.sub;
var summary = React.DOM.summary;
var sup = React.DOM.sup;
var svg = React.DOM.svg;
var stop = React.DOM.stop;
var table = React.DOM.table;
var tbody = React.DOM.tbody;
var td = React.DOM.td;
var textarea = React.DOM.textarea;
var text = React.DOM.text;
var tfoot = React.DOM.tfoot;
var th = React.DOM.th;
var thead = React.DOM.thead;
var time = React.DOM.time;
var title = React.DOM.title;
var tr = React.DOM.tr;
var track = React.DOM.track;
var u = React.DOM.u;
var ul = React.DOM.ul;
var video = React.DOM.video;
var wbr = React.DOM.wbr;
'use strict';

/**
 * @component   : Menu
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
        taxonomy: []
		};
	};

	renders.components.menu = React.createClass({
		displayName: 'menu',
		getInitialState: function() {
			return getState(this.props.store);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
    componentWillMount: function(){
          this.getData();
    },
    getData: function(){
        var _this = this;
        $.ajax({
          url:'/scripts/staticFiles/taxonomy.js',
          method: 'GET',
          dataType: 'JSON',
          success(data){
              _this.setState({taxonomy: data})
          }
        })
    },
    buildMenu: function(){
      var _this = this;
      return $.map(_this.state.taxonomy, function(val, key){
          return div({className:'optMenu', key: key},
            		span({className:'category'}, val.category),
            		span({ className:'arrow icon-circle-right'},null),
						div({className:'subcats'},
							div({className:'image'},
								div({className:'text'}, '"' + val.descripcion + '"'),
								div({className:'enlace'},
									a({href:val.url,className:'link'},
										span({className:'title'},'Ver más'),
										span({className:'icon icon-fast-forward'},null)
									)
								),
								img({className:'img', src:'/images/'+val.scaparatePict},null)
							)
						)
          		)
      })
    },
    componentDidMount: function(){

    },
		render: function(){
			return div({
				className: 'menu'},
            div({className:'trigger'},
              span({className:'title'},'Categorías'),
              span({className:'triangle icon-circle-right'},null),
			  div({className:'categoryContainer'},
                this.buildMenu()
              )
            )

        );
		}
	});
})();

'use strict';

/**
 * @component   : Header
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
			swipe: store.swipe,
			searchActive : false,
			openLogin: false,
		};
	};

	renders.components.header = React.createClass({
		displayName: 'header',
		getInitialState: function() {
			return getState(this.props.store);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			return div({ className: 'header ' + this.props.deviceType },
								div({className:'logo'},
									a({href:'/'},
										img({className:'nail', src:'/images/logo.png', sytle:{width:'30px'}},null),
										img({className:'tipo', src:'/images/logotipo.png'},null)
									)
								),
								div({className: _this.state.searchActive ? 'searchBox active' : 'searchBox'},
									div({className:'search'},

										input({
														type:'text', id:'textBox', className:'textBox', placeholder:'¿Que estas buscando?',
														onFocus: function(){
															_this.setState({searchActive: true})
															console.log('focus')
														},
														onBlur: function(){
															_this.setState({searchActive: false})
															console.log('blur')
														}
													},null),
										React.createElement(renders.components.vicky,{}),
										span({className:'icon icon-microphone'},null),
										span({className:'icon icon-search4'},null)

									)
								),
								div({className:'cart'},
									span({className:'icon icon-cart'},null),
									div({className:'num'},
										span({className:'number'},'99')
									)
								),
								div({className:'login'},
									p({className:'ingresar'},
										a({href:'/ingresar'},
											span({},'Ingresar')
										),
										span({
												className:'icon icon-ellipsis',
												onClick: function(){
													_this.setState({openLogin: !_this.state.openLogin})
												}
											},null)

									),
									div({
												className: _this.state.openLogin ? 'globeLogin active' : 'globeLogin',
												onMouseLeave: function(){
													_this.setState({openLogin: false})
												}
											},
										div({className:'triangle back'},null),
										div({className:'triangle'},null),
										a({href:'/ingresar'},
											div({
														className:'lineOption',
														onClick: function(){
															_this.setState({openLogin: false})
														}
													},
												span({className:'icon icon-enter'},null),
												span({className:'text'},'Ingresar')
											)
										),
										a({href:'/registro'},
											div({
														className:'lineOption',
														onClick: function(){
															_this.setState({openLogin: false})
														}
													},
												span({className:'icon icon-user-plus'},null),
												span({className:'text'},'Registro')
											)
										),

										a({href:'/mi-cuenta/informacion'},
											div({
														className:'lineOption',
														onClick: function(){
															_this.setState({openLogin: false})
														}
													},
												span({className:'icon icon-user'},null),
												span({className:'text'},'Mi cuenta')
											)
										),
											div({
														className:'lineOption',
														onClick: function(){
															_this.setState({openLogin: false})

																FB.logout(function(response) {
																   console.log(response)
																	 if(response.status === 'unknown'){
																		 alert("cerraste la sesion")
																	 }
																})

													}
												},
												span({className:'icon icon-exit'},''),
												span({className:'text'},'Cerrar sesión')

											)
										)
									)


		  );
		}
	});
})();

'use strict';
/**
 * @component   : Footer
 * @Appname     : copilotjsApp
 * @description : Render the directive of footer for all UX
 * @return      : renders.components.footer
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.components.footer = React.createClass({
		displayName: 'footer',
		getInitialState: function() {
			return getState(this.props.store);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			return div({
				className: 'footer'},
				React.createElement(renders.components.social,{props: this.props}),
				div({className: 'columns'},
					div({className:'col', id:"col1"},
						p({className:'title'}, 'Compañia'),
						ul({className:'list'},
							li({className:'option:'},
								a({href:'#'	},'Privacidad')
							),
							li({className:'option:'},
								a({href:'#'	},'Condiciones')
							),
							li({className:'option:'},
								a({href:'#'	},'Términos de uso')
							)
						)
					),
					div({className:'col', id:'col2'},
					p({className:'title'}, 'Servicios'),
					ul({className:'list'},
						li({className:'option:'},
							a({href:'#'},'Distribuidores')
						),
						li({className:'option:'},
							a({href:'#'},'Mapa de sitio')
						),
						li({className:'option:'},
							a({href:'/app-nail'},'APP Nails')
						)
					)
					),
					div({className:'col', id:'col3'},
					p({className:'title'}, 'Redes sociales'),
					ul({className:'list'},
						li({className:'option'},
							a({href:'#'},'Facebook')
						),
						li({className:'option:'},
							a({href:'#'},'Twitter')
						),
						li({className:'option'},
							a({href:'#'},'Instagram')
						)
					)
					),
					div({className:'col', id:'col4'},
					p({className:'title'}, 'Acerca de nosotros'),
					ul({className:'list'},
						li({className:'option:'},
							a({href:'/vicky'},'Vicky')
						),
						li({className:'option:'},
							a({href:'/mision'},'Misión')
						),
						li({className:'option:'},
							a({href:'/vision'},'Visión')
						)
					)
				),
				div({className:'logofooter'},
					img({className:'nail', src:'/images/una.png'},null)
				)
			),
			div({className:'copy'},'Copyright © 2017 Nail & Glam Inc.')
		);
	}
});
})();

"use strict";
var sliderR = React.createClass({
	position: 0,
	slidesData : [],
	getInitialState: function() {
		return {
			position: 0,
			x: 0,
			y: 0,
			status: false,
      detected: false,
			delta: 50,
			preventDefaultEvent: false,
			direction: null,
			viewHoverMove: true,
			props: this.props
		};
	},
	parseBool: function(string){
		if(string === 'false'){
			return false;
		}else{
			return true;
		}
	},
  getData: function(){
      var _this = this;
      $.ajax({
        url:'/scripts/staticFiles/homeData.js',
        method: 'GET',
        dataType: 'JSON',
        success(data){
            _this.slidesData = data[0].slider;
            _this.forceUpdate();
        }
      })
  },
	componentWillMount: function(){
    this.getData();

	},
	componentDidMount: function() {
		var _this = this;

		this.interval = setInterval(function(){
			_this.move('>');
		}, 8000);

		if(localStorage.menuToolTipBool !== 'false'){
			localStorage.setItem('menuToolTip', 1);
		}
			localStorage.setItem('menuToolTipBool', false);
	},
	bullets: function() {
		var _this = this;
			return $.map(this.slidesData, function(val, key){
				return span({
							className: _this.position === key ? 'bullet active' : 'bullet',
							key: key,
							onClick: _this.move.bind(_this, key)
						})
			})
	},
	_touchStart: function(e){
		if(this.props.preventDefaultEvent && this.props.preventDefaultEvent!=this.state.preventDefaultEvent) this.setState({preventDefaultEvent: this.props.preventDefaultEvent});
	   	if(this.props.delta && this.props.delta!=this.state.delta) this.setState({delta: this.props.delta});
		this.setState({
		   x: Math.abs(e.touches[0].pageX).toFixed(2),
		   y: Math.abs(e.touches[0].pageY).toFixed(2),
		   status: true,
		   detected: false
	   });
	},
	_touchMove: function(e){
		if(e.touches.length > 1){
			return
		}
		var x = (e.touches[0].pageX).toFixed(2);
        var y = (e.touches[0].pageY).toFixed(2);
        var tX = (x - this.state.x).toFixed(2);
        var tY = (y - this.state.y).toFixed(2);

		if(Math.abs(tX)>=this.state.delta){
		   if(tX>50){
			   this.setState({direction: 'right'})
		   }
		   else if(tX<(-this.state.delta)){
				this.setState({direction: 'left'})
		   }
	   }
	},
	_touchEnd: function(e){
		this.setState({
            x: 0,
            y: 0,
            status: false,
            detected: false
        });
		if(this.state.direction === 'left') this.move('>')
		if(this.state.direction === 'right') this.move('<')
		if(this.state.preventDefaultEvent) e.preventDefault();
	},
	startInterval() {
		var _this = this;
		this.interval = setInterval(function(){
			_this.move('>');
		}, 8000);
	},
	stop() {
		clearInterval(this.interval);
	},
	getSlides: function() {
		var _this = this;
		if(_this.slidesData !== undefined){
			var imagen = ''
			return $.map(_this.slidesData, function(val, key){
				if(_this.props.props.deviceType === 'desktop'){
					imagen = img({src: val.imageD, key: key, 'data-info': _this.props.name + '-' + _this.props.index},null)
				}
				if(_this.props.classes === 'tablet' ){
					imagen = img({src: val.imageT, key: key, 'data-info': _this.props.name + '-' + _this.props.index},null)
				}
				if(_this.props.classes === 'phone'){
					imagen = img({src: val.imageM, key: key, 'data-info': _this.props.name + '-' + _this.props.index},null)
				}

				return div({
							className: 'slide s',
							onClick: function(){
								var seoOpt1 = val.seo1.split("|");
								callToGa(seoOpt1[0],seoOpt1[1],seoOpt1[2]);
								var seoOpt2 = val.seo2.split("|");
								callToGa(seoOpt2[0],seoOpt2[1],seoOpt2[2]);
								location.href= val.url
							},
							key: key,
							style: { width: 100 / _this.slidesData.length + '%' }
						},
							div({
									className:'back left',
									style:{ backgroundColor: val.bcLeft }
								},null),
							div({
									className:'back right',
									style:{ backgroundColor: val.bcRight }
								},null),
							imagen,
							a({className:'sLink1', href:val.url1},null),
							a({className:'sLink2', href:val.url2},null)

						)
			})
		}

	},
	move: function(direction){
		if(direction === '<'){
			this.position = this.position - 1;
		}else if(direction === '>'){
			this.position = this.position + 1;
		}else{
			this.position = direction;
		}
		if(this.position < 0){
			this.position = this.slidesData.length -1;
		}else if(this.position > this.slidesData.length - 1){
			this.position = 0;
		}
		this.setState({position: this.position})
	},
	render: function() {
			var _this = this;
			var bullets = this.bullets();
			var slides  = this.getSlides();

			return div({className:'container'},
						div({
								className:'slider',
								onMouseEnter: function(){ _this.stop() },
								onMouseLeave: function(){ _this.startInterval() },
								onTouchMove: function(e){
									_this._touchMove(e);
								},
								onTouchStart: function(e){
									_this.stop()
									_this._touchStart(e);
								},
								onTouchEnd: function(e){
									_this._touchEnd(e);
								}
							},
							div({
									className:'arrows',
									styles: {
										display: _this.props.userAgent ? 'none' : 'block'
									},
								}
							),
							div({
									className:'arrow left',
									onClick: this.move.bind(this, '<')
								},
								span({className:'icon icon-rewind'},null)
							),
							div({
									className:'arrow right',
									onClick: this.move.bind(this, '>')
								},
								span({className:'icon icon-fast-forward'},null)
							),
							div({
                    className:'bullets',
                    style:{
                        'marginLeft': - (slides.length * 19) / 2 + 'px'
                    }
                  }, bullets ),

							div({ className:'sliderWrap',
								  style: {
											width: slides.length * 100 + '%',
											left: - (this.state.position * (slides.length * 100)) /  slides.length + '%'
										}
							}, slides)
						),
						div({className: (_this.state.hoverTTMove && _this.parseBool(localStorage.viewHoverMove)) ? 'toolTipBlue move active' : 'toolTipBlue move'},
							div({className:'triangleInf'},null),
							div({className:'triangle'},null),
							div({className:'icon'},
								div({className:'t up'},null),
								div({className:'t left'},null),
								div({className:'t right'},null),
								div({className:'t down'},null)
							)
						)
			)
	}
});

'use strict';

/**
 * @View        : Home
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */
(function() {
    renders.components = renders.components || {};

    function getState(store) {
        return { dataFilter: '', activeProducts: false, finding: true, voice: '' };
    };
    renders.components.vicky = React.createClass({
        SpeechRecognition: null,
        voice: true,
        position: 0,
        list: [],
        newList: [],
        nums: ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce'],
        getInitialState: function() {
            return getState(this.props.store);
        },
        componentDidMount: function() {
            //this.props.store.addListener(this._onChange);
            this.initSecuence();
        },
        _onChange: function() {
            if (this.isMounted()) {
                this.setState(getState(this.props.store));
            }
        },
        searchService: function(word) {
            var _this = this;
            _this.setState({ finding: true });
            // $.ajax({
            //     url: '/scripts/staticFiles/catalog.js',
            //     dataType: 'json',
            //     type: 'get',
            //     success: function(data) {
            //         console.log("data: ", data)

            // if (data.docs !== undefined) {
            //     _this.setState({ activeProducts: true })
            //     _this.setState({ dataFilter: data.docs })
            //     if (_this.state.dataFilter.length >= 1) {
            //         _this.setState({ activeProducts: true })
            //     } else {
            //         _this.setState({ activeProducts: false })
            //         _this.speak("¿Que es algo?. " + 'No encuentro nada con la palabra algo');
            //     }
            // } else {
            //     _this.setState({ activeProducts: false })
            //     _this.speak("¿Que es algo?. " + 'No encuentro nada con la palabra algo');
            // }
            //     }
            // })

            $.ajax({
                url: "/scripts/staticFiles/catalog.js",
                dataType: "json",
                success: function(result) {
                    _this.list = result

                    $.map(_this.list, function(val, key) {
                        if (val.terms.trim() == word.trim()) {
                            _this.newList.push(val)
                        }
                    })
                    _this.list = _this.newList;
                    this.forceUpdate();
                    _this.getSearch();
                }
            });
        },
        getSearch: function() {
            var _this = this;
            console.log(_this.newList)
            return $.map(_this.newList, function(k, i) {
                return div({ className: 'list' }, k)
            })
        },
        selecProducts: function(string) {
            var _this = this;
            var sParsed = string.replace(', ', '').replace('y ', '')
            var arrNumbers = sParsed.split(' ')
            arrNumbers.splice(0, 1)
        },
        cleanTEXT: function(text) {
            var type = '',
                cad = text.replace(/undefined/g, '').toLowerCase(),
                arrWords = cad.split(' '),
                finder = arrWords[1] + ' ' + arrWords[2] + ' ' + arrWords[3] + ' ' + arrWords[4] + ' ' + arrWords[5],
                trigger = arrWords[0];

            if (trigger == "busca" || trigger == "necesito" || trigger == "quiero" || trigger == "encuentra" || trigger == "buscame" || trigger == "búscame") { type = "busca"; }
            if (trigger == "juega" || trigger == "cuéntame" || trigger == "hazme" || trigger == "comenta" || trigger == "dime" || trigger == "dimé" || trigger == "di") { type = "juega"; }
            if (trigger == "hola") { type = "saludo"; }
            if (trigger == "gracias" || trigger == "adios" || trigger == "bye" || trigger == "vete" || trigger == "chau" || trigger == "chao" || trigger == "by") { type = "adios"; }
            if (trigger == "ir" || trigger == "ve" || trigger == "ver") { type = "redirect" }


            this.processSam(type, finder.replace(/undefined/g, ''))
        },
        processSam: function(trigger, finder) {
            var _this = this,
                textVOICE;

            // **** Interaction Finder width GOOGLE CLOUD recognition OR WHATSON ****
            if (trigger == 'saludo') {
                _this.setState({ activeProducts: false, voice: true })
                if (finder.indexOf('siri') >= 0) {
                    textVOICE = '¡Hola!, pero yo no soy Siri, soy Vicky';
                    _this.speak(textVOICE);
                } else if (finder.indexOf('cortana') >= 0) {
                    textVOICE = '¡Hola!, Aun que estuvieramos en Windows no me gustaria ser ella';
                    _this.speak(textVOICE);
                } else if (finder.indexOf('jarvis') >= 0 || finder.indexOf('yarbis') >= 0) {
                    textVOICE = '¡Hola!, ¿Señor Stark?';
                    _this.speak(textVOICE);
                } else if (finder.indexOf('nombre') >= 0) {
                    textVOICE = '¡QUe tal Danae!, Ya deja trabajar a tu papi, tiene mucho que hacer';
                    _this.speak(textVOICE);
                } else {
                    textVOICE = '¡Que tal!, Soy Vicky. ... ¿En que te puedo ayudar?';
                    _this.speak(textVOICE);
                }
            }
            if (trigger == 'juega') {
                if (finder.indexOf('chiste') >= 1) {
                    textVOICE = ['¿El dinero o la vida?. Lo siento, soy programador. i?.  ... No tengo dinero ni vida.', '¿Que le dice un bit al otro?. Nos vemos en el bus', '¿Cuántos programadores hacen falta para cambiar una bombilla?. Ninguno. porque es un problema de hardware.', 'Sólo hay 10 tipos de personas en el mundo, las que entienden binario y las que no.'];
                    var selected = textVOICE[Math.floor((Math.random() * textVOICE.length - 1) + 1)];
                    _this.speak(selected);
                }
                if (finder.indexOf('broma') >= 1) {
                    textVOICE = '¡No me gusta bromear, se un poco mas serio por favor!';
                    _this.speak(textVOICE);
                }
                this.setState({ activeProducts: false });
            }
            if (trigger == 'busca') {
                _this.searchService(finder);
                textVOICE = finder;
                document.getElementById("textBox").value = textVOICE;
                _this.speak("Buscando " + textVOICE);
            }
            if (trigger == 'redirect') {
                if (finder.indexOf('registro') >= 1 || finder.indexOf('facturar') >= 1) { window.location.href = "/registro"; }
                if (finder.indexOf('login') >= 1 || finder.indexOf('facturar') >= 1) { window.location.href = "/ingresar"; }
                if (finder.indexOf('inicio') >= 1) { window.location.href = "/"; }
                if (finder.indexOf('mi cuenta') >= 1) { window.location.href = "/mi-cuenta/informacion"; }
            }
            if (trigger == 'adios') {
                _this.setState({ activeProducts: false, voice: false })
                _this.speak('Adios');
            }
        },
        initSecuence: function() {
            var _this = this;
            this.SpeechRecognition = this.SpeechRecognition || webkitSpeechRecognition
            this.recognition = new this.SpeechRecognition();
            this.recognition.lang = "es-MX";
            this.recognition.continuous = false;
            this.recognition.interimResults = true;
            this.recognition.start();
            this.recognition.onresult = function(event) {
                var wordding = '';
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) { this.wordding += event.results[i][0].transcript }

                }
            }
            this.recognition.onstart = function(event) {}
            this.recognition.onerror = function(event) {}
            this.recognition.onend = function(event) {

                console.log("WORDING: ", this.wordding)

                if (this.wordding != undefined) { _this.cleanTEXT(this.wordding) }
                //Inicia voz
                _this.initSecuence();


            }
        },
        speak: function(text) {
            var _this = this;
            var msg = new SpeechSynthesisUtterance();
            msg.text = text;
            msg.volume = parseFloat(1);
            msg.rate = parseFloat(0.8);
            msg.pitch = parseFloat(1);
            var voice = 'Google español de México';
            if (voice) { msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voice; })[0]; }
            window.speechSynthesis.speak(msg);
        },
        render: function() {
            var _this = this;
            var agent = _this.props.agent;
            var deviceType = _this.props.deviceType;
            return div({ className: 'appSam' },
                div({ className: _this.state.voice ? 'voiceOver active' : 'voiceOver' },
                    div({ className: 'circles' },
                        div({ className: 'circleMajor' }, null),
                        div({ className: 'circlemiddle' }, null),
                        div({ className: 'circleminor' }, null)
                    )
                ),
                div({ className: _this.state.win ? 'win active' : 'win' },
                    _this.state.newList ? this.getSearch() : null
                )
            );
        }
    });
})();
"use strict";
var brands = React.createClass({
    brandsData: [],
	getInitialState: function() {
		return {
			position: 0,
			props: this.props
		};
	},

  getData: function(){
      var _this = this;
      $.ajax({
        url:'/scripts/staticFiles/homeData.js',
        method: 'GET',
        dataType: 'JSON',
        success(data){
            _this.brandsData = data[0].brands;
            _this.forceUpdate();
        }
      })
  },
	componentWillMount: function(){
        this.getData();
	},


	getbrands: function() {
        var _this = this;
        return div({className:'containerBrands'},
            $.map(_this.brandsData, function(val, key){
                return div({
                            className:'brand', key:key
                        },
                            div({
                                    className:'image',
                                    style:{
                                        'backgroundColor':'#1d1d1d'
                                    }
                                },
                                img({className:'logo', src:val.image},null),
                                div({className:'links'},
                                    $.map(val.dataCard, function(subVal, subKey){
                                        return div({
                                                    className:'link',
                                                    key: key + subKey,
                                                    style: {
                                                            'backgroundColor': val.backColor
                                                        }
                                                },
                                            a({className:'l', href:subVal.link},
                                                span({className:'text'},
                                                    subVal.title
                                                )
                                            )
                                        )
                                    })
                                )
                            ),


                        )
            })
        )
	},

	render: function() {

			var _this = this;

			return div({className:'container'},
						div({
								className:'brandsContainer',

							},
						    this.getbrands()
						)
			)
	}
});

'use strict';

/**
 * @component   : Menu
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
        taxonomy: []
		};
	};

	renders.components.menucuenta = React.createClass({
		displayName: 'menumicuenta',

		getInitialState: function() {
			return getState(this.props.store);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
        componentWillMount: function(){

        },

        componentDidMount: function(){

        },
    	render: function(){

    		return div({className: 'options'},
				ul({className:'listaMenu'},
					li({className:'option'},
						a({href:'/mi-cuenta/informacion'},
							span({className:'text'},'Informacion de la cuenta')
						)
					),
					li({className:'option'},
						a({href:'/mi-cuenta/edicion'},
							span({className:'text'},'Edicion de mis datos')
						)
					),
					li({className:'option'},
						a({href:'/mi-cuenta/notificacion'},
							span({className:'text'},'Notificaciones por correo electrónico')
						)
					),
					li({className:'option'},
						a({href:'/mi-cuenta/usuarios-bloqueados'},
							span({className:'text'},'Usuarios bloqueados')
						)
					),
					li({className:'option'},
						a({href:'/mi-cuenta/eliminar-cuenta'},
							span({className:'text'},'Eliminar mi cuenta')
						)
					)
				)
			);
    	}
    });
})();

'use strict';

/**
 * @component   : Product
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
		};
	};

	renders.components.textbox = React.createClass({
		displayName: 'ctrlTexbox',
		size: '',
		getInitialState: function() {
			return {
				statusControl: false,
				largeStr: 0,
				text: ''
			};
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var regex = '';
			var validate = false;
			if(_this.props.size === 'short'){
				_this.size = '25%'
			}else if(_this.props.size === 'middle'){
				_this.size = '50%'
			}else if(_this.props.size === 'full'){
				_this.size = '100%'
			}

			if(_this.props.type === 'text'){
				regex = '/\w+@\w\.com/';
			}else if(_this.props.type === 'mail'){
				regex = '/w+/';
			}

			var data = this.state.text;
			validate = data.match(regex);
			console.log("text: ", validate)



			return div({ 
							className: 'textBoxCtrl',
							style: {
								'width': _this.size
							}
						}, 
						div({className:'borderStatus'},
							div({
									className:'borderColor',
									style: {
										bottom: (_this.state.statusControl) ? '30px' : '0',
										fontSize: _this.state.statusControl ? '12px' : '16px'
									}
								}, this.props.placeholder),
							input({
									type:'text', className:'box',
									style: {
										border: _this.state.statusControl ? '1px solid #afafaf' : '1px solid #e3e3e3'
									},
									onBlur: function(){
										_this.state.largeStr > 1 ? _this.setState({statusControl: true}) : _this.setState({statusControl: false}) 
										
									},
									onFocus: function(){
										_this.setState({statusControl: true})
									},
									onChange: function(e){
										_this.setState({largeStr: e.target.value.length, text: e.target.value})
									}
								})
						)
				);
		}
	});
})();

'use strict';

/**
 * @component   : Calendar
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
		};
	};

	renders.components.calendar = React.createClass({
		displayName: 'ctrlCalendar',
		size: '',
		getInitialState: function() {
			return {
				statusControl: false,
				largeStr: 0,
				text: '',
				viewCalendar: false
			};
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var regex = '';
			var validate = false;
			if(_this.props.size === 'short'){
				_this.size = '25%'
			}else if(_this.props.size === 'middle'){
				_this.size = '50%'
			}else if(_this.props.size === 'full'){
				_this.size = '100%'
			}

			console.log("viewCalendar: ", _this.state.viewCalendar)

			return div({ 
							className: 'textBoxCtrl',
							style: {
								'width': _this.size
							}
						}, 
						div({className:'borderStatus'},
							div({
									className:'borderColor',
									style: {
										bottom: (_this.state.statusControl) ? '30px' : '0',
										fontSize: _this.state.statusControl ? '12px' : '16px'
									}
								}, this.props.placeholder),
							div({className: _this.state.viewCalendar ? 'containerDate active' : 'containerDate'},
								
									div({className:'container'},
										div({className:'title'},'Día'),
										div({className:'mask'},
											ul({className:'dates'},
												li({className:'date'},1),
												li({className:'date'},2),
												li({className:'date'},3),
												li({className:'date'},4),
												li({className:'date'},5),
												li({className:'date'},6),
												li({className:'date'},7),
												li({className:'date'},8),
												li({className:'date'},9),
												li({className:'date'},10),
												li({className:'date'},11),
												li({className:'date'},12),
												li({className:'date'},13),
												li({className:'date'},14),
												li({className:'date'},15),
												li({className:'date'},16),
												li({className:'date'},17),
												li({className:'date'},18),
												li({className:'date'},19),
												li({className:'date'},20),
												li({className:'date'},21),
												li({className:'date'},22),
												li({className:'date'},23),
												li({className:'date'},24),
												li({className:'date'},25),
												li({className:'date'},26),
												li({className:'date'},27),
												li({className:'date'},28),
												li({className:'date'},29),
												li({className:'date'},30),
												li({className:'date'},31)
												
											)
										)
									),
									div({className:'container'},
										div({className:'title'},'Mes'),
										div({className:'mask'},
											ul({className:'months'},
												li({className:'month'},'Enero'),
												li({className:'month'},'Febrero'),
												li({className:'month'},'Marzo'),
												li({className:'month'},'Abril'),
												li({className:'month'},'Mayo'),
												li({className:'month'},'Junio'),
												li({className:'month'},'Julio'),
												li({className:'month'},'Agosto'),
												li({className:'month'},'Septiembre'),
												li({className:'month'},'Octubre'),
												li({className:'month'},'Noviembre'),
												li({className:'month'},'Diciembre')
											)
										)
									),
									div({className:'container'},
										div({className:'title'},'Año'),
										div({className:'mask'},
											ul({className:'years'},
												li({className:'year'},'1991'),
												li({className:'year'},'1992'),
												li({className:'year'},'1993'),
												li({className:'year'},'1994'),
												li({className:'year'},'1995'),
												li({className:'year'},'1996'),
												li({className:'year'},'1997'),
												li({className:'year'},'1998'),
												li({className:'year'},'1999'),
												li({className:'year'},'2000'),
												li({className:'year'},'2001'),
												li({className:'year'},'2002'),
												li({className:'year'},'2003'),
												li({className:'year'},'2004'),
												li({className:'year'},'2005'),
												li({className:'year'},'2006'),
												li({className:'year'},'2007'),
												li({className:'year'},'2008'),
												li({className:'year'},'2009'),
												li({className:'year'},'2010'),
												li({className:'year'},'2011')										
											)

										)
									)
							),
							span({
									className:'icon icon-calendar',
									onClick: function(){
										_this.setState({viewCalendar: !_this.state.viewCalendar}) 
									}	
								},null),
							input({
									type:'text', className:'box',
									style: {
										border: _this.state.statusControl ? '1px solid #afafaf' : '1px solid #e3e3e3'
									},
									onBlur: function(){
										_this.state.largeStr > 1 ? _this.setState({statusControl: true}) : _this.setState({statusControl: false}) 
										
									},
									onFocus: function(){
										_this.setState({statusControl: true})
									},
									onChange: function(e){
										_this.setState({largeStr: e.target.value.length, text: e.target.value})
									}
								})
						)
				);
		}
	});
})();

'use strict';

/**
 * @component   : signup
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
		};
	};

	renders.components.signup = React.createClass({
		displayName: 'ctrlSignup',
		size: '',
		getInitialState: function() {
			return {
				statusControl: false,
				largeStr: 0,
				text: ''
			};
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var regex = '';
			var validate = false;
			if(_this.props.size === 'short'){
				_this.size = '25%'
			}else if(_this.props.size === 'middle'){
				_this.size = '50%'
			}else if(_this.props.size === 'full'){
				_this.size = '100%'
			}

			if(_this.props.type === 'text'){
				regex = '/\w+@\w\.com/';
			}else if(_this.props.type === 'mail'){
				regex = '/w+/';
			}

			var data = this.state.text;
			validate = data.match(regex);
			console.log("text: ", validate)



			return div({ 
							className: 'textSignup',
							style: {
								'width': _this.size
							}
						}, 
						div({className:'borderStatus'},
							div({
									className:'borderColor',
									style: {
										bottom: (_this.state.statusControl) ? '30px' : '0',
										fontSize: _this.state.statusControl ? '12px' : '16px',
										backgroundColor: _this.state.statusControl ? 'transparent' : 'white',
										color: _this.state.statusControl ? 'white' : 'gray'
									}
								}, this.props.placeholder),
							div({className:'button'},
								span({className:'icon-mail5'},null)
							),
							input({
									type:'text', className:'box',
									style: {
										border: _this.state.statusControl ? '1px solid #afafaf' : '1px solid #e3e3e3'
									},
									onBlur: function(){
										_this.state.largeStr > 1 ? _this.setState({statusControl: true}) : _this.setState({statusControl: false}) 
										
									},
									onFocus: function(){
										_this.setState({statusControl: true})
									},
									onChange: function(e){
										_this.setState({largeStr: e.target.value.length, text: e.target.value})
									}
								})
						)
				);
		}
	});
})();

'use strict';

/**
 * @component   : Social module
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
		};
	};

	renders.components.social = React.createClass({
		displayName: 'socialSection',
		size: '',
		getInitialState: function() {
			return {
				status: false,
			};
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var regex = '';
			

			return div({  className: 'socialSection'}, 
						div({className:'controls'},
							div({className:'first'},
								ul({className:'sections'},
									li({className:'subSection'},'Eventos'),
									li({className:'subSection'},'Galeria'),
									li({className:'subSection'},'Unete!'),
									li({className:'subSection'},'Nosotros'),
									li({className:'subSection last'},'Mexico')
								)
							),
							div({className:'second'},
								div({className:'secondSection', id:'disclaimer'},'Registrate con nosotros y conoce los beneficios, es gratis!'),
								div({className:'secondSection', id:'register'},
									React.createElement(renders.components.signup,{size: 'full', placeholder: 'Correo electrónico', type:'mail'}),
								),
								div({className:'secondSection', id:'socialnetwork'},
									
									div({className:'circleIcon', id:'youtube'},
										span({className:'icon icon-youtube'},null)
									),
									div({className:'circleIcon', id:'pinteres'},
										span({className:'icon icon-pinterest2'},null)
									),
									div({className:'circleIcon', id:'instagram'},
										span({className:'icon icon-instagram'},null)
									),
									div({className:'circleIcon', id:'twitter'},
										span({className:'icon icon-twitter'},null)
									),
									div({className:'circleIcon', id:'facebook'},
										span({className:'icon icon-facebook'},null)
									)
								)
							)
						)
					);
		}
	});
})();

'use strict';

/**
 * @component   : Dynamic selecter
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
		};
	};

	renders.components.dinamicSelecter = React.createClass({
		displayName: 'dinamicSelecter',
		size: '',
		getInitialState: function() {
			return {
				statusControl: false,
				largeStr: 0,
				text: ''
			};
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			
			return div({ className: 'dynamicSelecter' }, 
						div({className:'backColor'},''),
						div({className:'back'},''),
						div({className:'circleCtrl'},
							div({className:'photoBack'},''),
							div({className:'colorBack'},''),

							div({className:'title'},
								div({className:'textBig'},'Diseñamos'),
								div({className:'textSmall'},'Especialmente para ti')
							),
							div({className:'text'},
								'Tienes un evento y necesitas servicio a domicilio, llamanos y nosotros te atendemos.'
							),
							div({className:'circleDotted'},
								div({className:'optionCircle', id:'one'},
									span({className:'icono icon-head'},null),
									div({className:'box'},
										div({className:'titleBox'},'Registrate!'),
										div({className:'textBox'},'Registrate en nuestro portal para poder consultar el detalle de nuestros serviios personalizados')
									)
								),
								div({className:'optionCircle', id:'two'},
									span({className:'icono icon-cloud-upload2'},null),
									div({className:'box'},
										div({className:'titleBox'},'Elige un servicio'),
										div({className:'textBox'},'Selecciona un servicio de nuestro catalogo, envianos una solicitud y nosotros nos encargamos de lo demas.')
									)
								),
								div({className:'optionCircle', id:'three'},
									span({className:'icono icon-clock3'},null),
									div({className:'box'},
										div({className:'titleBox'},'Justo a tiempo'),
										div({className:'textBox'},'Haz una reservacion con anticipacion, y entonces te atenderemos en el momento preciso de tu solicitud!')
									)
								),
								div({className:'optionCircle', id:'four'},
									span({className:'icono icon-check'},null),
									div({className:'box'},
										div({className:'titleBox'},'Evaluanos'),
										div({className:'textBox'},'Despues de terminar con el servicio solicitado, regalanos tus comentarios acerca de que te parecio y si estas satisfecho.')
									)
								),
								div({className:'optionCircle', id:'five'},
									span({className: 'icono icon-heart2'},null),
									div({className:'box'},
										div({className:'titleBox'},'¿Contento?'),
										div({className:'textBox'},'Regresa con nosotros y goza de los beneficios del programa de lealtad, donde tenemos una variedad de promociones.')
									)
								)
							)
							
						)
				   );
		}
	});
})();

'use strict';

/**
 * @component   : Services
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
		};
	};

	renders.components.services = React.createClass({
		displayName: 'services',
		size: '',
		data: [
					{
						"title":"peinados",
						"photo":"/images/hairStyle.jpg"
					},
					{
						"title":"Maquillaje",
						"photo":"/images/pinkin2.jpg"
					},
					{
						"title":"Uñas",
						"photo":"/images/unas.jpg"
					},
					{
						"title":"Facial",
						"photo":"/images/faciales.jpg"
					}
			],
		getInitialState: function() {
			return {
				statusControl: false,
				largeStr: 0,
				text: ''
			};
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		getCards: function(){
			var _this = this;
			return $.map(this.data, function(val, key){
				return React.createElement(renders.components.card,{data: val, id: key})
			})
		},
		render: function() {
			var _this = this;
			return div({ className: 'services' },
						div({className:'containerServices'},
							div({className:'title'}, 'Nuestros servicios'),
							this.getCards()
						)
					);
		}
	});
})();

'use strict';

/**
 * @component   : Card
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
		};
	};

	renders.components.card = React.createClass({
		displayName: 'cardImage',
		size: '',
		
		getInitialState: function() {
			return {
				statusControl: false,
				largeStr: 0,
				text: ''
			};
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var data = this.props.val;

			console.log(this.props.data.photo);

			return  div({className:'willCard', key: _this.props.id},
						div({ className:'card'},
						div({className:'backCard1'},''),
						div({className:'backCard2'},''),
						div({className:'backCard3'},''),
						div({className:'mainCard'},
							div({className:'image'},
								img({src:this.props.data.photo})
							),
							span({className:'icono icon-bookmark'},''),
							span({className:'icono icon-star-full'},''),
							div({className:'nameCard'},this.props.data.title),
							div({className:'controls'},
								div({className:'izq'},
									span({className:'icono icon-cloud-check'},null),
									span({className:'text'},'20')
								),
								div({className:'der'},
									span({className:'icono icon-heart'},null),
									span({className:'text'},'20')
								)
							)
						)
					)
				)
					
		}
	});
})();

'use strict';

/**
 * @component   : dynamicBAnner
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
		};
	};

	renders.components.dynamicBanner = React.createClass({
		displayName: 'ctrlTexbox',
		size: '',
		getInitialState: function() {
			return {
				statusControl: false,
				largeStr: 0,
				text: ''
			};
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;

			return div({ className: 'dynamicBanner'},
						div({className:'imagenBanner'},
							img({src:'/images/learn.jpg'},null)
						),
						div({className:'boxText'},
							div({className:'title'},'Cursos de belleza'),
							div({className:'text'},'Toma nuestros cursos de Belleza, y se parte de nuestro portal donde podras anunciarte totalmente gratis!.'),
							div({className:'button'},
								span({className:'text'},'Haz clic aquí'),
								span({className:'icon icon-point-right'},null)
							)
						)
					)
		}
	});
})();

'use strict';

/**
 * @component   : shes
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};
	function getState(store) {
		return {
		};
	};

	renders.components.shes = React.createClass({
		displayName: 'shes',
		size: '',
		getInitialState: function() {
			return {
				statusControl: false,
				largeStr: 0,
				text: ''
			};
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;

			return div({ className: 'shes'},
						div({className:'bioghrap'},
							div({className:'person'},
								div({className:'photo'},
									div({className:'back'},null),
									img({src:'/images/amormio.jpg'},null),
									div({className:'description'},
										p({className:'name'},'Nancy Botello Carmona'),
										p({className:'titulo'},'CEO & Art Nail Profesional'),
										p({className:'desc'},'Siempre he pensado que la mejor actitud maximiza la creatividad')
									)
								)
							),
							div({className:'person'},
								div({className:'photo'},
									div({className:'back'},null),
									img({src:'/images/mary.jpg'},null),
									div({className:'description right'},
										p({className:'name'},'Carmen Botello Carmona'),
										p({className:'titulo'},'Partner Professional make up and hairstyle'),
										p({className:'desc'},'Hay tres cosas en la vida que no se puede perder: la esperanza, la paciencia y la honestidad')
									)
								)
							),
							div({className:'person'},
								div({className:'photo'},
									div({className:'back'},null),
									img({src:'/images/raque.jpg'}),
									div({className:'description'},
										p({className:'name'},'Raquel Rivera Carmona'),
										p({className:'titulo'},'Partner eyebrow and professional hairstyle'),
										p({className:'desc'},'Cuando nuestras actitudes sobrepasan nuestras habilidades, aun lo imposible se hace posible')
									)
								)
							)
						)
				);
		}
	});
})();

'use strict';

/**
 * @View        : Home
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
	renders.views = renders.views || {};

	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.home = React.createClass({
		getInitialState: function() {
			return getState(this.props.store);
		},
		componentWillMount: function(){

		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {

			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({ className: 'container'},
				React.createElement(sliderR,{props: this.props}),
				React.createElement(renders.components.services,{props: this.props}),
				React.createElement(renders.components.dynamicBanner,{props: this.props}),
				React.createElement(renders.components.shes,{props: this.props})

			)

		}
	});
})();

'use strict';

/**
 * @View        : Home
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */
(function() {
	renders.views = renders.views || {};
	function getState(store) {
		return { swipe: store.swipe, dataFilter: '', activeProducts: false, finding: false, voice: '' };
	};
	renders.views.sam = React.createClass({
		SpeechRecognition: null,
		voice: false,
		position: 0,
		nums: [ 'uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce'],
		getInitialState: function() {
			return getState(this.props.store);
		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
			this.initSecuence();
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		searchService: function(word){
			var _this = this;
			_this.setState({finding: true});
			$.ajax({
				url:'https://www.walmart.com.mx/WebControls/hlSearchSolr.ashx?search='+word+'%20AND%20price%3D[0%20TO%20100000]&start=0&rows=25&facet=true&ffield=price',
				dataType: 'json',
				type: 'get',
				success: function(data){
					console.log(data.docs)
					if(data.docs !== undefined){
						_this.setState({activeProducts: true})
						_this.setState({dataFilter: data.docs})
						if(_this.state.dataFilter.length >= 1){
							_this.setState({activeProducts: true})

						}else{
							_this.setState({activeProducts: false})
							document.getElementById("textSam").innerHTML = 'No encuentro nada con la palabra(s) '+ word.trim();
							_this.speak("¿Que es algo?. " + 'No encuentro nada con la palabra algo');
						}
					}else{
						_this.setState({activeProducts: false})
						document.getElementById("textSam").innerHTML = 'No encuentro nada con la palabra(s) '+ word.trim();
						_this.speak("¿Que es algo?. " + 'No encuentro nada con la palabra algo');
					}
				}
			})
		},
		move: function(direction){
			var _this = this;
			if(direction === 'mas'){ this.position++;
			}else{ --this.position; }
			if(this.position >= _this.state.dataFilter.length -3){ this.position = 0 + 3; }
			if(this.position < 0){ this.position = _this.state.dataFilter.length ; }
			this.forceUpdate();
		},
		selecProducts: function(string){
			var _this = this;
			var sParsed = string.replace(', ','').replace('y ','')
			var arrNumbers = sParsed.split(' ')
			arrNumbers.splice(0,1)
		},
		renderData: function(){
			var _this = this;
			if(_this.state.dataFilter !== '' && _this.state.dataFilter !== undefined){
					setTimeout(function(){ _this.setState({finding: false});  }, 3000);
					return div({
									className:'listProduct',
									style: {
										width: _this.state.dataFilter.length * 220 + 'px',
										left: - this.position * 220 + 'px'
									}
							},
							$.map(_this.state.dataFilter, function(x, y){
								return div({className:'products', key: y},
											div({className:'product'},
												div({className:'position'},
													span({className:'number'},y)
												),
												div({className:'image'},
													img({src: 'https://www.walmart.com.mx/images/products/img_medium/'+x.upc+'m.jpg' },null)
												),
												div({className:'name'},x.n),
												div({className:'pricem'},
													span({className:'sign'},'$'),
													span({className:'price'}, x.p)
												)
											)
										)
							})
						)
			}
		},
		cleanTEXT: function(text){
			var type = '',
			 		cad = text.replace(/undefined/g , '').toLowerCase(),
					arrWords = cad.split(' '),
			 		finder = arrWords[1] + ' ' + arrWords[2] + ' ' + arrWords[3] + ' ' + arrWords[4] + ' ' + arrWords[5],
			 		trigger = arrWords[0];

			if(trigger == "busca" || trigger == "necesito" || trigger == "quiero" || trigger == "encuentra" || trigger == "buscame" || trigger == "búscame"){ type = "busca"; }
			if(trigger == "juega" || trigger == "cuéntame" || trigger == "hazme" || trigger == "comenta" || trigger == "dime" ||  trigger == "dimé" || trigger == "di") { type = "juega"; }
			if(trigger == "hola"){ type = "saludo"; }
			if(trigger == "gracias" || trigger == "adios" || trigger == "bye" || trigger == "vete" || trigger == "chau" || trigger == "chao" || trigger == "by"){ type = "adios"; }
			if(trigger == "ir" || trigger == "ve" || trigger == "ver"  ){ type = "redirect" }
			this.processSam(type, finder.replace(/undefined/g , ''))
		},
		processSam: function(trigger, finder){
			var _this = this, textVOICE;
			// **** Interaction Finder width GOOGLE CLOUD recognition OR WHATSON ****
			if(trigger == 'saludo'){
							_this.setState({activeProducts: false, voice: true})
						if( finder.indexOf('siri') >= 0){
							textVOICE = '¡Hola!, pero yo no soy Siri, soy Sam';
							document.getElementById("textSam").innerHTML = textVOICE;
							_this.speak(textVOICE);
						}else if(finder.indexOf('cortana') >= 0 ){
							textVOICE = '¡Hola!, Aun que estuvieramos en Windows no me gustaria ser ella';
							document.getElementById("textSam").innerHTML = textVOICE;
							_this.speak(textVOICE);
						}else if(finder.indexOf('jarvis') >= 0 || finder.indexOf('yarbis') >= 0 ){
							textVOICE = '¡Hola!, ¿Señor Stark?';
							document.getElementById("textSam").innerHTML = textVOICE;
							_this.speak(textVOICE);
						}else if(finder.indexOf('nombre') >= 0 ){
							textVOICE = '¡QUe tal Danae!, Ya deja trabajar a tu papi, tiene mucho que hacer';
							document.getElementById("textSam").innerHTML = textVOICE;
							_this.speak(textVOICE);
						}else{
							textVOICE = '¡Que tal!, ¿En que te puedo ayudar?';
							document.getElementById("textSam").innerHTML = textVOICE;
							_this.speak(textVOICE);
						}
			}
			if(trigger == 'juega'){
					if(finder.indexOf('chiste') >= 1){
						textVOICE = ['¿El dinero o la vida?. Lo siento, soy programador. i?.  ... No tengo dinero ni vida.','¿Que le dice un bit al otro?. Nos vemos en el bus','¿Cuántos programadores hacen falta para cambiar una bombilla?. Ninguno. porque es un problema de hardware.','Sólo hay 10 tipos de personas en el mundo, las que entienden binario y las que no.'];
						var selected = textVOICE[Math.floor((Math.random() * textVOICE.length-1) + 1)];
						document.getElementById("textSam").innerHTML = selected;
						_this.speak(selected);
					}
					if(finder.indexOf('broma') >= 1){
						textVOICE = '¡No me gusta bromear, se un poco mas serio por favor!';
						document.getElementById("textSam").innerHTML = textVOICE;
						_this.speak(textVOICE);
					}
					this.setState({activeProducts: false}); return;
			}
			if(trigger == 'busca'){
				_this.searchService(finder);
				textVOICE = finder;
				document.getElementById("textSam").innerHTML = "Buscando " + textVOICE;
				_this.speak("Buscando " + textVOICE);
			}
			if(trigger == 'redirect'){
				if(finder.indexOf('facturación') >= 1 || finder.indexOf('facturar') >= 1){ window.location.href = "https://facturacion.walmartmexico.com.mx/"; }
				if(finder.indexOf('súper') >= 1 ){ window.location.href = "https://super.walmart.com.mx/"; }
				if(finder.indexOf('tecnología') >= 1 ){ window.location.href = "https://walmart.com.mx/inicio"; }
				if(finder.indexOf('promociones') >= 1 ){ window.location.href = "https://super.walmart.com.mx/promotion/promotionLandingPage.jsp"; }
				if(finder.indexOf('registro') >= 1 ){ window.location.href = "https://super.walmart.com.mx/myaccount/login.jsp?fromLink=register"; }
				if(finder.indexOf('mis listas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/myaccount/login.jsp?myAccount=myList"; }
				if(finder.indexOf('despensa') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Despensa/cat120005?storeId=0000009999"; }
				if(finder.indexOf('lacteos') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Lacteos/cat120006?storeId=0000009999"; }
				if(finder.indexOf('frutas y verduras') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Frutas-y-Verduras/cat120007?storeId=0000009999"; }
				if(finder.indexOf('frutas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Frutas-y-Verduras/cat120007?storeId=0000009999"; }
				if(finder.indexOf('verduras') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Frutas-y-Verduras/cat120007?storeId=0000009999"; }
				if(finder.indexOf('carnes y pescados') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Carnes-y-Pescados/cat120008?storeId=0000009999"; }
				if(finder.indexOf('carnes') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Carnes-y-Pescados/cat120008?storeId=0000009999"; }
				if(finder.indexOf('pescados') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Carnes-y-Pescados/cat120008?storeId=0000009999"; }
				if(finder.indexOf('salchichonería') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Salchichoneria/cat120009?storeId=0000009999"; }
				if(finder.indexOf('panadería') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Panaderia-y-Tortilleria/cat120010?storeId=0000009999"; }
				if(finder.indexOf('tortillería') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Panaderia-y-Tortilleria/cat120010?storeId=0000009999"; }
				if(finder.indexOf('jugos') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Jugos-y-Bebidas/cat120011?storeId=0000009999"; }
				if(finder.indexOf('bebidas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Jugos-y-Bebidas/cat120011?storeId=0000009999"; }
				if(finder.indexOf('vinos y licores') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Cerveza-Vinos-y-Licores/cat940184?storeId=0000009999"; }
				if(finder.indexOf('cerveza') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Cerveza-Vinos-y-Licores/cat940184?storeId=0000009999"; }
				if(finder.indexOf('licores') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Cerveza-Vinos-y-Licores/cat940184?storeId=0000009999"; }
				if(finder.indexOf('vinos') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Cerveza-Vinos-y-Licores/cat940184?storeId=0000009999"; }
				if(finder.indexOf('congelados') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Congelados/cat120013?storeId=0000009999"; }
				if(finder.indexOf('limpieza') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Limpieza-y-Mascotas/cat120014?storeId=0000009999"; }
				if(finder.indexOf('mascotas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Limpieza-y-Mascotas/cat120014?storeId=0000009999"; }
				if(finder.indexOf('bebés') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Bebes/cat120015?storeId=0000009999"; }
				if(finder.indexOf('farmacia') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Farmacia/cat120016?storeId=0000009999"; }
				if(finder.indexOf('Higiene y Belleza') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Higiene-y-Belleza/cat120017?storeId=0000009999"; }
				if(finder.indexOf('Higiene') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Higiene-y-Belleza/cat120017?storeId=0000009999"; }
				if(finder.indexOf('Belleza') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Higiene-y-Belleza/cat120017?storeId=0000009999"; }
				if(finder.indexOf('directorio') >= 1 ){ window.location.href = "https://super.walmart.com.mx/storelocator/storeLocator.jsp"; }
				if(finder.indexOf('tiendas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/storelocator/storeLocator.jsp"; }
				if(finder.indexOf('formas de pago') >= 1 ){ window.location.href = "https://super.walmart.com.mx/common/paymentOptions.jsp"; }
				if(finder.indexOf('formas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/common/paymentOptions.jsp"; }
				if(finder.indexOf('pago') >= 1 ){ window.location.href = "https://super.walmart.com.mx/common/paymentOptions.jsp"; }
			}
			if(trigger == 'adios'){
				_this.setState({activeProducts: false, voice: false})
				_this.speak('Adios');
			}
		},
		initSecuence: function(){
			var _this = this;
			this.SpeechRecognition = this.SpeechRecognition || webkitSpeechRecognition
			this.recognition = new this.SpeechRecognition();
			this.recognition.lang = "es-MX";
			this.recognition.continuous = false;
			this.recognition.interimResults = true;
			this.recognition.start();
			this.recognition.onresult = function(event) {
			var wordding = '';
			  for (var i = event.resultIndex; i < event.results.length; i++) {
			    if(event.results[i].isFinal){ this.wordding += event.results[i][0].transcript }
				}
			}
			this.recognition.onstart = function(event) { }
			this.recognition.onerror = function(event) { }
			this.recognition.onend = function(event) {
				if(this.wordding != undefined){ _this.cleanTEXT(this.wordding) }
				_this.initSecuence();
			}
		},
		speak: function(text) {
			var _this = this;
			var msg = new SpeechSynthesisUtterance();
			msg.text = text;
			msg.volume = parseFloat(1);
			msg.rate = parseFloat(0.8);
			msg.pitch = parseFloat(1);
			var voice = 'Google español de México';
			if (voice) { msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voice; })[0]; }
			window.speechSynthesis.speak(msg);
		},
		render: function() {
			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({ className: 'appSam'  },
								div({className: _this.state.voice ? 'voiceOver active' : 'voiceOver'},
									div({className:'circles'},
										div({className:'circleMajor'},null),
										div({className:'circlemiddle'},null),
										div({className:'circleminor'},
											svg({	className: _this.state.finding === true ? 'points finder': 'points',
													height:'75', width: '75',
													style:{ border: '0px solid white' }
												},
												circle({cx:'20', cy:'29', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null),
												circle({cx:'36', cy:'20', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null),
												circle({cx:'53', cy:'29', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null),
												circle({cx:'20', cy:'47', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null),
												circle({cx:'36', cy:'56', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null),
												circle({cx:'53', cy:'47', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null)
											)
										)
									),
									div({className:'tu', id:'tu'},
										null
									),
									div({className:'textSam', id:'textSam'}, '¡Hola!, ¿En que te puedo ayudar?'),
									div({className: _this.state.activeProducts ? 'productContainer active' : 'productContainer' },
										div({className: _this.state.activeProducts ? 'shadowGlow true' : 'shadowGlow error'},null
									),
										_this.renderData(),
										div({className:'moonMiddle left', onClick: function(){ _this.move('menos')}}, null),
										div({className:'moonMiddle right', onClick: function(){ _this.move('mas')}}, null)
									)
								)
						);
		}
	});
})();

'use strict';

/**
 * @View        : Ingresar
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
	renders.views.login = renders.views.login || {};

	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.login.ingresar = React.createClass({
		getInitialState: function() {
			return getState(this.props.store);
		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({ className: 'registro',
								 },
									div({	className:'backImage',
												style:{
													'backgroundImage': 'url(images/backImage.jpg)',
													'backgroundRepeat':'repeat',
													'filter':'blur(5px)'
												}
								},null),
									div({className:'backImageSup'},
										div({className:'form'},
											div({className:'image'},
												img({src:'images/espejoBack.jpg'},null)
											),
											div({className:'controls'},
													div({className:'logotipo'},
														img({src:"images/logotipo.png"},null)
													),
													div({className:'title'},
														p({className:'subTitle'},'Bienvenida a Nail&Glam'),
														p({className:'text'},'Catálogo de servicios y productos')
													),
													div({className:'control'},
														input({type:'text', placeholder:'correo electrónico'},null)
													),
													div({className:'control'},
														input({type:'password', placeholder:'Crea una contraseña'},null)
													),
													div({className:'control'},
														div({className:'button'},
															span({className:'text'},'Ingresar')
														)
													),
													div({className:'separator'},
														'o'
													),
													div({className:'control'},
														div({
																	className:'button blue',
																	onClick: function(){
																		FB.getLoginStatus(function(response) {
																			if(response.status === 'not_authorized' || response.status === 'unknown'){
																				FB.login(function(response) {
																						if (response.status === 'connected') {
																								window.location.href = "/"
																						} else {
																								alert("Cancelaste el inicio de sesion con Facebook")
																						}
																				});
																			}
																		});
																}
															}, span({className:'text'},'Continuar con Facebook')
														)
													),
													div({className:'messageLogin'},
														p({className:'message'},
															span({className:'text'},'Olvidaste tu '),
															a({href:'recuperar-contrasena'},'contraseña '),
															span({className:'text'},'o necesitas una  '),
															a({href:'/registro'},'cuenta.')
														)
													)
											)
										)
									)
								)


		}
	});
})();

'use strict';

/**
 * @View        : Ingresar
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
	renders.views.registro = renders.views.registro || {};

	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.login.registro = React.createClass({
		getInitialState: function() {
			return getState(this.props.store);
		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({ className: 'registro',
								 },
									div({	className:'backImage',
												style:{
													'backgroundImage': 'url(images/backImage.jpg)',
													'backgroundRepeat':'repeat',
													'filter':'blur(5px)'
												}
								},null),
									div({className:'backImageSup'},
										div({className:'form'},
											div({className:'image'},
												img({src:'images/espejoBack.jpg'},null)
											),
											div({className:'controls'},
													div({className:'logotipo'},
														img({src:"images/logotipo.png"},null)
													),
													div({className:'title'},
														p({className:'subTitle'},'Bienvenida a Nail&Glam'),
														p({className:'text'},'Catálogo de servicios y productos')
													),
													div({className:'control'},
														input({type:'text', placeholder:'correo electrónico'},null)
													),
													div({className:'control'},
														input({type:'password', placeholder:'Crea una contraseña'},null)
													),
													div({className:'control'},
														div({className:'button'},
															span({className:'text'},'Crear cuenta')
														)
													),
													div({className:'separator'},
														'o'
													),
													div({className:'control'},
														div({
																	className:'button blue',
																	onClick: function(){
																		FB.getLoginStatus(function(response) {
																			if(response.status === 'not_authorized' || response.status === 'unknown'){
																				FB.login(function(response) {
																						if (response.status === 'connected') {
																								window.location.href = "/"
																						} else {
																								alert("Cancelaste el inicio de sesion con Facebook")
																						}
																				});
																			}
																		});
																}
															}, span({className:'text'},'Continuar con Facebook')
														)
													),
													div({className:'messageLogin'},
														p({className:'message'},
															span({className:'text'},'Al crear una cuenta, '),
															a({href:''},'aceptas las Condiciones '),
															span({className:'text'},'del servicio y la '),
															a({href:''},'Política de privacidad de Nail&Glam.')
														)
													)
											)
										)
									)
								)


		}
	});
})();

'use strict';

/**
 * @View        : Ingresar
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
	renders.views.login = renders.views.login || {};

	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.login.recuperacion = React.createClass({
		getInitialState: function() {
			return getState(this.props.store);
		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({
							className: 'container'
						},'recuperacion de contraseña', a({href:'/registro'}, 'Registro')
					)

		}
	});
})();

'use strict';

/**
 * @component   : vicky view
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.views.nosotros = renders.views.nosotros || {};
	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.nosotros.vicky = React.createClass({
		displayName: 'vicky',
		getInitialState: function() {
			return getState(this.props.store);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			return div({ className: 'vicky'
			}, 'vicky');
		}
	});
})();

'use strict';

/**
 * @component   : vicky view
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.views.nosotros = renders.views.nosotros || {};
	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.nosotros.mision = React.createClass({
		displayName: 'mision',
		getInitialState: function() {
			return getState(this.props.store);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			return div({ className: 'mision'
    }, 'mision');
		}
	});
})();

'use strict';

/**
 * @component   : vicky view
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.views.nosotros = renders.views.nosotros || {};
	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.nosotros.vision = React.createClass({
		displayName: 'vision',
		getInitialState: function() {
			return getState(this.props.store);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			return div({ className: 'vision'
    }, 'Visión');
		}
	});
})();

'use strict';

/**
 * @component   : vicky view
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.views.nosotros = renders.views.nosotros || {};
	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.nosotros.terminos = React.createClass({
		displayName: 'terminos',
		getInitialState: function() {
			return getState(this.props.store);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			return div({ className: 'terminos'
    }, 'terminos');
		}
	});
})();

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

'use strict';

/**
 * @View        : Mi cuenta - Informacion
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
    renders.views.micuenta = renders.views.micuenta || {};

    function getState(store) {
        return {
            lista: ''
        };
    };

    renders.views.micuenta.informacion = React.createClass({
        list: '',
        getInitialState: function() {
            return getState(this.props.store);
        },
        componentDidMount: function() {
            this.props.store.addListener(this._onChange);
            document.getElementById("files").addEventListener('change', this.archivo, false);
        },
        _onChange: function() {
            if (this.isMounted()) {
                this.setState(getState(this.props.store));
            }
        },
        archivo: function(evt) {
            var _this = this;
            var files = evt.target.files; // filelist object
            for (var i = 0, f; f = files[i]; i++) {
                if (!f.type.match('image.*')) {
                    continue;
                }
                var reader = new FileReader();
                reader.onload = (function(theFile) {
                    return function(e) {
                        _this.setState({ lista: e.target.result })
                        document.getElementById('list').innerHTML = ['<img class="thumb" src="' + e.target.result + '" title="" />'];
                    };
                })(f);
                reader.readAsDataURL(f);
            }
            this.paintBlob();
        },
        paintBlob: function() {
            console.log(this.state.lista);
        },
        render: function() {
            var _this = this;
            var agent = _this.props.agent;
            var deviceType = _this.props.deviceType;
            return div({ className: 'micuenta' },
                div({ className: 'menumicuenta' },
                    React.createElement(renders.components.menucuenta, { props: this.props })
                ),
                div({ className: 'contenmicuenta' },
                    div({ className: 'content' },
                        div({ className: 'title' },
                            'Informacion de mi cuenta'
                        ),
                        div({ className: 'labelsContent' },
                            span({ className: 'label' }, 'usuario  |'),
                            a({ className: 'link', href: '/mi-cuenta/edicion' }, 'Editar')
                        ),
                        div({ className: 'controlContent' },
                            React.createElement(renders.components.textbox, { size: 'middle', placeholder: 'nombre', type: 'text' }),
                            React.createElement(renders.components.textbox, { size: 'middle', placeholder: 'Correo electrónico', type: 'mail' }),
                            React.createElement(renders.components.calendar, { size: 'middle', placeholder: 'Fecha de nacimiento', type: 'calendar' }),
                            React.createElement(renders.components.calendar, { size: 'middle', placeholder: 'Fecha de nacimiento', type: 'calendar' }),
                            div({ className: 'choose' },
                                input({ type: 'file', id: 'files' }),
                                div({ className: 'data' },
                                    div({ className: 'image' },
                                        div({ className: 'containerImg', id: 'list' })
                                    ),
                                    div({ className: 'loader' }, _this.list)
                                )
                            )
                        )

                    )

                )
            )


        }
    });
})();
'use strict';

/**
 * @View        : Mi cuenta - Edicion
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
	renders.views.micuenta = renders.views.micuenta || {};

	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.micuenta.edicion = React.createClass({

		getInitialState: function() {
			return getState(this.props.store);
		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({ className: 'micuenta'},
						div({className:'menumicuenta'},
							React.createElement(renders.components.menucuenta ,{props: this.props})
						),
						div({className:'contenmicuenta'},
							div({className:'content'},
								div({className:'title'},
									'Edicion de mi cuenta'
								),
								div({className:'labelsContent'},
									span({className:'label'},'usuario')
								)
							)

						)
					)


		}
	});
})();

'use strict';

/**
 * @View        : Mi cuenta - Edicion
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
	renders.views.micuenta = renders.views.micuenta || {};

	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.micuenta.notificacion = React.createClass({

        getInitialState: function() {
			return getState(this.props.store);
		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({ className: 'micuenta'},
						div({className:'menumicuenta'},
							React.createElement(renders.components.menucuenta ,{props: this.props, changepos: this.changepos})
						),
                        div({className:'contenmicuenta'},
							div({className:'content'},
                                div({className:'title'},
                                    'Notificaciones por correo electronico'
                                )

							)

						)
					)


		}
	});
})();

'use strict';

/**
 * @View        : Mi cuenta - bloqueados
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
	renders.views.micuenta = renders.views.micuenta || {};

	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.micuenta.bloqueados = React.createClass({

		getInitialState: function() {
			return getState(this.props.store);
		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({ className: 'micuenta'},
						div({className:'menumicuenta'},
							React.createElement(renders.components.menucuenta ,{props: this.props})
						),
						div({className:'contenmicuenta'},
							div({className:'content'},
								div({className:'title'},
									'Usuarios bloqueados'
								)

							)

						)
					)


		}
	});
})();

'use strict';

/**
 * @View        : Mi cuenta - Edicion
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
	renders.views.micuenta = renders.views.micuenta || {};

	function getState(store) {
		return {
			swipe: store.swipe
		};
	};

	renders.views.micuenta.eliminar = React.createClass({

		getInitialState: function() {
			return getState(this.props.store);
		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({ className: 'micuenta'},
						div({className:'menumicuenta'},
							React.createElement(renders.components.menucuenta ,{props: this.props})
						),
                        div({className:'contenmicuenta'},
							div({className:'content'},
                                div({className:'title'},
                                    'Edicion de mi cuenta'
                                )
							)

						)
					)


		}
	});
})();

'use strict';

/**
 * @View        : Prices - Main
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
	renders.views.prices = renders.views.prices || {};

	function getState(store) {
		return {
		};
	};

	renders.views.prices.main = React.createClass({
		getInitialState: function() {
			return getState(this.props.store);
		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({ className: 'prices'},
						div({className:'banner'},
                            img({className:'image', src:'images/bannPrices.jpg'}),
                            div({className:'title'},
                                p({className:'up'},'Just do it'),
                                p({className:'text'},'haz que tu evento sea memorable, con nuestros planes de belleza creativa de Nail Glam. Las herramientas y materiales que usamos son lideres en el mercado, tenemos a las personas correctas para la ocasión.')
                            )
                        ),
                        div({className:'bar'},
                            span({className:'textBar'},
                                'obten todas las caracteristicas y servicios que tu quieras, incluidas en los paquetes que te mostramos'
                            ),
                            span({className:'button'},'Adquirir servicio ahora')
                        ),
                        div({className:'paqs'},
                            div({className:'title'},'Paquetes'),
                            div({className:'mainBlock'},
                                div({className:'block'},
                                    div({className:'blockInt', id:'b1'},
                                        div({className:'title'},'Faciales'),
                                        div({className:'description'},'Los mejores masajes, relajamiento en cada movimiento'),
                                        div({className:'desde'},'Desde'),
                                        div({className:'price'},
                                            span({className:'first'},'MXN2,500'),
                                            span({className:'second'},'/servicio'),

                                        ),
                                        div({className:'ahorro'},'MXN2,200/servicio cuando regresas'),
                                        div({className:'button'},'Adquirir servicio'),
                                        ul({className:'list'},
                                            li({className:'option'},'Limpieza completa'),
                                            li({className:'option'},'Planchado de cejas'),
                                            li({className:'option'},'Masaje facial'),
                                            li({className:'option'},'Aclarado de piel'),
                                            li({className:'option'},'Depilación'),
                                            li({className:'option'},'Colageno')
                                        )
                                    )
                                ),
                                div({className:'block'},
                                    div({className:'blockInt', id:'b2'},
                                        div({className:'title'},'Uñas'),
                                        div({className:'description'},'Diseños a la medida, con elegantes accesorios y colores espectacuales'),
                                        div({className:'desde'},'Desde'),
                                        div({className:'price'},
                                            span({className:'first'},'MXN3,200'),
                                            span({className:'second'},'/servicio'),

                                        ),
                                        div({className:'ahorro'},'MXN2,900/servicio cuando regresas'),
                                        div({className:'button'},'Adquirir servicio'),
                                        ul({className:'list'},
                                            li({className:'option'},'Colores basicos'),
                                            li({className:'option'},'+ colores artisticos'),
                                            li({className:'option'},'Efectos y paisajes'),
                                            li({className:'option'},'Fijuras 3D'),
                                            li({className:'option'},'Elementos adicionales'),
                                            li({className:'option'},'Piedras espectaculares')
                                        )
                                    )
                                ),
                                div({className:'block'},
                                    div({className:'blockInt', id:'b3'},
                                        div({className:'title'},'Peinados'),
                                        div({className:'description'},'Innovamos con cada tipo de cabello, con los mejores accesorios'),
                                        div({className:'desde'},'Desde'),
                                        div({className:'price'},
                                            span({className:'first'},'MXN3,700'),
                                            span({className:'second'},'/servicio'),

                                        ),
                                        div({className:'ahorro'},'MXN3,400/servicio cuando regresas'),
                                        div({className:'button'},'Adquirir servicio'),
                                        ul({className:'list'},
                                            li({className:'option'},'Shock de queratina'),
                                            li({className:'option'},'Peinado artistico'),
                                            li({className:'option'},'Corte de cabello'),
                                            li({className:'option'},'Lavado especial'),
                                            li({className:'option'},'Hidratación'),
                                            li({className:'option'},'Vitaminas adicionales')
                                        )
                                    )
                                ),
                                div({className:'block'},
                                    div({className:'blockInt', id:'b4'},
                                        div({className:'title'},'Maquillaje'),
                                        div({className:'description'},'Seras el alma de la fiesta con los maquillajes mas y sofisticados'),
                                        div({className:'desde'},'Desde'),
                                        div({className:'price'},
                                            span({className:'first'},'MXN4,500'),
                                            span({className:'second'},'/servicio'),

                                        ),
                                        div({className:'ahorro'},'MXN4,200/servicio cuando regresas'),
                                        div({className:'button'},'Adquirir servicio'),
                                        ul({className:'list'},
                                            li({className:'option'},'Artistico'),
                                            li({className:'option'},'Fantasia'),
                                            li({className:'option'},'Social'),
                                            li({className:'option'},'Hallowen'),
                                            li({className:'option'},'Con aerografo'),
                                            li({className:'option'},'Boda')
                                        )
                                    )
                                )
                            )
                        )

					)


		}
	});
})();

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
'use strict';

angular
.module('copilotjsApp')
.controller('HomeCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.views.home, {
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
'use strict';

angular
.module('copilotjsApp')
.controller('IngresarCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.views.login.ingresar, {
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

'use strict';

angular
.module('copilotjsApp')
.controller('RegistroCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.views.login.registro, {
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

'use strict';

angular
.module('copilotjsApp')
.controller('RecoveryPasswordCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.views.login.recuperacion, {
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

'use strict';

angular
.module('copilotjsApp')
.controller('visionCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.views.nosotros.vision, {
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

'use strict';

angular
.module('copilotjsApp')
.controller('misionCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.views.nosotros.mision, {
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

'use strict';

angular
.module('copilotjsApp')
.controller('terminosCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.views.nosotros.terminos, {
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

'use strict';

angular
.module('copilotjsApp')
.controller('appCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.views.appnail.app, {
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

'use strict';

angular
.module('copilotjsApp')
.controller('pricesCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.views.prices.main, {
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
