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
