'use strict';

/**
 * @component   : Header
 * @Appname     : copilotjsApp
 * @description : Render the directive of header for all UX
 * @return      : renders.components.header
 */

(function() {
    renders.components = renders.components || {};

    function getState(store) {
        return {
            swipe: store.swipe,
            searchActive: false,
            openLogin: false,
        };
    };

    renders.components.header = React.createClass({
        displayName: 'header',
        getInitialState: function() {
            return getState(this.props.store);
        },
        _onChange: function() {
            if (this.isMounted()) {
                this.setState(getState(this.props.store));
            }
        },
        render: function() {
            var _this = this;
            return div({ className: 'header ' + this.props.deviceType },
                div({ className: 'logo' },
                    a({ href: '/' },
                        img({ className: 'nail', src: '/images/logo.png', sytle: { width: '30px' } }, null),
                        img({ className: 'tipo', src: '/images/logotipo.png' }, null)
                    )
                ),
                div({ className: _this.state.searchActive ? 'searchBox active' : 'searchBox' },
                    div({ className: 'search' },

                        input({
                            type: 'text',
                            id: 'textBox',
                            className: 'textBox',
                            placeholder: '¿camaraaaa haz un cambio che Oscar? ... ',
                            onFocus: function() {
                                _this.setState({ searchActive: true })
                                console.log('focus')
                            },
                            onBlur: function() {
                                _this.setState({ searchActive: false })
                                console.log('blur')
                            }
                        }, null),
                        React.createElement(renders.components.vicky, {}),
                        span({ className: 'icon icon-microphone' }, null),
                        span({ className: 'icon icon-search4' }, null)

                    )
                ),
                div({ className: 'cart' },
                    span({ className: 'icon icon-cart' }, null),
                    div({ className: 'num' },
                        span({ className: 'number' }, '99')
                    )
                ),
                div({ className: 'login' },
                    p({ className: 'ingresar' },
                        a({ href: '/ingresar' },
                            span({}, 'Ingresar')
                        ),
                        span({
                            className: 'icon icon-ellipsis',
                            onClick: function() {
                                _this.setState({ openLogin: !_this.state.openLogin })
                            }
                        }, null)

                    ),
                    div({
                            className: _this.state.openLogin ? 'globeLogin active' : 'globeLogin',
                            onMouseLeave: function() {
                                _this.setState({ openLogin: false })
                            }
                        },
                        div({ className: 'triangle back' }, null),
                        div({ className: 'triangle' }, null),
                        a({ href: '/ingresar' },
                            div({
                                    className: 'lineOption',
                                    onClick: function() {
                                        _this.setState({ openLogin: false })
                                    }
                                },
                                span({ className: 'icon icon-enter' }, null),
                                span({ className: 'text' }, 'Ingresar')
                            )
                        ),
                        a({ href: '/registro' },
                            div({
                                    className: 'lineOption',
                                    onClick: function() {
                                        _this.setState({ openLogin: false })
                                    }
                                },
                                span({ className: 'icon icon-user-plus' }, null),
                                span({ className: 'text' }, 'Registro')
                            )
                        ),

                        a({ href: '/mi-cuenta/informacion' },
                            div({
                                    className: 'lineOption',
                                    onClick: function() {
                                        _this.setState({ openLogin: false })
                                    }
                                },
                                span({ className: 'icon icon-user' }, null),
                                span({ className: 'text' }, 'Mi cuenta')
                            )
                        ),
                        div({
                                className: 'lineOption',
                                onClick: function() {
                                    _this.setState({ openLogin: false })

                                    FB.logout(function(response) {
                                        console.log(response)
                                        if (response.status === 'unknown') {
                                            alert("cerraste la sesion")
                                        }
                                    })

                                }
                            },
                            span({ className: 'icon icon-exit' }, ''),
                            span({ className: 'text' }, 'Cerrar sesión')

                        )
                    )
                )


            );
        }
    });
})();