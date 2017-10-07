'use strict';

/**
 * @View        : Mi cuenta - Informacion
 * @Appname     : copilotjsApp
 * @description : Render the home page
 * @return      : renders.home
 */

(function() {
    renders.views.micuenta = renders.views.micuenta || {};

    function getState(store) {
        return {
            lista: ''
        };
    };

    renders.views.micuenta.informacion = React.createClass({
        list: '',
        getInitialState: function() {
            return getState(this.props.store);
        },
        componentDidMount: function() {
            this.props.store.addListener(this._onChange);
            document.getElementById("files").addEventListener('change', this.archivo, false);
        },
        _onChange: function() {
            if (this.isMounted()) {
                this.setState(getState(this.props.store));
            }
        },
        archivo: function(evt) {
            var _this = this;
            var files = evt.target.files; // filelist object
            for (var i = 0, f; f = files[i]; i++) {
                if (!f.type.match('image.*')) {
                    continue;
                }
                var reader = new FileReader();
                reader.onload = (function(theFile) {
                    return function(e) {
                        _this.setState({ lista: e.target.result })
                        document.getElementById('list').innerHTML = ['<img class="thumb" src="' + e.target.result + '" title="" />'];
                    };
                })(f);
                reader.readAsDataURL(f);
            }
            this.paintBlob();
        },
        paintBlob: function() {
            console.log(this.state.lista);
        },
        render: function() {
            var _this = this;
            var agent = _this.props.agent;
            var deviceType = _this.props.deviceType;
            return div({ className: 'micuenta' },
                div({ className: 'menumicuenta' },
                    React.createElement(renders.components.menucuenta, { props: this.props })
                ),
                div({ className: 'contenmicuenta' },
                    div({ className: 'content' },
                        div({ className: 'title' },
                            'Informacion de mi cuenta'
                        ),
                        div({ className: 'labelsContent' },
                            span({ className: 'label' }, 'usuario  |'),
                            a({ className: 'link', href: '/mi-cuenta/edicion' }, 'Editar')
                        ),
                        div({ className: 'controlContent' },
                            React.createElement(renders.components.textbox, { size: 'middle', placeholder: 'nombre', type: 'text' }),
                            React.createElement(renders.components.textbox, { size: 'middle', placeholder: 'Correo electrónico', type: 'mail' }),
                            React.createElement(renders.components.calendar, { size: 'middle', placeholder: 'Fecha de nacimiento', type: 'calendar' }),
                            React.createElement(renders.components.calendar, { size: 'middle', placeholder: 'Fecha de nacimiento', type: 'calendar' }),
                            div({ className: 'choose' },
                                input({ type: 'file', id: 'files' }),
                                div({ className: 'data' },
                                    div({ className: 'image' },
                                        div({ className: 'containerImg', id: 'list' })
                                    ),
                                    div({ className: 'loader' }, _this.list)
                                )
                            )
                        )

                    )

                )
            )


        }
    });
})();