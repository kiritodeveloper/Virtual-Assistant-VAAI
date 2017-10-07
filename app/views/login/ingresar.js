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
