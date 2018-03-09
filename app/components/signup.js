'use strict';

/**
 * @component   : signup
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

	renders.components.signup = React.createClass({
		displayName: 'ctrlSignup',
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
			var regex = '';
			var validate = false;
			if(_this.props.size === 'short'){
				_this.size = '25%'
			}else if(_this.props.size === 'middle'){
				_this.size = '50%'
			}else if(_this.props.size === 'full'){
				_this.size = '100%'
			}

			if(_this.props.type === 'text'){
				regex = '/\w+@\w\.com/';
			}else if(_this.props.type === 'mail'){
				regex = '/w+/';
			}

			var data = this.state.text;
			validate = data.match(regex);



			return div({ 
							className: 'textSignup',
							style: {
								'width': _this.size
							}
						}, 
						div({className:'borderStatus'},
							div({
									className:'borderColor',
									style: {
										bottom: (_this.state.statusControl) ? '30px' : '0',
										fontSize: _this.state.statusControl ? '12px' : '16px',
										backgroundColor: _this.state.statusControl ? 'transparent' : 'white',
										color: _this.state.statusControl ? 'white' : 'gray'
									}
								}, this.props.placeholder),
							div({className:'button'},
								span({className:'icon-mail5'},null)
							),
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
