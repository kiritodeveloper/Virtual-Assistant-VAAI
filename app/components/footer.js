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
