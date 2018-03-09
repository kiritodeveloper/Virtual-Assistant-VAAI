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
            searchActive: false,
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
                div({ className: 'logo' },
                    a({ href: '/' },
                        img({ className: 'nail', src: '/images/logo.png', sytle: { width: '30px' } }, null),
                        img({ className: 'tipo', src: '/images/logotipo.png' }, null)
                    )
                ),
                div({ className: _this.state.searchActive ? 'searchBox active' : 'searchBox' },
                    div({ className: 'search' },

                        input({
                            type: 'text',
                            id: 'textBox',
                            className: 'textBox',
                            placeholder: '¿camaraaaa haz un cambio che Oscar? ... ',
                            onFocus: function() {
                                _this.setState({ searchActive: true })
                                console.log('focus')
                            },
                            onBlur: function() {
                                _this.setState({ searchActive: false })
                                console.log('blur')
                            }
                        }, null),
                        React.createElement(renders.components.vicky, {}),
                        span({ className: 'icon icon-microphone' }, null),
                        span({ className: 'icon icon-search4' }, null)

                    )
                ),
                div({ className: 'cart' },
                    span({ className: 'icon icon-cart' }, null),
                    div({ className: 'num' },
                        span({ className: 'number' }, '99')
                    )
                ),
                div({ className: 'login' },
                    p({ className: 'ingresar' },
                        a({ href: '/ingresar' },
                            span({}, 'Ingresar')
                        ),
                        span({
                            className: 'icon icon-ellipsis',
                            onClick: function() {
                                _this.setState({ openLogin: !_this.state.openLogin })
                            }
                        }, null)

                    ),
                    div({
                            className: _this.state.openLogin ? 'globeLogin active' : 'globeLogin',
                            onMouseLeave: function() {
                                _this.setState({ openLogin: false })
                            }
                        },
                        div({ className: 'triangle back' }, null),
                        div({ className: 'triangle' }, null),
                        a({ href: '/ingresar' },
                            div({
                                    className: 'lineOption',
                                    onClick: function() {
                                        _this.setState({ openLogin: false })
                                    }
                                },
                                span({ className: 'icon icon-enter' }, null),
                                span({ className: 'text' }, 'Ingresar')
                            )
                        ),
                        a({ href: '/registro' },
                            div({
                                    className: 'lineOption',
                                    onClick: function() {
                                        _this.setState({ openLogin: false })
                                    }
                                },
                                span({ className: 'icon icon-user-plus' }, null),
                                span({ className: 'text' }, 'Registro')
                            )
                        ),

                        a({ href: '/mi-cuenta/informacion' },
                            div({
                                    className: 'lineOption',
                                    onClick: function() {
                                        _this.setState({ openLogin: false })
                                    }
                                },
                                span({ className: 'icon icon-user' }, null),
                                span({ className: 'text' }, 'Mi cuenta')
                            )
                        ),
                        div({
                                className: 'lineOption',
                                onClick: function() {
                                    _this.setState({ openLogin: false })

                                    FB.logout(function(response) {
                                        console.log(response)
                                        if (response.status === 'unknown') {
                                            alert("cerraste la sesion")
                                        }
                                    })

                                }
                            },
                            span({ className: 'icon icon-exit' }, ''),
                            span({ className: 'text' }, 'Cerrar sesión')

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

var walmartVoice = {
    "config": {
        "options": {
            "mexico": "es-MX",
            "lang": "es-MX",
            "active": true,
        }
    },
    "trigger": [{
            "word": "tengo",
            "type": "evento"
        },
        {
            "word": "es",
            "type": "seleccion"
        },
        {
            "word": "recoger|servicio",
            "type": "envio"
        },
        {
            "word": "código|codigo",
            "type": "codigopostal"
        },
        {
            "word": "comprar|aceptar|acepto",
            "type": "aceptacion"
        },
        {
            "word": "tienda",
            "type": "store"
        },
        {
            "word": "buscar|busca|encuentra|quiero|dame|necesito",
            "type": "search"
        },
        {
            "word": "ir|ve|ver|redirige|colocate|cambia|regresar|cómo|recuperar",
            "type": "redirect",
            "response": [{
                    "word": "inicio|home|principio|comienza|comienzo",
                    "url": "/inicio",
                    "section": "home"
                }, {
                    "word": "accesorios de moda|accesorios|moda|moda para la vida|moda actual|accesorios de belleza",
                    "url": "/accesorios-de-moda",
                    "section": "category"
                },
                {
                    "word": "audio|sonido|Bocinas|audio para casa|audio premium|audífonos|audio para auto",
                    "url": "/audio",
                    "section": "category"
                },
                {
                    "word": "llantas|accesorios para auto|autos|autos y llantas",
                    "url": "/autos-y-llantas",
                    "section": "category"
                }, {
                    "word": "bebes|Bebés|Niños|Niños pequeños|",
                    "url": "/bebes",
                    "section": "category"
                },
                {
                    "word": "belleza|cuidado personal|belleza y cuidado personal",
                    "url": "/belleza-y-cuidado-personal",
                    "section": "category"
                },
                {
                    "word": "celulares|smartphones|mobiles|móviles|telefonos personal|telefonos personales",
                    "url": "/celulares",
                    "section": "category"
                },
                {
                    "word": "cocina|hogar|cocina y hogar|accesorios de cocina|",
                    "url": "/cocina-y-hogar",
                    "section": "category"
                },
                {
                    "word": "colchones|colchones y blancos|blancos|ropa de cama|accesorios para cama",
                    "url": "/colchones-y-blancos",
                    "section": "category"
                },
                {
                    "word": "computadoras|equipos de computo|laptops|portátiles|",
                    "url": "/computadoras",
                    "section": "category"
                },
                {
                    "word": "accesorios deportivos|desportes|Camping|Motos|Fitness|accesorios de deporte",
                    "url": "/deportes",
                    "section": "category"
                },
                {
                    "word": "electrodomésticos|refrigeradores|lavadoras|estufas|hornos|licuadoras",
                    "url": "/electrodomesticos",
                    "section": "category"
                },
                {
                    "word": "herramientas|ferretería|accesorios de trabajo",
                    "url": "/ferreteria",
                    "section": "category"
                },
                {
                    "word": "fotografías|cámaras|cámaras fotograficas",
                    "url": "/fotografia",
                    "section": "category"
                },
                {
                    "word": "Instrumentos|instrumentos musicales|instrumentos de musica|baterias|guitarras",
                    "url": "/instrumentos-musicales",
                    "section": "category"
                },
                {
                    "word": "juguetes|juguetes para niños|juguetes para niño|juguetes para niña|juguetes para niñas",
                    "url": "/juguetes",
                    "section": "category"
                },
                {
                    "word": "Libros|Libros de texto|",
                    "url": "/libros",
                    "section": "category"
                },
                {
                    "word": "refrigeradores|lavadoras|estufas|hornos|licuadoras",
                    "url": "/linea-blanca",
                    "section": "category"
                },
                {
                    "word": "perros|gatos|mascotas|animalitos|animales|comida para perro|comida para gato|",
                    "url": "/mascotas",
                    "section": "category"
                },
                {
                    "word": "muebles",
                    "url": "/muebles",
                    "section": "category"
                },
                {
                    "word": "oficina|papelería|oficina y papelería|accesorios de papel|pegamento",
                    "url": "/oficina-y-papeleria",
                    "section": "category"
                }, {
                    "word": "patio|patio y jardín|jardín|espacios abiertos|espacio abierto|accesorios de jardín",
                    "url": "/patio-y-jardin",
                    "section": "category"
                },
                {
                    "word": "películas|DVD|blu ray|bluray|discos",
                    "url": "/peliculas",
                    "section": "category"
                },
                {
                    "word": "TV|televisores|televisiones|pantallas|pantalla plana| smart TV| pantalla curva",
                    "url": "/tv-y-video",
                    "section": "category"
                },
                {
                    "word": "xbox one|play station|play station 4|videojuegos|nintendo|xbox 360|accesorios de videojuegos",
                    "url": "/videojuegos",
                    "section": "category"
                },
                {
                    "word": "xbox one|play station|play station 4|videojuegos|nintendo|xbox 360|accesorios de videojuegos",
                    "url": "/videojuegos",
                    "section": "category"
                },
                {
                    "word": "centro de ayuda|ayuda",
                    "url": "/centro-de-ayuda",
                    "section": "helpCenter"
                },
                {
                    "word": "preguntas frecuentes",
                    "url": "/centro-de-ayuda/preguntas-frecuentes/preguntas-frecuentes",
                    "section": "help center"
                },
                {
                    "word": "términos y condiciones|términos de uso",
                    "url": "/centro-de-ayuda/seguridad-y-privacidad/terminos-de-uso",
                    "section": "help center"
                },
                {
                    "word": "mis ordenes|mis pedidos|historial de pedidos|historial de ordenes|rastrear mis pedidos",
                    "url": "/mi-cuenta/mis-pedidos",
                    "section": "mi cuenta"
                },
                {
                    "word": "como comprar|",
                    "url": "/centro-de-ayuda/tus-pedidos/como-comprar",
                    "section": "help center"
                },
                {
                    "word": "comprar como invitado|",
                    "url": "/centro-de-ayuda/tus-pedidos/comprar-como-invitado",
                    "section": "help center"
                },
                {
                    "word": "crear mi cuenta|registro|como crear cuenta|como crear mi cuenta",
                    "url": "/registro",
                    "section": "mi cuenta"
                },
                {
                    "word": "login|ingresar|ingresar a cuenta",
                    "url": "/ingresar",
                    "section": "mi cuenta"
                },
                {
                    "word": "mi contraseña|contraseña|recuperar contraseña|recuperación de contraseña",
                    "url": "/recuperar-contrasena",
                    "section": "mi cuenta"
                },
                {
                    "word": "revisar carrito de compras|revisar carrito|carrito de compras",
                    "url": "/revisar-carrito",
                    "section": "carrito"
                },
                {
                    "word": "comprar",
                    "url": "/checkout",
                    "section": "checkout"
                }

            ]
        },
        {
            "word": "Hola|Hello|Hi|Como estas",
            "type": "Saludo",
            "response": [{
                "name": "Siri",
                "sentence": "¡Hola!, pero yo no soy Siri, soy Sam"
            }, {
                "name": "carito",
                "sentence": "¡Que tal!, Soy Carrito. ... ¿En que te puedo ayudar?"
            }, {
                "name": "Cortana",
                "sentence": "¡Hola!, Aun que estuvieramos en Windows no me gustaria ser ella"
            }, {
                "name": "Jarvis",
                "sentence": "¡Hola!, ¿Señor Stark?"
            }]
        },
        {
            "word": "dime|explicame|",
            "type": "explain",
            response: [{
                    "word": "como puedo comprar",
                    "text": "Mira lo que encontré en internet sobre Comó comprar en Walmart.com.mx"
                },
                {
                    "word": "me puedo registrar|me registro",
                    "text": "Mira primero entra a la página de walmart y ve a la seccion de registro"
                }
            ]
        },
        {
            "word": "desactivate|apagate",
            "type": "deactivate"
        }, ,
        {
            "word": "enciedete|actívate",
            "type": "activate"
        }

    ]
};
'use strict';
/**
 * @View        : Across
 * @Appname     : Sam
 * @description : Render Sam Component
 * @return      : renders.Sam
 */
(function() {
    renders.components = renders.components || {};

    function getState(store) {
        return {
            dataFilter: '',
            activeProducts: false,
            finding: true,
            voice: '',
            listEvents: false,
        };
    };
    renders.components.vicky = React.createClass({
        SpeechRecognition: null,
        voice: true,
        position: 0,
        list: [],
        newList: [],
        renderEvents: '',
        getInitialState: function() {
            return getState(this.props.store);
        },
        componentDidMount: function() {
            this.initSecuence();
        },
        // componentWillMount() {
        //     if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        //         // Firefox 38+ seems having support of enumerateDevicesx
        //         navigator.enumerateDevices = function(callback) {
        //             navigator.mediaDevices.enumerateDevices().then(callback);
        //         };
        //     }

        //     var MediaDevices = [];
        //     var isHTTPs = location.protocol === 'https:';
        //     var canEnumerate = false;

        //     if (typeof MediaStreamTrack !== 'undefined' && 'getSources' in MediaStreamTrack) {
        //         canEnumerate = true;
        //     } else if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
        //         canEnumerate = true;
        //     }

        //     var hasMicrophone = false;
        //     var hasSpeakers = false;
        //     var hasWebcam = false;

        //     var isMicrophoneAlreadyCaptured = false;
        //     var isWebcamAlreadyCaptured = false;

        //     function checkDeviceSupport(callback) {
        //         if (!canEnumerate) {
        //             return;
        //         }

        //         if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
        //             navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
        //         }

        //         if (!navigator.enumerateDevices && navigator.enumerateDevices) {
        //             navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
        //         }

        //         if (!navigator.enumerateDevices) {
        //             if (callback) {
        //                 callback();
        //             }
        //             return;
        //         }

        //         MediaDevices = [];
        //         navigator.enumerateDevices(function(devices) {
        //             devices.forEach(function(_device) {
        //                 var device = {};
        //                 for (var d in _device) {
        //                     device[d] = _device[d];
        //                 }

        //                 if (device.kind === 'audio') {
        //                     device.kind = 'audioinput';
        //                 }

        //                 if (device.kind === 'video') {
        //                     device.kind = 'videoinput';
        //                 }

        //                 var skip;
        //                 MediaDevices.forEach(function(d) {
        //                     if (d.id === device.id && d.kind === device.kind) {
        //                         skip = true;
        //                     }
        //                 });

        //                 if (skip) {
        //                     return;
        //                 }

        //                 if (!device.deviceId) {
        //                     device.deviceId = device.id;
        //                 }

        //                 if (!device.id) {
        //                     device.id = device.deviceId;
        //                 }

        //                 if (!device.label) {
        //                     device.label = 'Please invoke getUserMedia once.';
        //                     if (!isHTTPs) {
        //                         device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.';
        //                     }
        //                 } else {
        //                     if (device.kind === 'videoinput' && !isWebcamAlreadyCaptured) {
        //                         isWebcamAlreadyCaptured = true;
        //                     }

        //                     if (device.kind === 'audioinput' && !isMicrophoneAlreadyCaptured) {
        //                         isMicrophoneAlreadyCaptured = true;
        //                     }
        //                 }

        //                 if (device.kind === 'audioinput') {
        //                     hasMicrophone = true;
        //                 }

        //                 if (device.kind === 'audiooutput') {
        //                     hasSpeakers = true;
        //                 }

        //                 if (device.kind === 'videoinput') {
        //                     hasWebcam = true;
        //                 }

        //                 // there is no 'videoouput' in the spec.

        //                 MediaDevices.push(device);
        //             });

        //             if (callback) {
        //                 callback();
        //             }
        //         });
        //     }

        //     // check for microphone/camera support!
        //     checkDeviceSupport(function() {
        //         document.write('hasWebCam: ', hasWebcam, '<br>');
        //         document.write('hasMicrophone: ', hasMicrophone, '<br>');
        //         document.write('isMicrophoneAlreadyCaptured: ', isMicrophoneAlreadyCaptured, '<br>');
        //         document.write('isWebcamAlreadyCaptured: ', isWebcamAlreadyCaptured, '<br>');
        //     });

        // },
        _onChange: function() {
            if (this.isMounted()) {
                this.setState(getState(this.props.store));
            }
        },
        cleanTEXT: function(text) {
            var _this = this;
            var type = '',
                cad = text.replace(/undefined/g, '').toLowerCase(),
                arrWords = cad.split(' '),
                finder = arrWords[1] + ' ' + arrWords[2] + ' ' + arrWords[3] + ' ' + arrWords[4] + ' ' + arrWords[5],
                trigger = arrWords[0].toString().toLowerCase();
            walmartVoice.trigger.map(function(val, key) {
                if (val.word.toLowerCase().indexOf(trigger) >= 0) {
                    _this.processSam(val.type.toLowerCase(), finder.replace(/undefined/g, ''), val.response)
                }
            })
        },

        processSam: function(trigger, finder, response) {
            var _this = this,
                textVOICE;
            if (trigger.toLowerCase() == 'saludo') {
                response.filter(function(val, key) {
                    if (val.name.toLowerCase().indexOf(finder.toLowerCase().trim()) >= 0) {
                        _this.speak(val.sentence);
                        return;
                    }
                })
            }
            if (trigger.toLowerCase() == "evento") {
                _this.speak("Muy bien!, cuéntame que tipo de evento");
                this.props.OnEvents();
                return;
            }

            if (trigger.toLowerCase() == "seleccion") {
                window.setTimeout(function() {
                    _this.speak("ok! esta es la lista perfecta para tu evento");
                    _this.props.selectEvent(finder)
                    return;
                }, 1000);
            }

            if (trigger.toLowerCase() == 'aceptacion') {
                _this.speak('Perfecto!, ahora dime, quieres "recoger en tienda" o "servicio a domicilio!"');
                _this.props.acceptOrder();
            }

            if (trigger.toLowerCase() == 'envio') {
                console.log("TRIGGER", finder)
                if (finder.trim().toLowerCase() == 'a domicilio') {
                    _this.speak('Excelente!, Te enviaremos tu pedido hasta tu domicilio"');
                }
                if (finder.trim().toLowerCase() == 'en tienda') {
                    _this.speak('Excelente!, tu pedido estara listo en 40 minutos');
                }

            }

            // if (trigger.toLowerCase() == 'codigopostal') {
            //     _this.speak(finder);
            //     _this.props.setCP(finder)
            // }
            // if (trigger.toLowerCase() == 'store') {
            //     //_this.props.selectedStore(finder);
            //     _this.speak("Excelente!, tu pedido sera entregado por la tienda" + finder);
            // }



            // if (trigger.toLowerCase() == 'search') {
            //     textVOICE = finder;
            //     _this.props.actions.sendQuery(textVOICE.replace(/-/g, ''));
            //     walmartVoice.config.options.active ? _this.speak("Buscando " + textVOICE) : null;
            //     return;
            // }
            // if (trigger.toLowerCase() == 'redirect') {
            //     response.filter(function(val, key) {
            //         if (val.word.indexOf(finder.toLowerCase().trim().replace(/a |al /g, '')) >= 0) {
            //             window.applyURL(val.url);
            //             walmartVoice.config.options.active ? _this.speak("Redirigiendo " + finder) : null;
            //             return;
            //         }
            //     })
            // }

            // if (trigger.toLowerCase() == 'explain') {
            //     response.filter(function(val, key) {
            //         if (val.word.indexOf(finder.toLowerCase().trim().replace(/a |al /g, '')) >= 0) {
            //             walmartVoice.config.options.active ? _this.speak(val.text) : null;
            //             return;
            //         }
            //     })
            // }
            // if (trigger.toLowerCase() == 'deactivate') {
            //     this.deactivate();
            //     _this.speak("¡Adios!")
            // }
            // if (trigger.toLowerCase() == 'activate') {
            //     this.activate();
            //     _this.speak("¡Hola, las respuestas de voz han sido activadas!")
            // }
        },
        deactivate: function() {
            walmartVoice.config.options.active = false
        },
        activate: function() {
            walmartVoice.config.options.active = true
        },
        initSecuence: function() {

            var _this = this;
            this.SpeechRecognition = this.SpeechRecognition || webkitSpeechRecognition
            this.recognition = new this.SpeechRecognition();
            this.recognition.lang = walmartVoice.config.options.mexico;
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
                        div({ className: 'circleminor' }, null),

                    )
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
 * @Render del Home
 * @name WalmartApp
 * @description
 * # Home Main
 */
(function() {
    renders.carrito = renders.carrito || {};

    function getState() {
        return {
            listEvents: false,
            selectedEvent: '',
            events: ['carne asada', 'boda', 'superbowl', 'amigos'],
            showProducts: false,
            selectedProducts: [],
            accept: false,
            cp: 0,
            storeForCP: [],
            products: [{
                    "match": "carne asada",
                    "ID": "01",
                    "products": [{
                            "id": "01",
                            "name": "Bistek para asar",
                            "precio": "$120.00"
                        },
                        {
                            "id": "02",
                            "name": "Cebolla",
                            "precio": "$20.00"
                        },
                        {
                            "id": "03",
                            "name": "Chiles Abaneros",
                            "precio": "$45.00"
                        },
                        {
                            "id": "04",
                            "name": "Lechugas",
                            "precio": "$10.00"
                        },
                        {
                            "id": "05",
                            "name": "Sarten",
                            "precio": "$450.00"
                        },
                        {
                            "id": "06",
                            "name": "Aceite",
                            "precio": "$39.00"
                        }

                    ]
                },
                {
                    "match": "boda",
                    "ID": "02",
                    "products": [{
                            "id": "02",
                            "name": "Refresco",
                            "precio": "$190.00"
                        },
                        {
                            "id": "03",
                            "name": "Platos",
                            "precio": "$450.00"
                        },
                        {
                            "id": "04",
                            "name": "Cubiertos",
                            "precio": "$100.00"
                        }

                    ]
                },
                {
                    "match": "Parrillada",
                    "ID": "04",
                    "products": [{
                            "id": "01",
                            "name": "Chicharrones",
                            "precio": "$60.00"
                        },
                        {
                            "id": "02",
                            "name": "Chocolates",
                            "precio": "$95.00"
                        },
                        {
                            "id": "03",
                            "name": "cerveza victoria",
                            "precio": "$1000.00"
                        },
                        {
                            "id": "04",
                            "name": "Tequila Jimador",
                            "precio": "$700.00"
                        }

                    ]
                }
            ]
        };
    };
    renders.carrito.main = React.createClass({

        getInitialState: function() {
            return getState();
        },
        componentDidMount: function() {
            // this.props.store.addListener(this._onChange);
        },
        _onChange: function() {
            // if (this.isMounted()) {
            //     this.setState(getState(this.props.store));
            // }
        },

        //EVENTS FUNCTIONS
        ONchangeToggleEvents: function() {
            this.setState({ listEvents: true })
        },
        OFFchangeToggleEvents: function() {
            this.setState({ listEvents: false })
        },
        selectEvent(event) {
            var _this = this;
            $.map(this.state.products, function(val, key) {
                if (event.indexOf(val.match.toLowerCase()) >= 0) {
                    _this.setState({ showProducts: true, selectedProducts: val.products, selectedEvent: event });
                    return;
                }
            })
        },

        //FUNCTIONS ACEPTACION Y TIENDAS
        setAccepOrder: function() {
            this.setState({ showProducts: false, listEvents: false, accept: true });
        },
        setCP: function(cp) {
            this.setState({ cp: cp });
        },
        setStoresByCP: function(stores) {
            this.setState({ storeForCP: stores })
        },

        render: function() {
            return div({
                    id: 'samAgent',
                    className: 'samAgent'
                },
                React.createElement(renders.components.vicky, {
                    state: this.state,
                    OnEvents: this.ONchangeToggleEvents,
                    selectEvent: this.selectEvent,
                    acceptOrder: this.setAccepOrder,
                    setCP: this.setCP
                }),
                React.createElement(renders.components.listEvents, {
                    state: this.state
                }),
                React.createElement(renders.components.listProducts, {
                    state: this.state
                }),
                React.createElement(renders.components.listStores, {
                    state: this.state,
                    setStoresByCP: this.setStoresByCP
                })
            );
        }
    });
})();
'use strict';
/**
 * @Render Hero
 * @name Hero
 * @description
 * # Hero
 */
(function() {
    renders.components = renders.components || {};



    renders.components.listEvents = React.createClass({
        displayName: 'listEvents',
        listEvents: [
            { "idEvent": "1", "event": "Carne Asada" },
            { "idEvent": "2", "event": "Boda" },
            //{ "idEvent": "4", "event": "SuperBowl" },
            { "idEvent": "5", "event": "Parrillada" }
        ],
        buildEvents: function() {
            var _this = this;
            var options = $.map(this.listEvents, function(val, key) {
                console.log(_this.props.state.selectedEvent.trim(), val.event.trim(), _this.props.state.selectedEvent.trim() === val.event.trim())
                return div({ className: _this.props.state.selectedEvent.trim() === val.event.toLowerCase().trim() ? 'option active' : 'option' }, val.event)
            })

            return div({ className: 'listEvents' },
                h1({ className: 'title' }, 'Selecciona un evento!'), options
            )
        },
        render: function() {
            return this.props.state.listEvents ? this.buildEvents() : null
        }
    });
})();
'use strict';
/**
 * @Render Hero
 * @name Hero
 * @description
 * # Hero
 */
(function() {
    renders.components = renders.components || {};

    renders.components.listProducts = React.createClass({
        displayName: 'listProducts',
        buildProducts: function() {

            var options = $.map(this.props.state.selectedProducts, function(val, key) {
                return div({ className: 'option' },
                    span({ className: 'image' }, null),
                    span({ className: 'name' }, val.name),
                    span({ className: 'precio' }, val.precio),
                    div({ className: 'btnDelete' },
                        span({ className: 'icon close' }, null)
                    )
                )
            })

            return div({ className: 'listProducts' },
                h1({ className: 'title' }, 'Lista de productos'), options, h1({ className: 'accept' }, 'Di "Acepto" para generar tu pedido')
            )
        },
        render: function() {
            return this.props.state.showProducts ? this.buildProducts() : null
        }
    });
})();
'use strict';
/**
 * @Render Hero
 * @name Hero
 * @description
 * # Hero
 */
(function() {
    renders.components = renders.components || {};



    renders.components.listStores = React.createClass({
        displayName: 'listEvents',
        stores: [{
                id: 2346,
                address: 'AV. INDEPENDENCIA NO. 2301 COL. TROJES DE ALONSO',
                name: 'AGUASCALIENTES',
                cp: '20120',
                lat: '21.924244',
                lon: '-102.297275',
                state: 'AGUASCALIENTES'
            },
            {
                id: 3015,
                address: 'CARRET  TRANSP  EDA-LA PAZ  #3976, CARLOS PACHECO',
                name: 'ENSENADA',
                cp: '22780',
                lat: '31.816108',
                lon: '-116.600355',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4139,
                address: 'AV. MARIA LAVALLE URBINA No. 35 COL. AHKIN PEACH',
                name: 'CAMPECHE',
                cp: '24014',
                lat: '19.852397',
                lon: '-90.528949',
                state: 'CAMPECHE'
            },
            {
                id: 1054,
                address: 'AV. TECNOLOGICO 125 COL MIGUEL HIDALGO',
                name: 'COLIMA NORTE',
                cp: '28037',
                lat: '19.257889',
                lon: '-103.719836',
                state: 'COLIMA'
            },
            {
                id: 3879,
                address: 'PEDRO A GALVAN NORTE NO. 120 COL. CENTRO',
                name: 'COLIMA NIÑOS HEROES',
                cp: '28000',
                lat: '19.238387',
                lon: '-103.715703',
                state: 'COLIMA'
            },
            {
                id: 2033,
                address: 'AV. CANAL DE TEZONTLE NO. 1520 COL. DR. ALFONSO ORTIZ TIRADO',
                name: 'PLAZA ORIENTE',
                cp: '9020',
                lat: '19.384414',
                lon: '-99.079818',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2344,
                address: 'BOULEVARD MANUEL AVILA CAMACHO NO. 491 COL. PERIODISTAS',
                name: 'LOMAS',
                cp: '11220',
                lat: '19.450322',
                lon: '-99.217382',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2345,
                address: 'CALZ. DE GUADALUPE NO. 431 COL. GUADALUPE TEPEYAC',
                name: 'TEPEYAC',
                cp: '7840',
                lat: '19.47176',
                lon: '-99.120678',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2347,
                address: 'CALZ. TLÁHUAC NO. 5662  COL. SAN LORENZO TEZONCO',
                name: 'TLAHUAC',
                cp: '13266',
                lat: '19.306226',
                lon: '-99.061031',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2430,
                address: 'AV. COPILCO NO. 164 COL. OXTOPULCO DEL. COYOACAN',
                name: 'COPILCO',
                cp: '4318',
                lat: '19.337935',
                lon: '-99.183565',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2464,
                address: 'AV. ESCUELA NAVAL MILITAR # 753 ESQ. AV. CANAL DE MIRAMONTES DELEG. COYOACÁN',
                name: 'MIRAMONTES',
                cp: '4890',
                lat: '19.31725',
                lon: '-99.125569',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3863,
                address: 'AV. CENTRO COMERCIAL NO. 190 COL. INSURGENTES CUICUILCO',
                name: 'PERIFERICO SUR',
                cp: '4530',
                lat: '19.306299',
                lon: '-99.187436',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3872,
                address: 'FRAY SERVANDO TERESA DE MIER NO. 881 COL.  JARDIN BALBUENA',
                name: 'BALBUENA',
                cp: '15900',
                lat: '19.417102',
                lon: '-99.105894',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3876,
                address: 'LAS AGUILAS NO. 820 COL. LAS AGUILAS',
                name: 'LAS AGUILAS',
                cp: '1710',
                lat: '19.353376',
                lon: '-99.215205',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3877,
                address: 'MIGUEL OTHON DE MENDIZABAL OTE. 343, COL. NUEVA INDUSTRIAL VALLEJO',
                name: 'TORRES LINDAVISTA',
                cp: '7700',
                lat: 'NULL',
                lon: 'NULL',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 4547,
                address: 'CALZADA SAN JUAN DE ARAGÓN NO. 516 COLONIA D.M. NACIONAL DELEGARCIÓN GUSTAVO A. MADERO',
                name: 'EDUARDO MOLINA',
                cp: '7090',
                lat: '19.48',
                lon: '-99.0948',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3848,
                address: 'MIGUEL A. DE QUEVEDO NO. 175 COL. CHIMALISTAC DELEGACION COYOACAN',
                name: 'TAXQUEÑA',
                cp: '1070',
                lat: '19.344602',
                lon: '-99.18241',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3851,
                address: 'CALZADA IGNACIO ZARAGOZA NO. 58   COL. FEDERAL',
                name: 'AEROPUERTO',
                cp: '15700',
                lat: '19.419874',
                lon: '-99.094757',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3852,
                address: 'BLVD. ADOLFO LOPEZ MATEOS NO. 1701 COL. LOMAS DE PLATEROS, DELEG. ALVARO OBREGON',
                name: 'PLATEROS',
                cp: '1460',
                lat: '19.369857',
                lon: '-99.194079',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3857,
                address: 'AV. CANAL DE MIRAMONTES NO. 3520 COL. SAN BARTOLO COAPA',
                name: 'VILLA COAPA',
                cp: '14390',
                lat: '19.292941',
                lon: '-99.123754',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3858,
                address: 'JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA',
                name: 'CUAJIMALPA',
                cp: '5210',
                lat: '19.363776',
                lon: '-99.287916',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3862,
                address: 'AV. NEXTENGO NO. 78 COL. SANTA CRUZ ACAYUCAN',
                name: 'AZCAPOTZALCO',
                cp: '2770',
                lat: '19.472744',
                lon: '-99.19247',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2466,
                address: 'AV. CUITLÁHUAC NO. 3651 COL. HOGAR Y SEGURIDAD DELEG. AZCAPOTZALCO',
                name: 'CUITLAHUAC',
                cp: '2820',
                lat: '19.470953',
                lon: '-99.164241',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2670,
                address: 'CALZADA TLALPAN NO. 1037  COL. NATIVITAS',
                name: 'TLALPAN',
                cp: '3500',
                lat: '19.380743',
                lon: '-99.14118',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2689,
                address: 'AV. SAN FRANCISCO NO. 1621 COL. DEL VALLE DEL. BENITO JUÁREZ',
                name: 'FELIX CUEVAS',
                cp: '3100',
                lat: '19.372604',
                lon: '-99.175437',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3794,
                address: 'AV. LUIS ESPINOZA NO.  160 COL. SANTIAGO ATEPETLAC, DELEGACION GUSTAVO A. MADERO',
                name: 'ACUEDUCTO DE GUADALUPE',
                cp: '7200',
                lat: '19.53071',
                lon: '-99.155527',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3845,
                address: 'AV. UNIVERSIDAD NO. 936-A COL. SANTA CRUZ ATOYAC',
                name: 'UNIVERSIDAD',
                cp: '3310',
                lat: '19.36871',
                lon: '-99.164135',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 3846,
                address: 'INSURGENTES NORTE NO. 131, COL GUERRERO',
                name: 'BUENAVISTA',
                cp: '6300',
                lat: '19.443265',
                lon: '-99.153021',
                state: 'DISTRITO FEDERAL'
            },
            {
                id: 2432,
                address: 'AV. FELIPE PESCADOR NO. 1101 ESQ. PROL. CALLE LIBERTAD',
                name: 'DURANGO',
                cp: '34000',
                lat: '24.036645',
                lon: '-104.653343',
                state: 'DURANGO'
            },
            {
                id: 3014,
                address: 'BLVD. DURANGO No. 100 ESQ. AV. CUITLAHUAC FRACC. EL EDEN',
                name: 'DURANGO II " EL EDEN" ',
                cp: '34160',
                lat: '24.003415',
                lon: '-104.652401',
                state: 'DURANGO'
            },
            {
                id: 3071,
                address: 'BLVD. FRANCISCO VILLA # 4510, COLONIA: VALLE FLORIDO II',
                name: 'FRANCISCO VILLA',
                cp: '34234',
                lat: '24.067187',
                lon: '-104.600541',
                state: 'DURANGO'
            },
            {
                id: 1067,
                address: 'BLVAD. DE LAS NACIONES 802 COL. GRANJAS DEL MARQUEZ, ESQ ANGEL MARTIENZ A UN LADO DEL COLEGIO SIMON BOLIVAR',
                name: 'ACAPULCO DIAMANTE',
                cp: '39890',
                lat: '16.795535',
                lon: '-99.809381',
                state: 'GUERRERO'
            },
            {
                id: 2349,
                address: 'AV. COSTERA MIGUEL ALEMÁN NO. 500 COL. ICACOS',
                name: 'ACAPULCO',
                cp: '39860',
                lat: '16.845561',
                lon: '-99.847265',
                state: 'GUERRERO'
            },
            {
                id: 1584,
                address: 'AV. DR. JORGE JIMENEZ CANTU SN, COL. LA ESTADIA, ENTRE LAS CALLES ESTADIA Y RESIDENCIA CHILUCA',
                name: 'ESPACIO ESMERALDA',
                cp: '52936',
                lat: '19.5523',
                lon: '-99.28997',
                state: 'MEXICO'
            },
            {
                id: 2356,
                address: 'BOULEVARD BERNARDO QUINTANA NO. 4113 COL. SAN PABLO TECNOLÓGICO',
                name: 'QUERETARO',
                cp: '76160',
                lat: '20.615072',
                lon: '-100.397568',
                state: 'QUERETARO'
            },
            {
                id: 5749,
                address: 'AUTOPISTA QUERETARO-CELAYA NO.5501 ,PROLONGACION LAS AMERICAS COL EL JACAL',
                name: 'PLAZA DE TOROS, QRO. ',
                cp: '76187',
                lat: '20.574606',
                lon: '-100.405255',
                state: 'QUERETARO'
            },
            {
                id: 1084,
                address: 'MANZANA 18, LOTE 1-03 COL. SUPERMANZANA 51, ENTRE AV. TECNOLOGICO Y CHILAN-BALAM',
                name: 'NICHUPTE',
                cp: '77533',
                lat: '21.140579',
                lon: '-86.850101',
                state: 'QUINTANA ROO'
            },
            {
                id: 2384,
                address: 'AV. COBA MZA. 2 LOTE 2 SUPERMANZANA 21 DELEG. BENITO JUÁREZ',
                name: 'CANCUN I ',
                cp: '77500',
                lat: '21.153931',
                lon: '-86.834129',
                state: 'QUINTANA ROO'
            },
            {
                id: 3632,
                address: 'CALLE MAYAPAN NO. 511 ZONA (AV. ANDRÉS Q. ROO ESQ. OAXACTUN) INDUSTRIAL M. 4 L8 SM97',
                name: 'CANCUN II',
                cp: '77530',
                lat: '21.1473',
                lon: '-86.8621',
                state: 'QUINTANA ROO'
            },
            {
                id: 4549,
                address: 'BLVD. JIQUILPAN S/N COL. JARDINES DE FATIMA, MUNICIPIO AHOME',
                name: 'LOS MOCHIS',
                cp: '81226',
                lat: '25.8054',
                lon: '-108.991',
                state: 'SINALOA'
            },
            {
                id: 1016,
                address: 'CALLE 30 NO. 185, ENTRE CALLE 23 Y PERIFÉRICO, COL. SAN RAMÓN NORTE',
                name: 'MERIDA NORTE',
                cp: '97117',
                lat: '21.038576',
                lon: '-89.602532',
                state: 'YUCATAN'
            },
            {
                id: 2383,
                address: 'CALLE 56-A AV. PASEO DE MONTEJO  NO. 379 POR PEREZ PONCE COL. CENTRO',
                name: 'MERIDA',
                cp: '97000',
                lat: '20.98716',
                lon: '-89.616595',
                state: 'YUCATAN'
            },
            {
                id: 4048,
                address: 'CALLE 21 No. 371-A ENTRE CALLE 60 Y CALLE 62, COL. MIGUEL HIDALGO',
                name: 'MÉRIDA PENSIONES',
                cp: '97220',
                lat: '20.994517',
                lon: '-89.654245',
                state: 'YUCATAN'
            },
            {
                id: 4073,
                address: 'CALLE 33 NO. 200 INT. C ENTRE CALLE 44 Y CHICHI SUÁREZ, COL. FRACC. ITZIMNÁ 108',
                name: 'POLIGONO',
                cp: '97143',
                lat: '20.997999',
                lon: '-89.573711',
                state: 'YUCATAN'
            },
            {
                id: 1140,
                address: 'CALZADA CETYS NO. 1799, COL. RIVERA, ENTRE CALZADA CETYS Y CALZADA GOMEZ MORIN',
                name: 'PLAZA SAN PEDRO',
                cp: '21210',
                lat: '32.6564',
                lon: '-115.41277',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4026,
                address: 'BLVD. LAZARO CÁRDENAS #2200. COL. EL PORVENIR, ENTRE CALLE ESQ. HEROICO COLEGIO MILITAR.',
                name: 'GALERÍAS DEL VALLE',
                cp: '21220',
                lat: '32.62217',
                lon: '-115.506727',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4156,
                address: 'AV. AGUSTIN OLACHEA S/N ENTRE LAS CALLES CARRETERA TRANSPENINSULAR Y LIBRAMIENTO SUR, COLONIA EL ZACATAL',
                name: 'COLA DE BALLENA',
                cp: '2308',
                lat: '24.119469',
                lon: '-110.342518',
                state: 'BAJA CALIFORNIA SUR'
            },
            {
                id: 1685,
                address: 'ISLA DE TRIS S/N ENTRE LAS CALLES 16 DE SEPTIEMBRE Y CRISTOBAL COLON',
                name: 'AEROPUERTO CAMPECHE (SEDE)',
                cp: '24611',
                lat: 'NULL',
                lon: 'NULL',
                state: 'CAMPECHE'
            },
            {
                id: 4062,
                address: 'BLVD. MIGUEL DE LA MADRID NO. 17, ENTRE  BLVD. DE LA MADRID Y CALLE SANTO DOMINGO, COL. SALAHUA',
                name: 'MANZANILLO',
                cp: '28867',
                lat: '19.102499',
                lon: '-104.331596',
                state: 'COLIMA'
            },
            {
                id: 2302,
                address: 'PERIFÉRICO DE LA JUVENTUD NO. 2200 FRACC. HACIENDAS DEL VALLE',
                name: 'CHIHUAHUA',
                cp: '31238',
                lat: '28.634181',
                lon: '-106.119307',
                state: 'CHIHUAHUA'
            },
            {
                id: 3033,
                address: 'BLVD. JOSE FUENTES MARES #8820 COL. SECTOR RELOJ',
                name: 'FUENTES MARES',
                cp: '31064',
                lat: '28.619448',
                lon: '-106.027183',
                state: 'CHIHUAHUA'
            },
            {
                id: 5728,
                address: 'AV. VIALIDAD LOS NOGALES No. 2703 FRACC. COMERCIAL LOS NOGALES',
                name: 'NORTE 2000',
                cp: '31109',
                lat: '28.7282',
                lon: '-106.13',
                state: 'CHIHUAHUA'
            },
            {
                id: 1684,
                address: 'FERNANDO RIOS NERI NO.3, COL. CIUDAD DE LOS SERVICIOS C.P. 39075, CHILPANCINGO DE LOS BRAVOS, GUERRERO',
                name: 'CHILPANCINGO',
                cp: '39075',
                lat: 'NULL',
                lon: 'NULL',
                state: 'GUERRERO'
            },
            {
                id: 1045,
                address: 'AV. DOMINGO DIEZ NO. 727, COL. EMPLEADO',
                name: 'DOMINGO DIEZ',
                cp: '62250',
                lat: '18.956623',
                lon: '-99.237557',
                state: 'MORELOS'
            },
            {
                id: 2219,
                address: 'CARRETERA JOROBAS-TULA 03 38 MANZANA 125 NTE 1 CAMINO A SANTA TERESA',
                name: 'JOROBAS',
                cp: '54695',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MORELOS'
            },
            {
                id: 2735,
                address: 'AV. KAN TENAH  MZ 58 MZ 1  LOTE 6 ENTRE LAS CALLES ISLA CONTOY Y COBA',
                name: 'LA CRUZ (PLAYA DEL CARMEN)',
                cp: '77723',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MORELOS'
            },
            {
                id: 2839,
                address: 'CIRCUITO RAFAEL GUIZAR Y VALENCIA NO. 900 ESQ. CALLE ACCESO UNIVERSIDAD ANAHUAC',
                name: 'XALAPA SUR',
                cp: '91096',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MORELOS'
            },
            {
                id: 5727,
                address: 'CARRETERA FEDERAL CUERNAVACA-CUAUTLA KM 4.8 COL. CIVAC',
                name: 'JIUTEPEC',
                cp: '62571',
                lat: '18.9014',
                lon: '-99.175',
                state: 'MORELOS'
            },
            {
                id: 3895,
                address: 'AV. INSURGENTES NO. 1254 C.P. 63157, TEPIC, NAYARIT, COL. CIUDAD DEL VALLE',
                name: 'TEPIC',
                cp: '63157',
                lat: '21.491472',
                lon: '-104.881867',
                state: 'NAYARIT'
            },
            {
                id: 1622,
                address: 'AV. MANUEL GOMEZ MORIN # 940 ENTRE LAS CALLES PRIVADAS MA DE LOS ANGELES Y PASEO DE LA SIERRA',
                name: 'GOMEZ MORIN ',
                cp: '66250',
                lat: 'NULL',
                lon: 'NULL',
                state: 'NUEVO LEON'
            },
            {
                id: 2044,
                address: 'AV. LAZARO CARDENAS NO.900 COL.VALLE ORIENTE',
                name: 'VALLE ORIENTE',
                cp: '66269',
                lat: '25.646858',
                lon: '-100.328745',
                state: 'NUEVO LEON'
            },
            {
                id: 1585,
                address: 'AV. TACHICHILTE NORTE NO. 1233 COL. ISLA DE MUSALA, ENTRE LAS CALLES AV. CANCUN Y AV. REVILLAGIGEDO',
                name: 'LA ISLA',
                cp: '80065',
                lat: '24.825111',
                lon: '-107.370675',
                state: 'SINALOA'
            },
            {
                id: 2379,
                address: 'AV.  REGIONAL #1330 V ETAPA PLAN PARCIAL PROYECTO 3 RÍOS',
                name: 'CULIACAN',
                cp: '80000',
                lat: '24.814118',
                lon: '-107.410299',
                state: 'SINALOA'
            },
            {
                id: 5700,
                address: 'AV. GRAL ALVARO OBREGON No. 2891 SUR FRACC. MONTEBELLO',
                name: 'MEXICO 68',
                cp: '80227',
                lat: '24.7785',
                lon: '-107.395',
                state: 'SINALOA'
            },
            {
                id: 1031,
                address: 'PROL. ANILLO PERIFERICO CARLOS PELLICER CAMARA NO. 701 COLONIA CARRIZAL, CALLE:CARRIZAL A 100 MTS DE SAM´S CLUB',
                name: 'TABASCO 2000',
                cp: '86038',
                lat: '17.98956196',
                lon: '-92.96680699',
                state: 'TABASCO'
            },
            {
                id: 2468,
                address: 'PROL. QUINTIN ARAUZ CARRILLO CASI ESQ. H. COLEGIO MILITAR COL. 1O. DE MAYO',
                name: 'CD. DEPORTIVA',
                cp: '86190',
                lat: '17.97758706',
                lon: '-92.94023964',
                state: 'TABASCO'
            },
            {
                id: 3894,
                address: 'BLVD. ADOLFO RUIZ CORTINEZ 496 COL. CASA BLANCA, ENTRE UNIVERSIDAD Y JAVIER MINA',
                name: 'VILLAHERMOSA 1',
                cp: '86060',
                lat: '18.00089105',
                lon: '-92.92583419',
                state: 'TABASCO'
            },
            {
                id: 3069,
                address: 'CARRETERA TRANSPENINSULAR CALLE SAN LUCAS- LA PAZ . KM. 2, COL. RESIDENCIAL COUNTRY CLUB C.P. 23463. CABO SAN LUCAS, B.C. SUR.',
                name: 'LOS CABOS',
                cp: '23463',
                lat: 'NULL',
                lon: 'NULL',
                state: 'BAJA CALIFORNIA SUR'
            },
            {
                id: 4072,
                address: 'CARRETERA TAPACHULA-PUERTO MADERO KM 2.5 COL. LAS HORTENCIAS',
                name: 'TAPACHULA',
                cp: '30797',
                lat: '14.878094',
                lon: '-92.283545',
                state: 'CHIAPAS'
            },
            {
                id: 1623,
                address: 'BLVD. ING. JORGE DE JESUS CASTILLO CABRERA NO. 1020 ESQ. 16 DE SEPTIEMBRE, COL. LAS HUERTAS',
                name: 'CD. CUAUHTEMOC',
                cp: '31555',
                lat: '28.424758',
                lon: '-106.85106',
                state: 'CHIHUAHUA'
            },
            {
                id: 2091,
                address: 'CALLE EJE NORPONIENTE # 801, COL. LA PURISIMA',
                name: 'EL SAUZ',
                cp: '38130',
                lat: '20.546001',
                lon: '-100.840995',
                state: 'GUANAJUATO'
            },
            {
                id: 3031,
                address: 'PROLONGACIÓN AV. IRRIGACIÓN # 200 ENTRE VÍAS DEL FERROCARRIL Y VÍAS DE LA UNIÓN COL. VILLAS DE BENAVENTE',
                name: 'IRRIGACION',
                cp: '38034',
                lat: '20.536428',
                lon: '-100.797573',
                state: 'GUANAJUATO'
            },
            {
                id: 3061,
                address: 'BLVD. LUIS DONALDO COLOSIO MZ 1 FRACC. 1 NO. 2009, COL. EXHACIENDA COSCOTITLAN, C.P. 42064, PACHUCA DE SOTO HIDALGO.',
                name: 'COMBO PACHUCA',
                cp: '42064',
                lat: '20.094335',
                lon: '-98.757949',
                state: 'HIDALGO'
            },
            {
                id: 3856,
                address: 'AV. MEXICO 3300-F FRACCIONAMIENTO MONRAZ',
                name: 'PLAZA MEXICO',
                cp: '44690',
                lat: '20.67949',
                lon: '-103.403163',
                state: 'JALISCO'
            },
            {
                id: 3861,
                address: 'RAMON LOPEZ VELARDE NO. 821, SECTOR REFORMA',
                name: 'REVOLUCION',
                cp: '44400',
                lat: '20.649345',
                lon: '-103.309672',
                state: 'JALISCO'
            },
            {
                id: 4540,
                address: 'AV. CALZADA INDEPENDENCIA SUR NO. 916 COL. BARRAGÁN Y HERNÁNDEZ',
                name: '16 DE SEPTIEMBRE',
                cp: '44240',
                lat: '20.6647',
                lon: '-103.348',
                state: 'JALISCO'
            },
            {
                id: 3900,
                address: 'VIA JOSE LOPEZ PORTILLO No 100. COL. ZACACUITLA',
                name: 'COACALCO',
                cp: '55710',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 4018,
                address: 'VÍA JOSÉ LÓPEZ PORTILLO No. 2 COL. SAN FRANCISCO COACALCO',
                name: 'SANTA MARÍA COACALCO',
                cp: '55712',
                lat: '19.629739',
                lon: '-99.124619',
                state: 'MEXICO'
            },
            {
                id: 1027,
                address: 'AV. RAUL SALINAS LOZANO  # 1001 SUR COL. HACIENDAS DE ANAHUAC, ENTRE SENDEO DIVISORIO Y RAUL SALINAS (OFICIAL)',
                name: 'SENDERO',
                cp: '66055',
                lat: '25.765486',
                lon: '-100.31687',
                state: 'NUEVO LEON'
            },
            {
                id: 2090,
                address: 'BLVD. ATLIXCAYOTL No.1504 COL. GEO VILLAS ATLIXCAYOTL',
                name: 'ANGELÓPOLIS',
                cp: '72197',
                lat: '19.024579',
                lon: '-98.241651',
                state: 'PUEBLA'
            },
            {
                id: 2732,
                address: '9 SUR NO. 11301 ESQ. 113 PONIENTE LATERAL DE PERIFERICO ECOLOGICO',
                name: 'HOSPITAL GENERAL',
                cp: '72490',
                lat: 'NULL',
                lon: 'NULL',
                state: 'PUEBLA'
            },
            {
                id: 3853,
                address: 'DIAGONAL IGNACIO  ZARAGOZA NO. 1404 COL. SAN MANUEL',
                name: 'SAN MANUEL',
                cp: '72570',
                lat: '19.021534',
                lon: '-98.198614',
                state: 'PUEBLA'
            },
            {
                id: 3864,
                address: 'AV. PROLONGACION REFORMA SUR NO. 3117  COL. LA PAZ',
                name: ' REFORMA',
                cp: '72160',
                lat: '19.058286',
                lon: '-98.224409',
                state: 'PUEBLA'
            },
            {
                id: 3886,
                address: 'BLVD. ATLIXCO NO. 3304  COL. NUEVA ANTEQUERA',
                name: 'LAS ANIMAS',
                cp: '72180',
                lat: '19.044231',
                lon: '-98.237395',
                state: 'PUEBLA'
            },
            {
                id: 2080,
                address: 'AV. DE LAS AMERICAS NO. 302, FRACCIONAMIENTO ARBOLEDAS',
                name: 'MATEHUALA (ARBOLEDAS)',
                cp: '78760',
                lat: '23.656775',
                lon: '-100.635622',
                state: 'SAN LUIS POTOSI'
            },
            {
                id: 4025,
                address: 'BLVD. ADOLFO LOPEZ MATEOS No. 301 ENTRE LAS CALLES HAITI Y EJERCIRO MEXICANO, COL. RICARDO FLORES MAGON',
                name: 'CIUDAD MADERO',
                cp: '89460',
                lat: '22.253012',
                lon: '-97.853006',
                state: 'TAMAULIPAS'
            },
            {
                id: 2463,
                address: 'AV. VIVEROS NO. 280 FRACC. JARDINES DE VIRGINIA BOCA DEL RÍO VERACRUZ',
                name: 'VERACRUZ',
                cp: '94298',
                lat: '19.155669',
                lon: '-96.111625',
                state: 'VERACRUZ'
            },
            {
                id: 4546,
                address: 'AV. FCO. GARCIA SALINAS NO. 203    FRACC. CLUB CAMPESTRE',
                name: 'ZACATECAS',
                cp: '98064',
                lat: '22.7622',
                lon: '-102.551',
                state: 'ZACATECAS'
            },
            {
                id: 2023,
                address: 'BLVD. INSURGENTES No. 18015 COL. RIO TIJUANA TERCERA ETAPA DELEGACIÓN LA MESA  LOTE  1  MANZANA 15',
                name: 'MACRO PLAZA INSURGENTES',
                cp: '22226',
                lat: '32.493202',
                lon: '-116.931174',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 2304,
                address: 'BOULEVARD LÁZARO CÁRDENAS NO. 1801 COL. EX-EJIDO ZACATECAS',
                name: 'MEXICALI',
                cp: '22360',
                lat: '32.621947',
                lon: '-115.456294',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4011,
                address: 'AGUA CALIENTE # 11999 ESQ. PASEO DE LAS AMERICAS, COL. HIPODROMO AGUACALIENTE',
                name: 'TIJUANA HIPODROMO',
                cp: '22024',
                lat: 'NULL',
                lon: 'NULL',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4155,
                address: 'CORREDOR TIJUANA-ROSARITO 2000 NO. 819, ESQ. BLVD CASA BLANCA, COL. EJIDO FCO. VILLA',
                name: 'TIJUANA 2000',
                cp: '22235',
                lat: '32.496995',
                lon: '-116.833073',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 4187,
                address: 'CARRETERA LIBRE TIJUANA-ENSENADA No. 300, COL. REFORMA, C.P. 22710. PLAYAS DE ROSARITO, BAJA CALIFORNIA NORTE',
                name: 'PLAYAS DE ROSARITO',
                cp: '22710',
                lat: 'NULL',
                lon: 'NULL',
                state: 'BAJA CALIFORNIA'
            },
            {
                id: 2765,
                address: 'VALERIO GONZALEZ CANSECO #137 CLUB DE GOLF FONATUR ENTRE BLVD. MAURICIO CASTRO  ',
                name: 'SAN JOSE DEL CABO',
                cp: '23400',
                lat: 'NULL',
                lon: 'NULL',
                state: 'BAJA CALIFORNIA SUR'
            },
            {
                id: 1007,
                address: 'AV. MADERO NO. 227 COL. CENTRO',
                name: 'MONCLOVA',
                cp: '25700',
                lat: '26.907603',
                lon: '-101.42402',
                state: 'COAHUILA'
            },
            {
                id: 1624,
                address: 'BLVD. DE LAS FEDERACIONES KM 1260.5 NO. 4021, COL. CHICHIMA ACAPETAHUA C.P. 30093, COMITAN DE DOMINGUEZ CHIS',
                name: 'COMITAN DE DOMINGUEZ',
                cp: '30093',
                lat: 'NULL',
                lon: 'NULL',
                state: 'CHIAPAS'
            },
            {
                id: 1130,
                address: 'BLVAD BELISARIO DOMIGUEZ  2058 FRACC LAS ARBOLEDAS, ENTRE 19APTE Y 20 PTE',
                name: 'BELISARIO DOMINGUEZ',
                cp: '29030',
                lat: '16.754279',
                lon: '-93.13801',
                state: 'CHIAPAS'
            },
            {
                id: 3127,
                address: 'BLVD. SALOMON GONZALEZ BLANCO # 4350 ENTRE CALLE 1 Y CALLE 3',
                name: 'LIBRAMIENTO NORTE',
                cp: '29045',
                lat: 'NULL',
                lon: 'NULL',
                state: 'CHIAPAS'
            },
            {
                id: 1138,
                address: 'AV. TECNOLOGICO NO. 2 COL. NUEVO TERRAZAS, ENTRE AV. TECNOLOGICO Y PATIO DEL FERROCARRIL',
                name: 'DELICIAS',
                cp: '33020',
                lat: '28.199543',
                lon: '-105.464592',
                state: 'CHIHUAHUA'
            },
            {
                id: 1044,
                address: 'AV. CHALMA NO. 281 COL. JARDINES DE LA HACIENDA',
                name: 'SAN MARCOS IZCALLI',
                cp: '54720',
                lat: '19.670907',
                lon: '-99.2021',
                state: 'MEXICO'
            },
            {
                id: 4154,
                address: 'AUTOPISTA MEXICO-QUERETARO KM 30.2 ENTRE LAS CALLES AV, CENTRAL Y CARRETERA CUAUTITLAN TLANEPANTLA',
                name: 'PERINORTE (ANTES SILOS)',
                cp: '54763',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 4157,
                address: 'AUT. MÉXICO-QUERÉTARO KM.  36.5 LTE. 1 COL. PARQUE INDUSTRIAL CUAMATLA',
                name: 'PERIFERICO CUAUTITLAN',
                cp: '54730',
                lat: '19.645359',
                lon: '-99.194593',
                state: 'MEXICO'
            },
            {
                id: 1833,
                address: 'AV. ELOY CAVAZOS NO. 2051, ENTRE PABLO LIVAS Y LAS QUINTAS, COL. LA QUINTA',
                name: 'CERRO DE LA SILLA',
                cp: '67170',
                lat: '25.665384',
                lon: '-100.240967',
                state: 'NUEVO LEON'
            },
            {
                id: 2076,
                address: 'AV. BONIFACIO SALINAS NO. 5000 COL. TORRES LINDAVISTA',
                name: 'MIGUEL ALEMAN',
                cp: '67130',
                lat: '25.691993',
                lon: '-100.23922',
                state: 'NUEVO LEON'
            },
            {
                id: 3800,
                address: 'CARRETERA MONTERREY-REYNOSA KM 7.6 COL. SAN SEBASTIAN',
                name: 'GUADALUPE',
                cp: '67198',
                lat: 'NULL',
                lon: 'NULL',
                state: 'NUEVO LEON'
            },
            {
                id: 4548,
                address: 'AV. ELOY CAVAZOS NO. 5200 COL. RESIDENCIAL SAN EDUARDO',
                name: 'ELOY CAVAZOS',
                cp: '67183',
                lat: '25.6528',
                lon: '-100.21',
                state: 'NUEVO LEON'
            },
            {
                id: 2840,
                address: 'INSURGENTES # 41 ENTRE LAS CALLES UNIVERSIDAD Y BENJAMIN HILL',
                name: 'INSURGENTES CHETUMAL',
                cp: '77018',
                lat: 'NULL',
                lon: 'NULL',
                state: 'QUINTANA ROO'
            },
            {
                id: 1727,
                address: 'PASEO A MIGUEL LEYSÓN PÉREZ S/N COL. EJIDAL, ENTRE LAS CALLES PLUTARCO ELIAS CALLES Y LÁZARO CÁRDENAS',
                name: 'GUASAVE',
                cp: '81020',
                lat: '25.580842',
                lon: '-108.474912',
                state: 'SINALOA'
            },
            {
                id: 2380,
                address: 'CARRETERA INTERNACIONAL NO. 1073 FRACC. REAL DEL SOL MUNICIPIO MUNICIPIO DE CAJEME',
                name: 'CD. OBREGON',
                cp: '85050',
                lat: '27.514796',
                lon: '-109.928431',
                state: 'SONORA'
            },
            {
                id: 1170,
                address: 'AV. TECNOLOGICO #31 ESQ. ACACIAS',
                name: 'PARRAL',
                cp: '33855',
                lat: 'NULL',
                lon: 'NULL',
                state: 'CHIHUAHUA'
            },
            {
                id: 3005,
                address: 'AV. CENTRAL No 120, LOCAL 62 AL 68 Y 118, COL CD. AZTECA 3RA. SECCION',
                name: 'PLAZA ARAGON',
                cp: '55280',
                lat: '19.531808',
                lon: '-99.027838',
                state: 'MEXICO'
            },
            {
                id: 5765,
                address: 'AV. CENTRAL ESQ. AV. 1° DE MAYO, MZ 04 LT. 01 COL. LAS AMERICAS',
                name: 'LAS AMERICAS',
                cp: '55459',
                lat: '19.589555',
                lon: '-99.020203',
                state: 'MEXICO'
            },
            {
                id: 2074,
                address: 'CARRETERA 57 S/N , ESQ. CALLE ROMA, FRACCIONAMIENTO PROVIDENCIA',
                name: 'CARRETERA 57',
                cp: '78390',
                lat: '22.137874',
                lon: '-100.934738',
                state: 'SAN LUIS POTOSI'
            },
            {
                id: 2075,
                address: 'CALLE MUÑOZ NO. 400, BARRIO LOMAS DE SANTIAGO',
                name: 'MUÑOZ',
                cp: '78165',
                lat: '22.165603',
                lon: '-100.999937',
                state: 'SAN LUIS POTOSI'
            },
            {
                id: 2431,
                address: 'AV. DR. SALVADOR NAVA NO. 3135 COL. COLINAS DEL PARQUE SAN LUIS POTOSÍ',
                name: 'SAN LUS POTOSI',
                cp: '78110',
                lat: '22.138098',
                lon: '-101.001973',
                state: 'SAN LUIS POTOSI'
            },
            {
                id: 3718,
                address: 'CARRETERA INTERNACIONAL NO. 2017, COLONIA HACIENDA DEL MAR',
                name: 'EJERCITO MEXICANO',
                cp: '82128',
                lat: '23.2443',
                lon: '-106.423',
                state: 'SINALOA'
            },
            {
                id: 3719,
                address: 'BLVD. MANUEL CAVAZOS LERMA NO. 85 COL. PASEO RESIDENCIAL',
                name: 'MATAMOROS',
                cp: '87380',
                lat: '25.8599',
                lon: '-97.5195',
                state: 'TAMAULIPAS'
            },
            {
                id: 2049,
                address: 'BLVD. ZARAGOZA NO. 6008, COL. PARQUE INDUTRIAL ZARAGOZA',
                name: 'AV. ZARAGOZA',
                cp: '32685',
                lat: '31.658076',
                lon: '-106.441567',
                state: 'CHIHUAHUA'
            },
            {
                id: 2089,
                address: 'PASEO DEL TRIUNFO DE LA REPUBLICA NO. 4630, COLONIA BUROCRATA 2DA SECCION',
                name: 'PLAZA MONUMENTAL',
                cp: '32340',
                lat: '31.73636',
                lon: '-106.444343',
                state: 'CHIHUAHUA'
            },
            {
                id: 2377,
                address: 'AV. EJÉRCITO NACIONAL NO. 7445 COL. PARTIDO IGLESIAS',
                name: 'CD. JUAREZ',
                cp: '38618',
                lat: '31.704352',
                lon: '-106.417013',
                state: 'CHIHUAHUA'
            },
            {
                id: 5764,
                address: 'AV. DE LAS TORRES NO. 1571 COL. PARQUE IND. ANTONIO J. BERMUDEZ',
                name: 'TORRES DEL SUR',
                cp: '32470',
                lat: '31.634',
                lon: '-106.393',
                state: 'CHIHUAHUA'
            },
            {
                id: 1015,
                address: 'PASEO IRAPUATO N. 1209 COL. PRIMERA SAN GABRIEL',
                name: 'IRAPUATO',
                cp: '36690',
                lat: '20.68413',
                lon: '-101.366408',
                state: 'GUANAJUATO'
            },
            {
                id: 1550,
                address: 'AV. FCO. VILLA NO. 1526 ESQ. AV. GONZALEZ GALLO, COL. LOS SAUCES',
                name: 'MACRO PLAZA VALLARTA',
                cp: '48328',
                lat: '20.64375',
                lon: '-105.216201',
                state: 'JALISCO'
            },
            {
                id: 3747,
                address: 'FRANCISCO MEDINA ASCENCIO NO. 2900, COL. LA AURORA',
                name: 'EL PITILLAL',
                cp: '48290',
                lat: '20.6571',
                lon: '-105.238',
                state: 'JALISCO'
            },
            {
                id: 2382,
                address: 'BLVD. MAGNOCENTRO NO. 35, LOTE 1, MANZANA II, COL  BOSQUES DE LAS PALMAS',
                name: 'INTERLOMAS',
                cp: '52787',
                lat: '19.406075',
                lon: '-99.272184',
                state: 'MEXICO'
            },
            {
                id: 2381,
                address: 'CALZ. LA HUERTA NO. 3000 COL EXHACIENDA LA HUERTA',
                name: 'MORELIA',
                cp: '58090',
                lat: '19.679555',
                lon: '-101.22082',
                state: 'MICHOACAN'
            },
            {
                id: 4036,
                address: 'CARRETERA INTERNACIONAL MEXICO-NOGALES KM 1982 #1400, ENTRE LAS CALLES DE LA DIANA CAZADORA Y ELECTRA COL. LOMA LINDA',
                name: 'GUAYMAS',
                cp: '85420',
                lat: 'NULL',
                lon: 'NULL',
                state: 'SONORA'
            },
            {
                id: 3091,
                address: 'REFORMA #5601 FRACC CENTRO COMERCIAL REFORMA',
                name: 'AVE. REFORMA',
                cp: '88240',
                lat: '27.450265',
                lon: '-99.517319',
                state: 'TAMAULIPAS'
            },
            {
                id: 4024,
                address: 'AV UNIVERSIDAD VERACRUZANA 2329 COL. RANCHO ALEGRE 2',
                name: 'AVE. UNIVERSIDAD',
                cp: '96558',
                lat: '18.141277',
                lon: '-94.472211',
                state: 'VERACRUZ'
            },
            {
                id: 1195,
                address: 'BLVD. JUAN ALONSO DE TORRES NO. 1325 COL. SAN JOSE DEL CONSUELO',
                name: 'GALERIAS LAS TORRES',
                cp: '37178',
                lat: '21.146147',
                lon: '-101.648622',
                state: 'GUANAJUATO'
            },
            {
                id: 2433,
                address: 'BLVD. JUAN JOSÉ TORRES LANDA ORIENTE N. 1601 COL. FRACCIÓN DE PREDIO EL TLACUACHE',
                name: 'TORRES LANDA',
                cp: '37500',
                lat: '21.098693',
                lon: '-101.65804',
                state: 'GUANAJUATO'
            },
            {
                id: 3745,
                address: 'BLVD. MANUEL J. CLOUTHIER NO. 302 COL. PREDIO RUSTICO CERRO GORDO',
                name: 'CLOUTHIER',
                cp: '37125',
                lat: '21.1615',
                lon: '-101.691',
                state: 'GUANAJUATO'
            },
            {
                id: 2034,
                address: 'AV. EUGENIO GARZA SADA NO.1061 COL. LAS BRISAS',
                name: 'LAS TORRES',
                cp: '64780',
                lat: '25.617672',
                lon: '-100.273371',
                state: 'NUEVO LEON'
            },
            {
                id: 3051,
                address: 'CALLE VICENTE GUERRERO NO. 2500',
                name: 'PLAZA CENTRIKA',
                cp: '64520',
                lat: '25.702928',
                lon: '-100.308723',
                state: 'NUEVO LEON'
            },
            {
                id: 3720,
                address: 'AV. ABRAHAM LINCOLN No. 5400 COL. RINCON DE STA. CECILIA',
                name: 'LINCOLN ',
                cp: '64117',
                lat: '25.730312',
                lon: '-100.369439',
                state: 'NUEVO LEON'
            },
            {
                id: 4137,
                address: 'AV. CHAPULTEPEC NO. 1836, ENTRE AGUSTIN LARA Y FCO. VILLA, COL. BUENOS AIRES',
                name: 'CHAPULTEPEC MONTERREY',
                cp: '64800',
                lat: '25.665921',
                lon: '-100.279315',
                state: 'NUEVO LEON'
            },
            {
                id: 2303,
                address: 'PASEO RÍO SONORA SUR  NO. 37 L-A  FRACC. PROYECTO RÍO SONORA',
                name: 'HERMOSILLO',
                cp: '83289',
                lat: '29.067791',
                lon: '-110.968679',
                state: 'SONORA'
            },
            {
                id: 3030,
                address: 'BOULEVARD JOSÉ MARÍA MORELOS No. 355, COL. ZONA MILITAR CUARTEL  XV',
                name: 'BLVD. MORELOS',
                cp: '83145',
                lat: '29.123131',
                lon: '-110.950843',
                state: 'SONORA'
            },
            {
                id: 3746,
                address: 'BLVD. SOLIDARIDAD Y AV. TECNOLOLGICO #116 ESQ. COL. SAHUARO',
                name: 'SOLIDARIDAD',
                cp: '83170',
                lat: '29.0979',
                lon: '-110.994',
                state: 'SONORA'
            },
            {
                id: 1404,
                address: 'BOULEVARD NAZARIO ORTIZ GARZA NO. 2345, COL. TANQUE DE PEÑA, ENTRE AV. LOPEZ MATEOS Y PISA',
                name: 'GALERIAS SALTILLO',
                cp: '25000',
                lat: '25.456387',
                lon: '-100.977747',
                state: 'COAHUILA'
            },
            {
                id: 2465,
                address: 'PASEO DE LA REFORMA NO. 1690 COL. PROVIVIENDA, SALTILLO COAHUILA',
                name: 'SALTILLO',
                cp: '25020',
                lat: '25.426126',
                lon: '-100.971397',
                state: 'COAHUILA'
            },
            {
                id: 3790,
                address: 'LEONA VICARIO NO. 502, COL LA PURISIMA',
                name: 'METEPEC',
                cp: '52840',
                lat: '19.255896',
                lon: '-99.619344',
                state: 'MEXICO'
            },
            {
                id: 1022,
                address: 'AV. PROLONGACION LOPEZ MATEOS SUR 1501, COL. FRACC. LA TIJERA',
                name: 'LOPEZ MATEOS',
                cp: '45600',
                lat: '20.586513',
                lon: '-103.444844',
                state: 'JALISCO'
            },
            {
                id: 1119,
                address: 'PERIFERICO SUR  N° 7835, COL. STA MARIA TEQUEPEXPAN',
                name: 'COLÓN',
                cp: '45601',
                lat: '20.604597',
                lon: '-103.400453',
                state: 'JALISCO'
            },
            {
                id: 1032,
                address: 'SUPER CARRETERA LOMAS VERDES No. 1200 VI SECCIÓN LOMAS VERDES',
                name: 'LOMAS VERDES',
                cp: '53120',
                lat: '19.514963',
                lon: '-99.266341',
                state: 'MEXICO'
            },
            {
                id: 3847,
                address: 'CIRCUITO 19 METALURGISTAS NO. 2 CD. SATELITE',
                name: 'SATELITE',
                cp: '53100',
                lat: '19.515508',
                lon: '-99.23111',
                state: 'MEXICO'
            },
            {
                id: 3850,
                address: 'EMILIANO ZAPATA NO 7  COL. SANTA MARÍA NATIVITAS',
                name: 'ECHEGARAY',
                cp: '5320',
                lat: '19.484559',
                lon: '-99.232549',
                state: 'MEXICO'
            },
            {
                id: 3854,
                address: 'BLVD. MANUEL AVILA CAMACHO NO. 2550  FRACC. LOS PIRULES',
                name: 'PIRULES',
                cp: '54050',
                lat: '19.543053',
                lon: '-99.213826',
                state: 'MEXICO'
            },
            {
                id: 2050,
                address: 'BLVD. INDUSTRIAL N.o. 1241 ENTRE PIZÓN Y VERACRUZ COL. VILLA URUAPAN',
                name: 'URUAPAN',
                cp: '60120',
                lat: '19.423123',
                lon: '-102.031998',
                state: 'MICHOACAN'
            },
            {
                id: 2179,
                address: 'AV. SENDERO DIVISORIO # 200 ENTRE REP. MEXICANA Y SENDERO ANAHUAC',
                name: 'SAN NICOLAS',
                cp: '66417',
                lat: 'NULL',
                lon: 'NULL',
                state: 'NUEVO LEON'
            },
            {
                id: 2676,
                address: 'AV. ROMULO GARZA NO. 256 COL. MIGUEL ALEMAN',
                name: 'LA FE',
                cp: '66470',
                lat: '25.7229',
                lon: '-100.221',
                state: 'NUEVO LEON'
            },
            {
                id: 1686,
                address: 'AV. JUAN GIL PRECIADO # 1544 ENTRE LAS CALLES A LA CIMA Y ARCO ESCOCES',
                name: 'LA CIMA',
                cp: '45130',
                lat: 'NULL',
                lon: 'NULL',
                state: 'JALISCO'
            },
            {
                id: 2342,
                address: 'AV. VALLARTA NO. 5455  VALLARTA C.P.45030 FRACC.LA ESTANCIA',
                name: 'VALLARTA',
                cp: '45030',
                lat: '20.678212',
                lon: '-103.432686',
                state: 'JALISCO'
            },
            {
                id: 3721,
                address: 'MANUEL AVILA CAMACHO NO. 2770 FRACCIONAMIENTO SEATLE',
                name: 'AVILA CAMACHO',
                cp: '45150',
                lat: '20.7138',
                lon: '-103.375',
                state: 'JALISCO'
            },
            {
                id: 3878,
                address: 'AV. NIÑO OBRERO NO. 1551, COL. CHAPALITA',
                name: 'NIÑO OBRERO',
                cp: '45050',
                lat: '20.666793',
                lon: '-103.409505',
                state: 'JALISCO'
            },
            {
                id: 4012,
                address: 'LABNÁ NO. 1437 ENTRE AV. PATRIA Y AV. MOCTEZUMA, COL. ANEXO A JARDINES DEL SOL',
                name: 'JARDINES DEL SOL',
                cp: '45050',
                lat: '20.648618',
                lon: '-103.419695',
                state: 'JALISCO'
            },
            {
                id: 4071,
                address: 'PASEO ROYAL COUNTRY #455 ENTRE LAS CALLES AV. PATRIA Y PASEO DE LOS VIRREYES',
                name: 'PATRIA',
                cp: '45116',
                lat: 'NULL',
                lon: 'NULL',
                state: 'JALISCO'
            },
            {
                id: 2079,
                address: 'AV. BORDO DE XOCHIACA No. 3 Lt -A2  COL. BENITO JUÁREZ',
                name: 'CD. JARDIN',
                cp: '50000',
                lat: '19.427394',
                lon: '-99.028602',
                state: 'MEXICO'
            },
            {
                id: 1139,
                address: 'AV. INDUSTRIALES DEL PONIENTE NÚMERO 1050, AL ORIENTE DEL FRACCIONAMIENTO BOSQUES DEL PONIENTE C.P. 66362, MUNICIPIO DE SANTA CATARINA, NUEVO LEÓN',
                name: 'LA HUASTECA',
                cp: '66362',
                lat: 'NULL',
                lon: 'NULL',
                state: 'NUEVO LEON'
            },
            {
                id: 2042,
                address: 'BOULEVARD  EL GRECO NO.47 COLONIA EL GRECO ENTRE BOULEVARD LUIS DONALDO COLOSIO Y ARCADIA NOGALES  ',
                name: 'NOGALES "EL GRECO"',
                cp: '84066',
                lat: '31.28862',
                lon: '-110.941423',
                state: 'SONORA'
            },
            {
                id: 1902,
                address: 'AV. HIDALGO NO. 6904, ENTRE LAS CALLES RIVERA DE CHAMPAYAN Y COLIMA, COL. MEXICO',
                name: 'AEROPUERTO TAMPICO',
                cp: '89348',
                lat: '22.298754',
                lon: '-97.878833',
                state: 'TAMAULIPAS'
            },
            {
                id: 2378,
                address: 'AV. HIDALGO NO.5100 COL. LOMAS DE ROSALES',
                name: 'TAMPICO',
                cp: '89100',
                lat: '22.270868',
                lon: '-97.873066',
                state: 'TAMAULIPAS'
            },
            {
                id: 3893,
                address: 'AV. LAZARO CARDENAS NO. 406  COL. JARDINES DE JALAPA',
                name: 'JALAPA',
                cp: '91179',
                lat: '19.54138',
                lon: '-96.907388',
                state: 'VERACRUZ'
            },
            {
                id: 2375,
                address: 'BOULEVARD DIAGONAL REFORMA NO. 2220 COL. ABASTOS',
                name: 'TORREON',
                cp: '27040',
                lat: '25.551811',
                lon: '-103.423886',
                state: 'COAHUILA'
            },
            {
                id: 3622,
                address: 'BLVD. RODRIGUEZ TRIANA Y  PROL. DIAGONAL LAS FUENTES  COL. LOS CEDROS TORREON COAHUILA',
                name: 'LA ROSITA ',
                cp: '27295',
                lat: '25.5075',
                lon: '-103.397',
                state: 'COAHUILA'
            },
            {
                id: 2734,
                address: 'CALZADA ZAMORA JACONA #1900 ENTRE LAS CALLES VIRREY DE MENDOZA Y RIO NUEVO COL, LA NUEVA LUNETA',
                name: 'PLAZA ANA',
                cp: '59689',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MICHOACAN'
            },
            {
                id: 3630,
                address: 'BLVD. ADOLFO LÓPEZ MATEOS NO. 150 COL. UNIDAD HAB. FIDEL VELAZQUEZ C.P. 87049 CD. VICTORIA TAMAULIPAS',
                name: 'LAS ADELITAS',
                cp: '87049',
                lat: '23.754',
                lon: '-99.1573',
                state: 'TAMAULIPAS'
            },
            {
                id: 3113,
                address: 'AV. RIO NILO # 7377 ESQ. MALECON',
                name: 'NILO',
                cp: '45403',
                lat: 'NULL',
                lon: 'NULL',
                state: 'JALISCO'
            },
            {
                id: 3631,
                address: 'AV. RÍO NILO NO. 8096 COL. LOMA DORADA. TONALÁ, JALISCO',
                name: 'TONALA',
                cp: '45418',
                lat: '20.629',
                lon: '-103.257',
                state: 'JALISCO'
            },
            {
                id: 1171,
                address: 'CARRETERA FEDERAL MÉXICO - PACHUCA  KM  36.5   COL. HUEYOTENCO',
                name: 'SAN JOSÉ TECAMAC',
                cp: '55741',
                lat: '19.696403',
                lon: '-98.981644',
                state: 'MEXICO'
            },
            {
                id: 3016,
                address: 'BOSQUES DEL ESTADO DE MEXICO NO. 2 LOTE 1, COL. LOS HEROES TECAMAC, C.P. 55764 TECAMAC EDO. DE MEXICO',
                name: 'MACRO PLAZA HEROES TECAMAC',
                cp: '55764',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 2041,
                address: 'AV. HIDALGO S/N  COL. INDUSTRIAL TLAXCOLPAN',
                name: 'TOLTECAS',
                cp: '54030',
                lat: '19.55447',
                lon: '-99.193383',
                state: 'MEXICO'
            },
            {
                id: 1169,
                address: 'AUTOPISTA  MEXICO-QUERETARO No. 3985 COL. CENTRO INDUSTRIAL TLALNEPANTLA',
                name: 'MULTIPLAZA ARBOLEDAS',
                cp: '54030',
                lat: '19.546383',
                lon: '-99.209208',
                state: 'MEXICO'
            },
            {
                id: 4191,
                address: 'LAGO DE GPE S/N LOTE 2 LOCAL SA03 COL. SAN PEDRO BARRIENTOS 54010 TLANEPANTLA DE BAZ',
                name: 'LAGO DE GUADALUPE',
                cp: '54010',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 4120,
                address: 'CARRETERA POZA RICA-CAZONES # 4706 COLONIA LA RUEDA',
                name: 'POZA RICA',
                cp: '93306',
                lat: '20.5686',
                lon: '-97.435947',
                state: 'VERACRUZ'
            },
            {
                id: 2218,
                address: 'CARRETERA TUXPAN-TAMPICO #88 ENTRE LAS CALLES EL MANGUITO Y CAMINO A JUANA MOZA COL. LAS GRANJAS',
                name: 'TUXPAN',
                cp: '92894',
                lat: 'NULL',
                lon: 'NULL',
                state: 'VERACRUZ'
            },
            {
                id: 1423,
                address: 'CARRETERA CUAUTITLAN-TULTEPEC NO. 2 COL. TERREMOTO, ENTRE LAS CALLES SANTA LUCIA Y CAMINO VIEJO EL QUEMADO',
                name: 'SANTA ELENA',
                cp: '54850',
                lat: '19.676727',
                lon: '-99.148361',
                state: 'MEXICO'
            },
            {
                id: 1107,
                address: 'CARRETERA MEXICO- CUAUTLA LOCALES 3A Y 3B S/N, ENTRE LA ESPINITA E IXTAPALUCA',
                name: 'IXTAPALUCA',
                cp: '56530',
                lat: '19.310338',
                lon: '-98.900392',
                state: 'MEXICO'
            },
            {
                id: 1489,
                address: 'HIDALGO NO. 300, COL. STA. CRUZ DE ARRIBA, ENTRE LAS CALLES CAMINO ALMOLINO DE LAS FLORES Y LIBERTAD',
                name: 'HIPERPLAZA TEXCOCO',
                cp: '56120',
                lat: '19.514789',
                lon: '-98.86847',
                state: 'MEXICO'
            },
            {
                id: 1462,
                address: 'RIO LERMA NO. 5 COL. LA MERCED LERMA, ENTRE LAS CALLES DE MORELOS Y EL CALVARIO ',
                name: 'LERMA TOLUCA',
                cp: '52006',
                lat: '19.282224',
                lon: '-99.497056',
                state: 'MEXICO'
            },
            {
                id: 2343,
                address: 'PASEO TOLLOCAN NO. 600 COL. SECTOR PROGRESO',
                name: 'TOLUCA',
                cp: '50150',
                lat: '19.281266',
                lon: '-99.639775',
                state: 'MEXICO'
            },
            {
                id: 5702,
                address: 'VIALIDAD TOLUCA-NAUCALPAN NO. 1101, SAN MATEO OTZACATIPAN',
                name: 'SANTIN',
                cp: '50200',
                lat: '19.350382',
                lon: '-99.591289',
                state: 'MEXICO'
            },
            {
                id: 5791,
                address: 'BOULEVARD ADOLFO LÓPEZ MATEOS NO. 117 COL. OJUELOS ZINACANTEPEC',
                name: 'ZINACANTEPEC',
                cp: '51350',
                lat: '19.286835',
                lon: '-99.699696',
                state: 'MEXICO'
            },
            {
                id: 5825,
                address: 'BOULEVARD ALFREDO DEL MAZO NO. 503 COL. JARDINES DE TLACOPA',
                name: 'ALFREDO DEL MAZO',
                cp: '50071',
                lat: '19.3098',
                lon: '-99.6351',
                state: 'MEXICO'
            },
            {
                id: 1683,
                address: 'CARRETERA FEDERAL MEXICO -CUAULA # 166 ESQ. CARRETERA A CHALCO-SANTA MARIA HUEXOCULCO',
                name: 'VICENTE GUERRERO',
                cp: '56600',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 4138,
                address: 'CARRETERA A REYNOSA NO. 1800, ENTRE AV. LAS TORRES Y CALLE 21 DE MARZO, COL. PASEOS DEL PRADO',
                name: 'VILLA JUAREZ',
                cp: '67250',
                lat: '25.6541',
                lon: '-100.124811',
                state: 'NUEVO LEON'
            },
            {
                id: 3909,
                address: 'BOULERVARD CORDOBA FORTIN NO. 4027 COL. SANTA LETICIA',
                name: 'CORDOBA',
                cp: '94470',
                lat: 'NULL',
                lon: 'NULL',
                state: 'VERACRUZ'
            },
            {
                id: 1403,
                address: 'CARRETERA CHAPALA - AJIJIC NO. 20 COL. SAN ANTONIO TLAYACAPAN, FRENTE AL LIBRAMIENTO A AJIJIC',
                name: 'CHAPALA',
                cp: '45915',
                lat: '20.298686',
                lon: '-103.242266',
                state: 'JALISCO'
            },
            {
                id: 1724,
                address: 'CARRETERA ZUMPANGO LOS REYES S/N COL. BUENAVISTA, ENTRE LAS CALLES DE LOS PINOS Y PIRINEOS',
                name: 'LOS REYES',
                cp: '55635',
                lat: 'NULL',
                lon: 'NULL',
                state: 'MEXICO'
            },
            {
                id: 4109,
                address: 'CARRETERA FEDERAL MEXICO TEXCOCO KM 30.5   COL. SANTIAGO CUAUTLALPAN',
                name: 'PUERTA TEXCOCO',
                cp: '56259',
                lat: '19.425361',
                lon: '-98.912401',
                state: 'MEXICO'
            },
            {
                id: 4090,
                address: 'CAMINO REAL TETELCINGO CALDERÓN NO. 23,  ENTRE BARRANCA TEZAHUAPAN Y AUTOPISTA CUAUTLA - OAXTEPEC, COL. TIERRA LARGA',
                name: 'LOS ATRIOS CUAUTLA',
                cp: '62751',
                lat: '18.859225',
                lon: '-98.944197',
                state: 'MORELOS'
            },
            {
                id: 1425,
                address: 'AV. TEPIC NO. 430, COL. VALLE DORADO, ENTRE AV. RINCON DEL CIELO Y VALLE DE MEXICO',
                name: 'BAHIA DE BANDERAS',
                cp: '63732',
                lat: '20.712643',
                lon: '-105.274239',
                state: 'NAYARIT'
            },
            {
                id: 1003,
                address: 'REGION 01, MANZANA 040, LOTE 001-1 S/N, SOL. CENTRO',
                name: 'PLAYA DEL CARMEN',
                cp: '77710',
                lat: '20.627901',
                lon: '-87.074518',
                state: 'QUINTANA ROO'
            },
            {
                id: 2731,
                address: 'CARRETERA APIZACO - PUEBLA NO. 3 ENTRE LAS CALLES DE IGNACIO ZARAGOZA Y REFORMA',
                name: 'EL MOLINITO',
                cp: '90610',
                lat: 'NULL',
                lon: 'NULL',
                state: 'TLAXCALA'
            }
        ],
        buildStores: function() {
            var _this = this;
            var options = this.stores.map(function(val, key) {
                if (_this.props.state.cp) {
                    var cp = _this.props.state.cp.trim();
                }
                //return div({ className: _this.props.state.selectedStore.trim() === val.store.toLowerCase().trim() ? 'option active' : 'option' }, val.name)
                return cp == val.cp ? div({ className: 'option' },
                    span({ className: 'name' }, val.name),
                    span({ className: 'cp' }, 'C.P. ', val.cp),
                    div({ className: 'direccion' }, val.address)
                ) : null
            })
            return div({ className: 'listStores' },
                h1({ className: 'titleStores' }, 'Dime quieres "recoger en tienda" o "servicio a domicilio"!'), options,

                //_this.props.state.cp != 0 ? h1({ className: 'store' }, 'Di el nombre de la tienda seguido de la palabra "tienda" para! para seleccionarla') : null
            )
        },
        render: function() {
            return this.props.state.accept ? this.buildStores() : null
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
.controller('carritoCtrl', ['$scope', '$rootScope', '$window', 'flux', 'generals', function($scope, $rootScope, $window, flux, generals) {
	var renderApp = function() {
		ReactDOM.render(
			React.createElement(renders.carrito.main, {
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
