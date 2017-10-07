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
