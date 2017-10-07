'use strict';

/**
 * @component   : Dynamic selecter
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

	renders.components.dinamicSelecter = React.createClass({
		displayName: 'dinamicSelecter',
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
			
			return div({ className: 'dynamicSelecter' }, 
						div({className:'backColor'},''),
						div({className:'back'},''),
						div({className:'circleCtrl'},
							div({className:'photoBack'},''),
							div({className:'colorBack'},''),

							div({className:'title'},
								div({className:'textBig'},'Diseñamos'),
								div({className:'textSmall'},'Especialmente para ti')
							),
							div({className:'text'},
								'Tienes un evento y necesitas servicio a domicilio, llamanos y nosotros te atendemos.'
							),
							div({className:'circleDotted'},
								div({className:'optionCircle', id:'one'},
									span({className:'icono icon-head'},null),
									div({className:'box'},
										div({className:'titleBox'},'Registrate!'),
										div({className:'textBox'},'Registrate en nuestro portal para poder consultar el detalle de nuestros serviios personalizados')
									)
								),
								div({className:'optionCircle', id:'two'},
									span({className:'icono icon-cloud-upload2'},null),
									div({className:'box'},
										div({className:'titleBox'},'Elige un servicio'),
										div({className:'textBox'},'Selecciona un servicio de nuestro catalogo, envianos una solicitud y nosotros nos encargamos de lo demas.')
									)
								),
								div({className:'optionCircle', id:'three'},
									span({className:'icono icon-clock3'},null),
									div({className:'box'},
										div({className:'titleBox'},'Justo a tiempo'),
										div({className:'textBox'},'Haz una reservacion con anticipacion, y entonces te atenderemos en el momento preciso de tu solicitud!')
									)
								),
								div({className:'optionCircle', id:'four'},
									span({className:'icono icon-check'},null),
									div({className:'box'},
										div({className:'titleBox'},'Evaluanos'),
										div({className:'textBox'},'Despues de terminar con el servicio solicitado, regalanos tus comentarios acerca de que te parecio y si estas satisfecho.')
									)
								),
								div({className:'optionCircle', id:'five'},
									span({className: 'icono icon-heart2'},null),
									div({className:'box'},
										div({className:'titleBox'},'¿Contento?'),
										div({className:'textBox'},'Regresa con nosotros y goza de los beneficios del programa de lealtad, donde tenemos una variedad de promociones.')
									)
								)
							)
							
						)
				   );
		}
	});
})();
