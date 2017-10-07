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
