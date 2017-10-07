'use strict';

/**
 * @component   : Calendar
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

	renders.components.calendar = React.createClass({
		displayName: 'ctrlCalendar',
		size: '',
		getInitialState: function() {
			return {
				statusControl: false,
				largeStr: 0,
				text: '',
				viewCalendar: false
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
			var validate = false;
			if(_this.props.size === 'short'){
				_this.size = '25%'
			}else if(_this.props.size === 'middle'){
				_this.size = '50%'
			}else if(_this.props.size === 'full'){
				_this.size = '100%'
			}

			console.log("viewCalendar: ", _this.state.viewCalendar)

			return div({ 
							className: 'textBoxCtrl',
							style: {
								'width': _this.size
							}
						}, 
						div({className:'borderStatus'},
							div({
									className:'borderColor',
									style: {
										bottom: (_this.state.statusControl) ? '30px' : '0',
										fontSize: _this.state.statusControl ? '12px' : '16px'
									}
								}, this.props.placeholder),
							div({className: _this.state.viewCalendar ? 'containerDate active' : 'containerDate'},
								
									div({className:'container'},
										div({className:'title'},'Día'),
										div({className:'mask'},
											ul({className:'dates'},
												li({className:'date'},1),
												li({className:'date'},2),
												li({className:'date'},3),
												li({className:'date'},4),
												li({className:'date'},5),
												li({className:'date'},6),
												li({className:'date'},7),
												li({className:'date'},8),
												li({className:'date'},9),
												li({className:'date'},10),
												li({className:'date'},11),
												li({className:'date'},12),
												li({className:'date'},13),
												li({className:'date'},14),
												li({className:'date'},15),
												li({className:'date'},16),
												li({className:'date'},17),
												li({className:'date'},18),
												li({className:'date'},19),
												li({className:'date'},20),
												li({className:'date'},21),
												li({className:'date'},22),
												li({className:'date'},23),
												li({className:'date'},24),
												li({className:'date'},25),
												li({className:'date'},26),
												li({className:'date'},27),
												li({className:'date'},28),
												li({className:'date'},29),
												li({className:'date'},30),
												li({className:'date'},31)
												
											)
										)
									),
									div({className:'container'},
										div({className:'title'},'Mes'),
										div({className:'mask'},
											ul({className:'months'},
												li({className:'month'},'Enero'),
												li({className:'month'},'Febrero'),
												li({className:'month'},'Marzo'),
												li({className:'month'},'Abril'),
												li({className:'month'},'Mayo'),
												li({className:'month'},'Junio'),
												li({className:'month'},'Julio'),
												li({className:'month'},'Agosto'),
												li({className:'month'},'Septiembre'),
												li({className:'month'},'Octubre'),
												li({className:'month'},'Noviembre'),
												li({className:'month'},'Diciembre')
											)
										)
									),
									div({className:'container'},
										div({className:'title'},'Año'),
										div({className:'mask'},
											ul({className:'years'},
												li({className:'year'},'1991'),
												li({className:'year'},'1992'),
												li({className:'year'},'1993'),
												li({className:'year'},'1994'),
												li({className:'year'},'1995'),
												li({className:'year'},'1996'),
												li({className:'year'},'1997'),
												li({className:'year'},'1998'),
												li({className:'year'},'1999'),
												li({className:'year'},'2000'),
												li({className:'year'},'2001'),
												li({className:'year'},'2002'),
												li({className:'year'},'2003'),
												li({className:'year'},'2004'),
												li({className:'year'},'2005'),
												li({className:'year'},'2006'),
												li({className:'year'},'2007'),
												li({className:'year'},'2008'),
												li({className:'year'},'2009'),
												li({className:'year'},'2010'),
												li({className:'year'},'2011')										
											)

										)
									)
							),
							span({
									className:'icon icon-calendar',
									onClick: function(){
										_this.setState({viewCalendar: !_this.state.viewCalendar}) 
									}	
								},null),
							input({
									type:'text', className:'box',
									style: {
										border: _this.state.statusControl ? '1px solid #afafaf' : '1px solid #e3e3e3'
									},
									onBlur: function(){
										_this.state.largeStr > 1 ? _this.setState({statusControl: true}) : _this.setState({statusControl: false}) 
										
									},
									onFocus: function(){
										_this.setState({statusControl: true})
									},
									onChange: function(e){
										_this.setState({largeStr: e.target.value.length, text: e.target.value})
									}
								})
						)
				);
		}
	});
})();
