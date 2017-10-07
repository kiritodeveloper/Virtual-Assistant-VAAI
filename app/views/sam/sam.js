'use strict';

/**
 * @View        : Home
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */
(function() {
	renders.views = renders.views || {};
	function getState(store) {
		return { swipe: store.swipe, dataFilter: '', activeProducts: false, finding: false, voice: '' };
	};
	renders.views.sam = React.createClass({
		SpeechRecognition: null,
		voice: false,
		position: 0,
		nums: [ 'uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce'],
		getInitialState: function() {
			return getState(this.props.store);
		},
		componentDidMount: function() {
			this.props.store.addListener(this._onChange);
			this.initSecuence();
		},
		_onChange: function() {
			if (this.isMounted()) {
				this.setState(getState(this.props.store));
			}
		},
		searchService: function(word){
			var _this = this;
			_this.setState({finding: true});
			$.ajax({
				url:'https://www.walmart.com.mx/WebControls/hlSearchSolr.ashx?search='+word+'%20AND%20price%3D[0%20TO%20100000]&start=0&rows=25&facet=true&ffield=price',
				dataType: 'json',
				type: 'get',
				success: function(data){
					console.log(data.docs)
					if(data.docs !== undefined){
						_this.setState({activeProducts: true})
						_this.setState({dataFilter: data.docs})
						if(_this.state.dataFilter.length >= 1){
							_this.setState({activeProducts: true})

						}else{
							_this.setState({activeProducts: false})
							document.getElementById("textSam").innerHTML = 'No encuentro nada con la palabra(s) '+ word.trim();
							_this.speak("¿Que es algo?. " + 'No encuentro nada con la palabra algo');
						}
					}else{
						_this.setState({activeProducts: false})
						document.getElementById("textSam").innerHTML = 'No encuentro nada con la palabra(s) '+ word.trim();
						_this.speak("¿Que es algo?. " + 'No encuentro nada con la palabra algo');
					}
				}
			})
		},
		move: function(direction){
			var _this = this;
			if(direction === 'mas'){ this.position++;
			}else{ --this.position; }
			if(this.position >= _this.state.dataFilter.length -3){ this.position = 0 + 3; }
			if(this.position < 0){ this.position = _this.state.dataFilter.length ; }
			this.forceUpdate();
		},
		selecProducts: function(string){
			var _this = this;
			var sParsed = string.replace(', ','').replace('y ','')
			var arrNumbers = sParsed.split(' ')
			arrNumbers.splice(0,1)
		},
		renderData: function(){
			var _this = this;
			if(_this.state.dataFilter !== '' && _this.state.dataFilter !== undefined){
					setTimeout(function(){ _this.setState({finding: false});  }, 3000);
					return div({
									className:'listProduct',
									style: {
										width: _this.state.dataFilter.length * 220 + 'px',
										left: - this.position * 220 + 'px'
									}
							},
							$.map(_this.state.dataFilter, function(x, y){
								return div({className:'products', key: y},
											div({className:'product'},
												div({className:'position'},
													span({className:'number'},y)
												),
												div({className:'image'},
													img({src: 'https://www.walmart.com.mx/images/products/img_medium/'+x.upc+'m.jpg' },null)
												),
												div({className:'name'},x.n),
												div({className:'pricem'},
													span({className:'sign'},'$'),
													span({className:'price'}, x.p)
												)
											)
										)
							})
						)
			}
		},
		cleanTEXT: function(text){
			var type = '',
			 		cad = text.replace(/undefined/g , '').toLowerCase(),
					arrWords = cad.split(' '),
			 		finder = arrWords[1] + ' ' + arrWords[2] + ' ' + arrWords[3] + ' ' + arrWords[4] + ' ' + arrWords[5],
			 		trigger = arrWords[0];

			if(trigger == "busca" || trigger == "necesito" || trigger == "quiero" || trigger == "encuentra" || trigger == "buscame" || trigger == "búscame"){ type = "busca"; }
			if(trigger == "juega" || trigger == "cuéntame" || trigger == "hazme" || trigger == "comenta" || trigger == "dime" ||  trigger == "dimé" || trigger == "di") { type = "juega"; }
			if(trigger == "hola"){ type = "saludo"; }
			if(trigger == "gracias" || trigger == "adios" || trigger == "bye" || trigger == "vete" || trigger == "chau" || trigger == "chao" || trigger == "by"){ type = "adios"; }
			if(trigger == "ir" || trigger == "ve" || trigger == "ver"  ){ type = "redirect" }
			this.processSam(type, finder.replace(/undefined/g , ''))
		},
		processSam: function(trigger, finder){
			var _this = this, textVOICE;
			// **** Interaction Finder width GOOGLE CLOUD recognition OR WHATSON ****
			if(trigger == 'saludo'){
							_this.setState({activeProducts: false, voice: true})
						if( finder.indexOf('siri') >= 0){
							textVOICE = '¡Hola!, pero yo no soy Siri, soy Sam';
							document.getElementById("textSam").innerHTML = textVOICE;
							_this.speak(textVOICE);
						}else if(finder.indexOf('cortana') >= 0 ){
							textVOICE = '¡Hola!, Aun que estuvieramos en Windows no me gustaria ser ella';
							document.getElementById("textSam").innerHTML = textVOICE;
							_this.speak(textVOICE);
						}else if(finder.indexOf('jarvis') >= 0 || finder.indexOf('yarbis') >= 0 ){
							textVOICE = '¡Hola!, ¿Señor Stark?';
							document.getElementById("textSam").innerHTML = textVOICE;
							_this.speak(textVOICE);
						}else if(finder.indexOf('nombre') >= 0 ){
							textVOICE = '¡QUe tal Danae!, Ya deja trabajar a tu papi, tiene mucho que hacer';
							document.getElementById("textSam").innerHTML = textVOICE;
							_this.speak(textVOICE);
						}else{
							textVOICE = '¡Que tal!, ¿En que te puedo ayudar?';
							document.getElementById("textSam").innerHTML = textVOICE;
							_this.speak(textVOICE);
						}
			}
			if(trigger == 'juega'){
					if(finder.indexOf('chiste') >= 1){
						textVOICE = ['¿El dinero o la vida?. Lo siento, soy programador. i?.  ... No tengo dinero ni vida.','¿Que le dice un bit al otro?. Nos vemos en el bus','¿Cuántos programadores hacen falta para cambiar una bombilla?. Ninguno. porque es un problema de hardware.','Sólo hay 10 tipos de personas en el mundo, las que entienden binario y las que no.'];
						var selected = textVOICE[Math.floor((Math.random() * textVOICE.length-1) + 1)];
						document.getElementById("textSam").innerHTML = selected;
						_this.speak(selected);
					}
					if(finder.indexOf('broma') >= 1){
						textVOICE = '¡No me gusta bromear, se un poco mas serio por favor!';
						document.getElementById("textSam").innerHTML = textVOICE;
						_this.speak(textVOICE);
					}
					this.setState({activeProducts: false}); return;
			}
			if(trigger == 'busca'){
				_this.searchService(finder);
				textVOICE = finder;
				document.getElementById("textSam").innerHTML = "Buscando " + textVOICE;
				_this.speak("Buscando " + textVOICE);
			}
			if(trigger == 'redirect'){
				if(finder.indexOf('facturación') >= 1 || finder.indexOf('facturar') >= 1){ window.location.href = "https://facturacion.walmartmexico.com.mx/"; }
				if(finder.indexOf('súper') >= 1 ){ window.location.href = "https://super.walmart.com.mx/"; }
				if(finder.indexOf('tecnología') >= 1 ){ window.location.href = "https://walmart.com.mx/inicio"; }
				if(finder.indexOf('promociones') >= 1 ){ window.location.href = "https://super.walmart.com.mx/promotion/promotionLandingPage.jsp"; }
				if(finder.indexOf('registro') >= 1 ){ window.location.href = "https://super.walmart.com.mx/myaccount/login.jsp?fromLink=register"; }
				if(finder.indexOf('mis listas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/myaccount/login.jsp?myAccount=myList"; }
				if(finder.indexOf('despensa') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Despensa/cat120005?storeId=0000009999"; }
				if(finder.indexOf('lacteos') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Lacteos/cat120006?storeId=0000009999"; }
				if(finder.indexOf('frutas y verduras') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Frutas-y-Verduras/cat120007?storeId=0000009999"; }
				if(finder.indexOf('frutas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Frutas-y-Verduras/cat120007?storeId=0000009999"; }
				if(finder.indexOf('verduras') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Frutas-y-Verduras/cat120007?storeId=0000009999"; }
				if(finder.indexOf('carnes y pescados') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Carnes-y-Pescados/cat120008?storeId=0000009999"; }
				if(finder.indexOf('carnes') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Carnes-y-Pescados/cat120008?storeId=0000009999"; }
				if(finder.indexOf('pescados') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Carnes-y-Pescados/cat120008?storeId=0000009999"; }
				if(finder.indexOf('salchichonería') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Salchichoneria/cat120009?storeId=0000009999"; }
				if(finder.indexOf('panadería') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Panaderia-y-Tortilleria/cat120010?storeId=0000009999"; }
				if(finder.indexOf('tortillería') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Panaderia-y-Tortilleria/cat120010?storeId=0000009999"; }
				if(finder.indexOf('jugos') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Jugos-y-Bebidas/cat120011?storeId=0000009999"; }
				if(finder.indexOf('bebidas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Jugos-y-Bebidas/cat120011?storeId=0000009999"; }
				if(finder.indexOf('vinos y licores') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Cerveza-Vinos-y-Licores/cat940184?storeId=0000009999"; }
				if(finder.indexOf('cerveza') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Cerveza-Vinos-y-Licores/cat940184?storeId=0000009999"; }
				if(finder.indexOf('licores') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Cerveza-Vinos-y-Licores/cat940184?storeId=0000009999"; }
				if(finder.indexOf('vinos') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Cerveza-Vinos-y-Licores/cat940184?storeId=0000009999"; }
				if(finder.indexOf('congelados') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Congelados/cat120013?storeId=0000009999"; }
				if(finder.indexOf('limpieza') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Limpieza-y-Mascotas/cat120014?storeId=0000009999"; }
				if(finder.indexOf('mascotas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Limpieza-y-Mascotas/cat120014?storeId=0000009999"; }
				if(finder.indexOf('bebés') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Bebes/cat120015?storeId=0000009999"; }
				if(finder.indexOf('farmacia') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Farmacia/cat120016?storeId=0000009999"; }
				if(finder.indexOf('Higiene y Belleza') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Higiene-y-Belleza/cat120017?storeId=0000009999"; }
				if(finder.indexOf('Higiene') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Higiene-y-Belleza/cat120017?storeId=0000009999"; }
				if(finder.indexOf('Belleza') >= 1 ){ window.location.href = "https://super.walmart.com.mx/Higiene-y-Belleza/cat120017?storeId=0000009999"; }
				if(finder.indexOf('directorio') >= 1 ){ window.location.href = "https://super.walmart.com.mx/storelocator/storeLocator.jsp"; }
				if(finder.indexOf('tiendas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/storelocator/storeLocator.jsp"; }
				if(finder.indexOf('formas de pago') >= 1 ){ window.location.href = "https://super.walmart.com.mx/common/paymentOptions.jsp"; }
				if(finder.indexOf('formas') >= 1 ){ window.location.href = "https://super.walmart.com.mx/common/paymentOptions.jsp"; }
				if(finder.indexOf('pago') >= 1 ){ window.location.href = "https://super.walmart.com.mx/common/paymentOptions.jsp"; }
			}
			if(trigger == 'adios'){
				_this.setState({activeProducts: false, voice: false})
				_this.speak('Adios');
			}
		},
		initSecuence: function(){
			var _this = this;
			this.SpeechRecognition = this.SpeechRecognition || webkitSpeechRecognition
			this.recognition = new this.SpeechRecognition();
			this.recognition.lang = "es-MX";
			this.recognition.continuous = false;
			this.recognition.interimResults = true;
			this.recognition.start();
			this.recognition.onresult = function(event) {
			var wordding = '';
			  for (var i = event.resultIndex; i < event.results.length; i++) {
			    if(event.results[i].isFinal){ this.wordding += event.results[i][0].transcript }
				}
			}
			this.recognition.onstart = function(event) { }
			this.recognition.onerror = function(event) { }
			this.recognition.onend = function(event) {
				if(this.wordding != undefined){ _this.cleanTEXT(this.wordding) }
				_this.initSecuence();
			}
		},
		speak: function(text) {
			var _this = this;
			var msg = new SpeechSynthesisUtterance();
			msg.text = text;
			msg.volume = parseFloat(1);
			msg.rate = parseFloat(0.8);
			msg.pitch = parseFloat(1);
			var voice = 'Google español de México';
			if (voice) { msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voice; })[0]; }
			window.speechSynthesis.speak(msg);
		},
		render: function() {
			var _this = this;
			var agent = _this.props.agent;
			var deviceType = _this.props.deviceType;
			return div({ className: 'appSam'  },
								div({className: _this.state.voice ? 'voiceOver active' : 'voiceOver'},
									div({className:'circles'},
										div({className:'circleMajor'},null),
										div({className:'circlemiddle'},null),
										div({className:'circleminor'},
											svg({	className: _this.state.finding === true ? 'points finder': 'points',
													height:'75', width: '75',
													style:{ border: '0px solid white' }
												},
												circle({cx:'20', cy:'29', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null),
												circle({cx:'36', cy:'20', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null),
												circle({cx:'53', cy:'29', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null),
												circle({cx:'20', cy:'47', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null),
												circle({cx:'36', cy:'56', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null),
												circle({cx:'53', cy:'47', r:'5', stroke:'#fdbb2b', strokeWidth:'1', fill:'#fdbb2b' },null)
											)
										)
									),
									div({className:'tu', id:'tu'},
										null
									),
									div({className:'textSam', id:'textSam'}, '¡Hola!, ¿En que te puedo ayudar?'),
									div({className: _this.state.activeProducts ? 'productContainer active' : 'productContainer' },
										div({className: _this.state.activeProducts ? 'shadowGlow true' : 'shadowGlow error'},null
									),
										_this.renderData(),
										div({className:'moonMiddle left', onClick: function(){ _this.move('menos')}}, null),
										div({className:'moonMiddle right', onClick: function(){ _this.move('mas')}}, null)
									)
								)
						);
		}
	});
})();
