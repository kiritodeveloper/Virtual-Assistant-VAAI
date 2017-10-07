'use strict';

/**
 * @component   : Card
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

	renders.components.card = React.createClass({
		displayName: 'cardImage',
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
			var data = this.props.val;

			console.log(this.props.data.photo);

			return  div({className:'willCard', key: _this.props.id},
						div({ className:'card'},
						div({className:'backCard1'},''),
						div({className:'backCard2'},''),
						div({className:'backCard3'},''),
						div({className:'mainCard'},
							div({className:'image'},
								img({src:this.props.data.photo})
							),
							span({className:'icono icon-bookmark'},''),
							span({className:'icono icon-star-full'},''),
							div({className:'nameCard'},this.props.data.title),
							div({className:'controls'},
								div({className:'izq'},
									span({className:'icono icon-cloud-check'},null),
									span({className:'text'},'20')
								),
								div({className:'der'},
									span({className:'icono icon-heart'},null),
									span({className:'text'},'20')
								)
							)
						)
					)
				)
					
		}
	});
})();
