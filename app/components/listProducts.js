'use strict';
/**
 * @Render Hero
 * @name Hero
 * @description
 * # Hero
 */
(function() {
    renders.components = renders.components || {};

    renders.components.listProducts = React.createClass({
        displayName: 'listProducts',
        buildProducts: function() {

            var options = $.map(this.props.state.selectedProducts, function(val, key) {
                return div({ className: 'option' },
                    span({ className: 'image' }, null),
                    span({ className: 'name' }, val.name),
                    span({ className: 'precio' }, val.precio),
                    div({ className: 'btnDelete' },
                        span({ className: 'icon close' }, null)
                    )
                )
            })

            return div({ className: 'listProducts' },
                h1({ className: 'title' }, 'Lista de productos'), options, h1({ className: 'accept' }, 'Di "Acepto" para generar tu pedido')
            )
        },
        render: function() {
            return this.props.state.showProducts ? this.buildProducts() : null
        }
    });
})();