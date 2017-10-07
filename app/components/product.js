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
			swipe: store.swipe
		};
	};

	renders.components.product = React.createClass({
		displayName: 'product',
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
				className: 'product'
			}, '');
		}
	});
})();
