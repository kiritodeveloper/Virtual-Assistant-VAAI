'use strict';

/**
 * @component   : shes
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

	renders.components.shes = React.createClass({
		displayName: 'shes',
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

			return div({ className: 'shes'},
						div({className:'bioghrap'},
							div({className:'person'},
								div({className:'photo'},
									div({className:'back'},null),
									img({src:'/images/amormio.jpg'},null),
									div({className:'description'},
										p({className:'name'},'Nancy Botello Carmona'),
										p({className:'titulo'},'CEO & Art Nail Profesional'),
										p({className:'desc'},'Siempre he pensado que la mejor actitud maximiza la creatividad')
									)
								)
							),
							div({className:'person'},
								div({className:'photo'},
									div({className:'back'},null),
									img({src:'/images/mary.jpg'},null),
									div({className:'description right'},
										p({className:'name'},'Carmen Botello Carmona'),
										p({className:'titulo'},'Partner Professional make up and hairstyle'),
										p({className:'desc'},'Hay tres cosas en la vida que no se puede perder: la esperanza, la paciencia y la honestidad')
									)
								)
							),
							div({className:'person'},
								div({className:'photo'},
									div({className:'back'},null),
									img({src:'/images/raque.jpg'}),
									div({className:'description'},
										p({className:'name'},'Raquel Rivera Carmona'),
										p({className:'titulo'},'Partner eyebrow and professional hairstyle'),
										p({className:'desc'},'Cuando nuestras actitudes sobrepasan nuestras habilidades, aun lo imposible se hace posible')
									)
								)
							)
						)
				);
		}
	});
})();
