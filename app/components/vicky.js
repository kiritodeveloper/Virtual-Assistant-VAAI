'use strict';

/**
 * @View        : Home
 * @Appname     : vicky
 * @description : Render the home page
 * @return      : renders.home
 */
(function() {
    renders.components = renders.components || {};

    function getState(store) {
        return { dataFilter: '', activeProducts: false, finding: true, voice: '' };
    };
    renders.components.vicky = React.createClass({
        SpeechRecognition: null,
        voice: true,
        position: 0,
        list: [],
        newList: [],
        nums: ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce'],
        getInitialState: function() {
            return getState(this.props.store);
        },
        componentDidMount: function() {
            //this.props.store.addListener(this._onChange);
            this.initSecuence();
        },
        _onChange: function() {
            if (this.isMounted()) {
                this.setState(getState(this.props.store));
            }
        },
        searchService: function(word) {
            var _this = this;
            _this.setState({ finding: true });
            // $.ajax({
            //     url: '/scripts/staticFiles/catalog.js',
            //     dataType: 'json',
            //     type: 'get',
            //     success: function(data) {
            //         console.log("data: ", data)

            // if (data.docs !== undefined) {
            //     _this.setState({ activeProducts: true })
            //     _this.setState({ dataFilter: data.docs })
            //     if (_this.state.dataFilter.length >= 1) {
            //         _this.setState({ activeProducts: true })
            //     } else {
            //         _this.setState({ activeProducts: false })
            //         _this.speak("¿Que es algo?. " + 'No encuentro nada con la palabra algo');
            //     }
            // } else {
            //     _this.setState({ activeProducts: false })
            //     _this.speak("¿Que es algo?. " + 'No encuentro nada con la palabra algo');
            // }
            //     }
            // })

            $.ajax({
                url: "/scripts/staticFiles/catalog.js",
                dataType: "json",
                success: function(result) {
                    _this.list = result

                    $.map(_this.list, function(val, key) {
                        if (val.terms.trim() == word.trim()) {
                            _this.newList.push(val)
                        }
                    })
                    _this.list = _this.newList;
                    this.forceUpdate();
                    _this.getSearch();
                }
            });
        },
        getSearch: function() {
            var _this = this;
            console.log(_this.newList)
            return $.map(_this.newList, function(k, i) {
                return div({ className: 'list' }, k)
            })
        },
        selecProducts: function(string) {
            var _this = this;
            var sParsed = string.replace(', ', '').replace('y ', '')
            var arrNumbers = sParsed.split(' ')
            arrNumbers.splice(0, 1)
        },
        cleanTEXT: function(text) {
            var type = '',
                cad = text.replace(/undefined/g, '').toLowerCase(),
                arrWords = cad.split(' '),
                finder = arrWords[1] + ' ' + arrWords[2] + ' ' + arrWords[3] + ' ' + arrWords[4] + ' ' + arrWords[5],
                trigger = arrWords[0];

            if (trigger == "busca" || trigger == "necesito" || trigger == "quiero" || trigger == "encuentra" || trigger == "buscame" || trigger == "búscame") { type = "busca"; }
            if (trigger == "juega" || trigger == "cuéntame" || trigger == "hazme" || trigger == "comenta" || trigger == "dime" || trigger == "dimé" || trigger == "di") { type = "juega"; }
            if (trigger == "hola") { type = "saludo"; }
            if (trigger == "gracias" || trigger == "adios" || trigger == "bye" || trigger == "vete" || trigger == "chau" || trigger == "chao" || trigger == "by") { type = "adios"; }
            if (trigger == "ir" || trigger == "ve" || trigger == "ver") { type = "redirect" }


            this.processSam(type, finder.replace(/undefined/g, ''))
        },
        processSam: function(trigger, finder) {
            var _this = this,
                textVOICE;

            // **** Interaction Finder width GOOGLE CLOUD recognition OR WHATSON ****
            if (trigger == 'saludo') {
                _this.setState({ activeProducts: false, voice: true })
                if (finder.indexOf('siri') >= 0) {
                    textVOICE = '¡Hola!, pero yo no soy Siri, soy Vicky';
                    _this.speak(textVOICE);
                } else if (finder.indexOf('cortana') >= 0) {
                    textVOICE = '¡Hola!, Aun que estuvieramos en Windows no me gustaria ser ella';
                    _this.speak(textVOICE);
                } else if (finder.indexOf('jarvis') >= 0 || finder.indexOf('yarbis') >= 0) {
                    textVOICE = '¡Hola!, ¿Señor Stark?';
                    _this.speak(textVOICE);
                } else if (finder.indexOf('nombre') >= 0) {
                    textVOICE = '¡QUe tal Danae!, Ya deja trabajar a tu papi, tiene mucho que hacer';
                    _this.speak(textVOICE);
                } else {
                    textVOICE = '¡Que tal!, Soy Vicky. ... ¿En que te puedo ayudar?';
                    _this.speak(textVOICE);
                }
            }
            if (trigger == 'juega') {
                if (finder.indexOf('chiste') >= 1) {
                    textVOICE = ['¿El dinero o la vida?. Lo siento, soy programador. i?.  ... No tengo dinero ni vida.', '¿Que le dice un bit al otro?. Nos vemos en el bus', '¿Cuántos programadores hacen falta para cambiar una bombilla?. Ninguno. porque es un problema de hardware.', 'Sólo hay 10 tipos de personas en el mundo, las que entienden binario y las que no.'];
                    var selected = textVOICE[Math.floor((Math.random() * textVOICE.length - 1) + 1)];
                    _this.speak(selected);
                }
                if (finder.indexOf('broma') >= 1) {
                    textVOICE = '¡No me gusta bromear, se un poco mas serio por favor!';
                    _this.speak(textVOICE);
                }
                this.setState({ activeProducts: false });
            }
            if (trigger == 'busca') {
                _this.searchService(finder);
                textVOICE = finder;
                document.getElementById("textBox").value = textVOICE;
                _this.speak("Buscando " + textVOICE);
            }
            if (trigger == 'redirect') {
                if (finder.indexOf('registro') >= 1 || finder.indexOf('facturar') >= 1) { window.location.href = "/registro"; }
                if (finder.indexOf('login') >= 1 || finder.indexOf('facturar') >= 1) { window.location.href = "/ingresar"; }
                if (finder.indexOf('inicio') >= 1) { window.location.href = "/"; }
                if (finder.indexOf('mi cuenta') >= 1) { window.location.href = "/mi-cuenta/informacion"; }
            }
            if (trigger == 'adios') {
                _this.setState({ activeProducts: false, voice: false })
                _this.speak('Adios');
            }
        },
        initSecuence: function() {
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
                    if (event.results[i].isFinal) { this.wordding += event.results[i][0].transcript }

                }
            }
            this.recognition.onstart = function(event) {}
            this.recognition.onerror = function(event) {}
            this.recognition.onend = function(event) {

                if (this.wordding != undefined) { _this.cleanTEXT(this.wordding) }
                //Inicia voz
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
            return div({ className: 'appSam' },
                div({ className: _this.state.voice ? 'voiceOver active' : 'voiceOver' },
                    div({ className: 'circles' },
                        div({ className: 'circleMajor' }, null),
                        div({ className: 'circlemiddle' }, null),
                        div({ className: 'circleminor' }, null)
                    )
                ),
                div({ className: _this.state.win ? 'win active' : 'win' },
                    _this.state.newList ? this.getSearch() : null
                )
            );
        }
    });
})();