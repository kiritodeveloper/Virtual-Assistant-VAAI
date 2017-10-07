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
