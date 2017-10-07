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
