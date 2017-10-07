"use strict";
var brands = React.createClass({
    brandsData: [],
	getInitialState: function() {
		return {
			position: 0,
			props: this.props
		};
	},

  getData: function(){
      var _this = this;
      $.ajax({
        url:'/scripts/staticFiles/homeData.js',
        method: 'GET',
        dataType: 'JSON',
        success(data){
            _this.brandsData = data[0].brands;
            _this.forceUpdate();
        }
      })
  },
	componentWillMount: function(){
        this.getData();
	},


	getbrands: function() {
        var _this = this;
        return div({className:'containerBrands'},
            $.map(_this.brandsData, function(val, key){
                return div({
                            className:'brand', key:key
                        },
                            div({
                                    className:'image',
                                    style:{
                                        'backgroundColor':'#1d1d1d'
                                    }
                                },
                                img({className:'logo', src:val.image},null),
                                div({className:'links'},
                                    $.map(val.dataCard, function(subVal, subKey){
                                        return div({
                                                    className:'link',
                                                    key: key + subKey,
                                                    style: {
                                                            'backgroundColor': val.backColor
                                                        }
                                                },
                                            a({className:'l', href:subVal.link},
                                                span({className:'text'},
                                                    subVal.title
                                                )
                                            )
                                        )
                                    })
                                )
                            ),


                        )
            })
        )
	},

	render: function() {

			var _this = this;

			return div({className:'container'},
						div({
								className:'brandsContainer',

							},
						    this.getbrands()
						)
			)
	}
});
