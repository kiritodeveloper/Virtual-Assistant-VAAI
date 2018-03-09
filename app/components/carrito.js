'use strict';
/**
 * @Render del Home
 * @name WalmartApp
 * @description
 * # Home Main
 */
(function() {
    renders.carrito = renders.carrito || {};

    function getState() {
        return {
            listEvents: false,
            selectedEvent: '',
            events: ['carne asada', 'boda', 'superbowl', 'amigos'],
            showProducts: false,
            selectedProducts: [],
            accept: false,
            cp: 0,
            storeForCP: [],
            products: [{
                    "match": "carne asada",
                    "ID": "01",
                    "products": [{
                            "id": "01",
                            "name": "Bistek para asar",
                            "precio": "$120.00"
                        },
                        {
                            "id": "02",
                            "name": "Cebolla",
                            "precio": "$20.00"
                        },
                        {
                            "id": "03",
                            "name": "Chiles Abaneros",
                            "precio": "$45.00"
                        },
                        {
                            "id": "04",
                            "name": "Lechugas",
                            "precio": "$10.00"
                        },
                        {
                            "id": "05",
                            "name": "Sarten",
                            "precio": "$450.00"
                        },
                        {
                            "id": "06",
                            "name": "Aceite",
                            "precio": "$39.00"
                        }

                    ]
                },
                {
                    "match": "boda",
                    "ID": "02",
                    "products": [{
                            "id": "02",
                            "name": "Refresco",
                            "precio": "$190.00"
                        },
                        {
                            "id": "03",
                            "name": "Platos",
                            "precio": "$450.00"
                        },
                        {
                            "id": "04",
                            "name": "Cubiertos",
                            "precio": "$100.00"
                        }

                    ]
                },
                {
                    "match": "Parrillada",
                    "ID": "04",
                    "products": [{
                            "id": "01",
                            "name": "Chicharrones",
                            "precio": "$60.00"
                        },
                        {
                            "id": "02",
                            "name": "Chocolates",
                            "precio": "$95.00"
                        },
                        {
                            "id": "03",
                            "name": "cerveza victoria",
                            "precio": "$1000.00"
                        },
                        {
                            "id": "04",
                            "name": "Tequila Jimador",
                            "precio": "$700.00"
                        }

                    ]
                }
            ]
        };
    };
    renders.carrito.main = React.createClass({

        getInitialState: function() {
            return getState();
        },
        componentDidMount: function() {
            // this.props.store.addListener(this._onChange);
        },
        _onChange: function() {
            // if (this.isMounted()) {
            //     this.setState(getState(this.props.store));
            // }
        },

        //EVENTS FUNCTIONS
        ONchangeToggleEvents: function() {
            this.setState({ listEvents: true })
        },
        OFFchangeToggleEvents: function() {
            this.setState({ listEvents: false })
        },
        selectEvent(event) {
            var _this = this;
            $.map(this.state.products, function(val, key) {
                if (event.indexOf(val.match.toLowerCase()) >= 0) {
                    _this.setState({ showProducts: true, selectedProducts: val.products, selectedEvent: event });
                    return;
                }
            })
        },

        //FUNCTIONS ACEPTACION Y TIENDAS
        setAccepOrder: function() {
            this.setState({ showProducts: false, listEvents: false, accept: true });
        },
        setCP: function(cp) {
            this.setState({ cp: cp });
        },
        setStoresByCP: function(stores) {
            this.setState({ storeForCP: stores })
        },

        render: function() {
            return div({
                    id: 'samAgent',
                    className: 'samAgent'
                },
                React.createElement(renders.components.vicky, {
                    state: this.state,
                    OnEvents: this.ONchangeToggleEvents,
                    selectEvent: this.selectEvent,
                    acceptOrder: this.setAccepOrder,
                    setCP: this.setCP
                }),
                React.createElement(renders.components.listEvents, {
                    state: this.state
                }),
                React.createElement(renders.components.listProducts, {
                    state: this.state
                }),
                React.createElement(renders.components.listStores, {
                    state: this.state,
                    setStoresByCP: this.setStoresByCP
                })
            );
        }
    });
})();