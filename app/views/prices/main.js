'use strict';

/**
 * @View        : Prices - Main
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
	renders.views.prices = renders.views.prices || {};

	function getState(store) {
		return {
		};
	};

	renders.views.prices.main = React.createClass({
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
			return div({ className: 'prices'},
						div({className:'banner'},
                            img({className:'image', src:'images/bannPrices.jpg'}),
                            div({className:'title'},
                                p({className:'up'},'Just do it'),
                                p({className:'text'},'haz que tu evento sea memorable, con nuestros planes de belleza creativa de Nail Glam. Las herramientas y materiales que usamos son lideres en el mercado, tenemos a las personas correctas para la ocasión.')
                            )
                        ),
                        div({className:'bar'},
                            span({className:'textBar'},
                                'obten todas las caracteristicas y servicios que tu quieras, incluidas en los paquetes que te mostramos'
                            ),
                            span({className:'button'},'Adquirir servicio ahora')
                        ),
                        div({className:'paqs'},
                            div({className:'title'},'Paquetes'),
                            div({className:'mainBlock'},
                                div({className:'block'},
                                    div({className:'blockInt', id:'b1'},
                                        div({className:'title'},'Faciales'),
                                        div({className:'description'},'Los mejores masajes, relajamiento en cada movimiento'),
                                        div({className:'desde'},'Desde'),
                                        div({className:'price'},
                                            span({className:'first'},'MXN2,500'),
                                            span({className:'second'},'/servicio'),

                                        ),
                                        div({className:'ahorro'},'MXN2,200/servicio cuando regresas'),
                                        div({className:'button'},'Adquirir servicio'),
                                        ul({className:'list'},
                                            li({className:'option'},'Limpieza completa'),
                                            li({className:'option'},'Planchado de cejas'),
                                            li({className:'option'},'Masaje facial'),
                                            li({className:'option'},'Aclarado de piel'),
                                            li({className:'option'},'Depilación'),
                                            li({className:'option'},'Colageno')
                                        )
                                    )
                                ),
                                div({className:'block'},
                                    div({className:'blockInt', id:'b2'},
                                        div({className:'title'},'Uñas'),
                                        div({className:'description'},'Diseños a la medida, con elegantes accesorios y colores espectacuales'),
                                        div({className:'desde'},'Desde'),
                                        div({className:'price'},
                                            span({className:'first'},'MXN3,200'),
                                            span({className:'second'},'/servicio'),

                                        ),
                                        div({className:'ahorro'},'MXN2,900/servicio cuando regresas'),
                                        div({className:'button'},'Adquirir servicio'),
                                        ul({className:'list'},
                                            li({className:'option'},'Colores basicos'),
                                            li({className:'option'},'+ colores artisticos'),
                                            li({className:'option'},'Efectos y paisajes'),
                                            li({className:'option'},'Fijuras 3D'),
                                            li({className:'option'},'Elementos adicionales'),
                                            li({className:'option'},'Piedras espectaculares')
                                        )
                                    )
                                ),
                                div({className:'block'},
                                    div({className:'blockInt', id:'b3'},
                                        div({className:'title'},'Peinados'),
                                        div({className:'description'},'Innovamos con cada tipo de cabello, con los mejores accesorios'),
                                        div({className:'desde'},'Desde'),
                                        div({className:'price'},
                                            span({className:'first'},'MXN3,700'),
                                            span({className:'second'},'/servicio'),

                                        ),
                                        div({className:'ahorro'},'MXN3,400/servicio cuando regresas'),
                                        div({className:'button'},'Adquirir servicio'),
                                        ul({className:'list'},
                                            li({className:'option'},'Shock de queratina'),
                                            li({className:'option'},'Peinado artistico'),
                                            li({className:'option'},'Corte de cabello'),
                                            li({className:'option'},'Lavado especial'),
                                            li({className:'option'},'Hidratación'),
                                            li({className:'option'},'Vitaminas adicionales')
                                        )
                                    )
                                ),
                                div({className:'block'},
                                    div({className:'blockInt', id:'b4'},
                                        div({className:'title'},'Maquillaje'),
                                        div({className:'description'},'Seras el alma de la fiesta con los maquillajes mas y sofisticados'),
                                        div({className:'desde'},'Desde'),
                                        div({className:'price'},
                                            span({className:'first'},'MXN4,500'),
                                            span({className:'second'},'/servicio'),

                                        ),
                                        div({className:'ahorro'},'MXN4,200/servicio cuando regresas'),
                                        div({className:'button'},'Adquirir servicio'),
                                        ul({className:'list'},
                                            li({className:'option'},'Artistico'),
                                            li({className:'option'},'Fantasia'),
                                            li({className:'option'},'Social'),
                                            li({className:'option'},'Hallowen'),
                                            li({className:'option'},'Con aerografo'),
                                            li({className:'option'},'Boda')
                                        )
                                    )
                                )
                            )
                        )

					)


		}
	});
})();
