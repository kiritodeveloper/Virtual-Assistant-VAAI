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
