"use strict";
var sliderR = React.createClass({
	position: 0,
	slidesData : [],
	getInitialState: function() {
		return {
			position: 0,
			x: 0,
			y: 0,
			status: false,
      detected: false,
			delta: 50,
			preventDefaultEvent: false,
			direction: null,
			viewHoverMove: true,
			props: this.props
		};
	},
	parseBool: function(string){
		if(string === 'false'){
			return false;
		}else{
			return true;
		}
	},
  getData: function(){
      var _this = this;
      $.ajax({
        url:'/scripts/staticFiles/homeData.js',
        method: 'GET',
        dataType: 'JSON',
        success(data){
            _this.slidesData = data[0].slider;
            _this.forceUpdate();
        }
      })
  },
	componentWillMount: function(){
    this.getData();

	},
	componentDidMount: function() {
		var _this = this;

		this.interval = setInterval(function(){
			_this.move('>');
		}, 8000);

		if(localStorage.menuToolTipBool !== 'false'){
			localStorage.setItem('menuToolTip', 1);
		}
			localStorage.setItem('menuToolTipBool', false);
	},
	bullets: function() {
		var _this = this;
			return $.map(this.slidesData, function(val, key){
				return span({
							className: _this.position === key ? 'bullet active' : 'bullet',
							key: key,
							onClick: _this.move.bind(_this, key)
						})
			})
	},
	_touchStart: function(e){
		if(this.props.preventDefaultEvent && this.props.preventDefaultEvent!=this.state.preventDefaultEvent) this.setState({preventDefaultEvent: this.props.preventDefaultEvent});
	   	if(this.props.delta && this.props.delta!=this.state.delta) this.setState({delta: this.props.delta});
		this.setState({
		   x: Math.abs(e.touches[0].pageX).toFixed(2),
		   y: Math.abs(e.touches[0].pageY).toFixed(2),
		   status: true,
		   detected: false
	   });
	},
	_touchMove: function(e){
		if(e.touches.length > 1){
			return
		}
		var x = (e.touches[0].pageX).toFixed(2);
        var y = (e.touches[0].pageY).toFixed(2);
        var tX = (x - this.state.x).toFixed(2);
        var tY = (y - this.state.y).toFixed(2);

		if(Math.abs(tX)>=this.state.delta){
		   if(tX>50){
			   this.setState({direction: 'right'})
		   }
		   else if(tX<(-this.state.delta)){
				this.setState({direction: 'left'})
		   }
	   }
	},
	_touchEnd: function(e){
		this.setState({
            x: 0,
            y: 0,
            status: false,
            detected: false
        });
		if(this.state.direction === 'left') this.move('>')
		if(this.state.direction === 'right') this.move('<')
		if(this.state.preventDefaultEvent) e.preventDefault();
	},
	startInterval() {
		var _this = this;
		this.interval = setInterval(function(){
			_this.move('>');
		}, 8000);
	},
	stop() {
		clearInterval(this.interval);
	},
	getSlides: function() {
		var _this = this;
		if(_this.slidesData !== undefined){
			var imagen = ''
			return $.map(_this.slidesData, function(val, key){
				if(_this.props.props.deviceType === 'desktop'){
					imagen = img({src: val.imageD, key: key, 'data-info': _this.props.name + '-' + _this.props.index},null)
				}
				if(_this.props.classes === 'tablet' ){
					imagen = img({src: val.imageT, key: key, 'data-info': _this.props.name + '-' + _this.props.index},null)
				}
				if(_this.props.classes === 'phone'){
					imagen = img({src: val.imageM, key: key, 'data-info': _this.props.name + '-' + _this.props.index},null)
				}

				return div({
							className: 'slide s',
							onClick: function(){
								var seoOpt1 = val.seo1.split("|");
								callToGa(seoOpt1[0],seoOpt1[1],seoOpt1[2]);
								var seoOpt2 = val.seo2.split("|");
								callToGa(seoOpt2[0],seoOpt2[1],seoOpt2[2]);
								location.href= val.url
							},
							key: key,
							style: { width: 100 / _this.slidesData.length + '%' }
						},
							div({
									className:'back left',
									style:{ backgroundColor: val.bcLeft }
								},null),
							div({
									className:'back right',
									style:{ backgroundColor: val.bcRight }
								},null),
							imagen,
							a({className:'sLink1', href:val.url1},null),
							a({className:'sLink2', href:val.url2},null)

						)
			})
		}

	},
	move: function(direction){
		if(direction === '<'){
			this.position = this.position - 1;
		}else if(direction === '>'){
			this.position = this.position + 1;
		}else{
			this.position = direction;
		}
		if(this.position < 0){
			this.position = this.slidesData.length -1;
		}else if(this.position > this.slidesData.length - 1){
			this.position = 0;
		}
		this.setState({position: this.position})
	},
	render: function() {
			var _this = this;
			var bullets = this.bullets();
			var slides  = this.getSlides();

			return div({className:'container'},
						div({
								className:'slider',
								onMouseEnter: function(){ _this.stop() },
								onMouseLeave: function(){ _this.startInterval() },
								onTouchMove: function(e){
									_this._touchMove(e);
								},
								onTouchStart: function(e){
									_this.stop()
									_this._touchStart(e);
								},
								onTouchEnd: function(e){
									_this._touchEnd(e);
								}
							},
							div({
									className:'arrows',
									styles: {
										display: _this.props.userAgent ? 'none' : 'block'
									},
								}
							),
							div({
									className:'arrow left',
									onClick: this.move.bind(this, '<')
								},
								span({className:'icon icon-rewind'},null)
							),
							div({
									className:'arrow right',
									onClick: this.move.bind(this, '>')
								},
								span({className:'icon icon-fast-forward'},null)
							),
							div({
                    className:'bullets',
                    style:{
                        'marginLeft': - (slides.length * 19) / 2 + 'px'
                    }
                  }, bullets ),

							div({ className:'sliderWrap',
								  style: {
											width: slides.length * 100 + '%',
											left: - (this.state.position * (slides.length * 100)) /  slides.length + '%'
										}
							}, slides)
						),
						div({className: (_this.state.hoverTTMove && _this.parseBool(localStorage.viewHoverMove)) ? 'toolTipBlue move active' : 'toolTipBlue move'},
							div({className:'triangleInf'},null),
							div({className:'triangle'},null),
							div({className:'icon'},
								div({className:'t up'},null),
								div({className:'t left'},null),
								div({className:'t right'},null),
								div({className:'t down'},null)
							)
						)
			)
	}
});
