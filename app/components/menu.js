'use strict';

/**
 * @component   : Menu
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
	renders.components = renders.components || {};

	function getState(store) {
		return {
        taxonomy: []
		};
	};

	renders.components.menu = React.createClass({
		displayName: 'menu',
		getInitialState: function() {
			return getState(this.props.store);
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
    componentWillMount: function(){
          this.getData();
    },
    getData: function(){
        var _this = this;
        $.ajax({
          url:'/scripts/staticFiles/taxonomy.js',
          method: 'GET',
          dataType: 'JSON',
          success(data){
              _this.setState({taxonomy: data})
          }
        })
    },
    buildMenu: function(){
      var _this = this;
      return $.map(_this.state.taxonomy, function(val, key){
          return div({className:'optMenu', key: key},
            		span({className:'category'}, val.category),
            		span({ className:'arrow icon-circle-right'},null),
						div({className:'subcats'},
							div({className:'image'},
								div({className:'text'}, '"' + val.descripcion + '"'),
								div({className:'enlace'},
									a({href:val.url,className:'link'},
										span({className:'title'},'Ver más'),
										span({className:'icon icon-fast-forward'},null)
									)
								),
								img({className:'img', src:'/images/'+val.scaparatePict},null)
							)
						)
          		)
      })
    },
    componentDidMount: function(){

    },
		render: function(){
			return div({
				className: 'menu'},
            div({className:'trigger'},
              span({className:'title'},'Categorías'),
              span({className:'triangle icon-circle-right'},null),
			  div({className:'categoryContainer'},
                this.buildMenu()
              )
            )

        );
		}
	});
})();
