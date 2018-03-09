'use strict';
/**
 * @View        : Across
 * @Appname     : Sam
 * @description : Render Sam Component
 * @return      : renders.Sam
 */
(function() {
    renders.components = renders.components || {};

    function getState(store) {
        return {
            dataFilter: '',
            activeProducts: false,
            finding: true,
            voice: '',
            listEvents: false,
        };
    };
    renders.components.vicky = React.createClass({
        SpeechRecognition: null,
        voice: true,
        position: 0,
        list: [],
        newList: [],
        renderEvents: '',
        getInitialState: function() {
            return getState(this.props.store);
        },
        componentDidMount: function() {
            this.initSecuence();
        },
        // componentWillMount() {
        //     if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        //         // Firefox 38+ seems having support of enumerateDevicesx
        //         navigator.enumerateDevices = function(callback) {
        //             navigator.mediaDevices.enumerateDevices().then(callback);
        //         };
        //     }

        //     var MediaDevices = [];
        //     var isHTTPs = location.protocol === 'https:';
        //     var canEnumerate = false;

        //     if (typeof MediaStreamTrack !== 'undefined' && 'getSources' in MediaStreamTrack) {
        //         canEnumerate = true;
        //     } else if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
        //         canEnumerate = true;
        //     }

        //     var hasMicrophone = false;
        //     var hasSpeakers = false;
        //     var hasWebcam = false;

        //     var isMicrophoneAlreadyCaptured = false;
        //     var isWebcamAlreadyCaptured = false;

        //     function checkDeviceSupport(callback) {
        //         if (!canEnumerate) {
        //             return;
        //         }

        //         if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
        //             navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
        //         }

        //         if (!navigator.enumerateDevices && navigator.enumerateDevices) {
        //             navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
        //         }

        //         if (!navigator.enumerateDevices) {
        //             if (callback) {
        //                 callback();
        //             }
        //             return;
        //         }

        //         MediaDevices = [];
        //         navigator.enumerateDevices(function(devices) {
        //             devices.forEach(function(_device) {
        //                 var device = {};
        //                 for (var d in _device) {
        //                     device[d] = _device[d];
        //                 }

        //                 if (device.kind === 'audio') {
        //                     device.kind = 'audioinput';
        //                 }

        //                 if (device.kind === 'video') {
        //                     device.kind = 'videoinput';
        //                 }

        //                 var skip;
        //                 MediaDevices.forEach(function(d) {
        //                     if (d.id === device.id && d.kind === device.kind) {
        //                         skip = true;
        //                     }
        //                 });

        //                 if (skip) {
        //                     return;
        //                 }

        //                 if (!device.deviceId) {
        //                     device.deviceId = device.id;
        //                 }

        //                 if (!device.id) {
        //                     device.id = device.deviceId;
        //                 }

        //                 if (!device.label) {
        //                     device.label = 'Please invoke getUserMedia once.';
        //                     if (!isHTTPs) {
        //                         device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.';
        //                     }
        //                 } else {
        //                     if (device.kind === 'videoinput' && !isWebcamAlreadyCaptured) {
        //                         isWebcamAlreadyCaptured = true;
        //                     }

        //                     if (device.kind === 'audioinput' && !isMicrophoneAlreadyCaptured) {
        //                         isMicrophoneAlreadyCaptured = true;
        //                     }
        //                 }

        //                 if (device.kind === 'audioinput') {
        //                     hasMicrophone = true;
        //                 }

        //                 if (device.kind === 'audiooutput') {
        //                     hasSpeakers = true;
        //                 }

        //                 if (device.kind === 'videoinput') {
        //                     hasWebcam = true;
        //                 }

        //                 // there is no 'videoouput' in the spec.

        //                 MediaDevices.push(device);
        //             });

        //             if (callback) {
        //                 callback();
        //             }
        //         });
        //     }

        //     // check for microphone/camera support!
        //     checkDeviceSupport(function() {
        //         document.write('hasWebCam: ', hasWebcam, '<br>');
        //         document.write('hasMicrophone: ', hasMicrophone, '<br>');
        //         document.write('isMicrophoneAlreadyCaptured: ', isMicrophoneAlreadyCaptured, '<br>');
        //         document.write('isWebcamAlreadyCaptured: ', isWebcamAlreadyCaptured, '<br>');
        //     });

        // },
        _onChange: function() {
            if (this.isMounted()) {
                this.setState(getState(this.props.store));
            }
        },
        cleanTEXT: function(text) {
            var _this = this;
            var type = '',
                cad = text.replace(/undefined/g, '').toLowerCase(),
                arrWords = cad.split(' '),
                finder = arrWords[1] + ' ' + arrWords[2] + ' ' + arrWords[3] + ' ' + arrWords[4] + ' ' + arrWords[5],
                trigger = arrWords[0].toString().toLowerCase();
            walmartVoice.trigger.map(function(val, key) {
                if (val.word.toLowerCase().indexOf(trigger) >= 0) {
                    _this.processSam(val.type.toLowerCase(), finder.replace(/undefined/g, ''), val.response)
                }
            })
        },

        processSam: function(trigger, finder, response) {
            var _this = this,
                textVOICE;
            if (trigger.toLowerCase() == 'saludo') {
                response.filter(function(val, key) {
                    if (val.name.toLowerCase().indexOf(finder.toLowerCase().trim()) >= 0) {
                        _this.speak(val.sentence);
                        return;
                    }
                })
            }
            if (trigger.toLowerCase() == "evento") {
                _this.speak("Muy bien!, cuéntame que tipo de evento");
                this.props.OnEvents();
                return;
            }

            if (trigger.toLowerCase() == "seleccion") {
                window.setTimeout(function() {
                    _this.speak("ok! esta es la lista perfecta para tu evento");
                    _this.props.selectEvent(finder)
                    return;
                }, 1000);
            }

            if (trigger.toLowerCase() == 'aceptacion') {
                _this.speak('Perfecto!, ahora dime, quieres "recoger en tienda" o "servicio a domicilio!"');
                _this.props.acceptOrder();
            }

            if (trigger.toLowerCase() == 'envio') {
                console.log("TRIGGER", finder)
                if (finder.trim().toLowerCase() == 'a domicilio') {
                    _this.speak('Excelente!, Te enviaremos tu pedido hasta tu domicilio"');
                }
                if (finder.trim().toLowerCase() == 'en tienda') {
                    _this.speak('Excelente!, tu pedido estara listo en 40 minutos');
                }

            }

            // if (trigger.toLowerCase() == 'codigopostal') {
            //     _this.speak(finder);
            //     _this.props.setCP(finder)
            // }
            // if (trigger.toLowerCase() == 'store') {
            //     //_this.props.selectedStore(finder);
            //     _this.speak("Excelente!, tu pedido sera entregado por la tienda" + finder);
            // }



            // if (trigger.toLowerCase() == 'search') {
            //     textVOICE = finder;
            //     _this.props.actions.sendQuery(textVOICE.replace(/-/g, ''));
            //     walmartVoice.config.options.active ? _this.speak("Buscando " + textVOICE) : null;
            //     return;
            // }
            // if (trigger.toLowerCase() == 'redirect') {
            //     response.filter(function(val, key) {
            //         if (val.word.indexOf(finder.toLowerCase().trim().replace(/a |al /g, '')) >= 0) {
            //             window.applyURL(val.url);
            //             walmartVoice.config.options.active ? _this.speak("Redirigiendo " + finder) : null;
            //             return;
            //         }
            //     })
            // }

            // if (trigger.toLowerCase() == 'explain') {
            //     response.filter(function(val, key) {
            //         if (val.word.indexOf(finder.toLowerCase().trim().replace(/a |al /g, '')) >= 0) {
            //             walmartVoice.config.options.active ? _this.speak(val.text) : null;
            //             return;
            //         }
            //     })
            // }
            // if (trigger.toLowerCase() == 'deactivate') {
            //     this.deactivate();
            //     _this.speak("¡Adios!")
            // }
            // if (trigger.toLowerCase() == 'activate') {
            //     this.activate();
            //     _this.speak("¡Hola, las respuestas de voz han sido activadas!")
            // }
        },
        deactivate: function() {
            walmartVoice.config.options.active = false
        },
        activate: function() {
            walmartVoice.config.options.active = true
        },
        initSecuence: function() {

            var _this = this;
            this.SpeechRecognition = this.SpeechRecognition || webkitSpeechRecognition
            this.recognition = new this.SpeechRecognition();
            this.recognition.lang = walmartVoice.config.options.mexico;
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
                        div({ className: 'circleminor' }, null),

                    )
                )
            );
        }
    });
})();