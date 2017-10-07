'use strict';

/**
 * @component   : Social module
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

	renders.components.social = React.createClass({
		displayName: 'socialSection',
		size: '',
		getInitialState: function() {
			return {
				status: false,
			};
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		render: function() {
			var _this = this;
			var regex = '';
			

			return div({  className: 'socialSection'}, 
						div({className:'controls'},
							div({className:'first'},
								ul({className:'sections'},
									li({className:'subSection'},'Eventos'),
									li({className:'subSection'},'Galeria'),
									li({className:'subSection'},'Unete!'),
									li({className:'subSection'},'Nosotros'),
									li({className:'subSection last'},'Mexico')
								)
							),
							div({className:'second'},
								div({className:'secondSection', id:'disclaimer'},'Registrate con nosotros y conoce los beneficios, es gratis!'),
								div({className:'secondSection', id:'register'},
									React.createElement(renders.components.signup,{size: 'full', placeholder: 'Correo electrónico', type:'mail'}),
								),
								div({className:'secondSection', id:'socialnetwork'},
									
									div({className:'circleIcon', id:'youtube'},
										span({className:'icon icon-youtube'},null)
									),
									div({className:'circleIcon', id:'pinteres'},
										span({className:'icon icon-pinterest2'},null)
									),
									div({className:'circleIcon', id:'instagram'},
										span({className:'icon icon-instagram'},null)
									),
									div({className:'circleIcon', id:'twitter'},
										span({className:'icon icon-twitter'},null)
									),
									div({className:'circleIcon', id:'facebook'},
										span({className:'icon icon-facebook'},null)
									)
								)
							)
						)
					);
		}
	});
})();
