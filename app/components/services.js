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
