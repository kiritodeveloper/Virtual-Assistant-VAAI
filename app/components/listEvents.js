'use strict';
/**
 * @Render Hero
 * @name Hero
 * @description
 * # Hero
 */
(function() {
    renders.components = renders.components || {};



    renders.components.listEvents = React.createClass({
        displayName: 'listEvents',
        listEvents: [
            { "idEvent": "1", "event": "Carne Asada" },
            { "idEvent": "2", "event": "Boda" },
            //{ "idEvent": "4", "event": "SuperBowl" },
            { "idEvent": "5", "event": "Parrillada" }
        ],
        buildEvents: function() {
            var _this = this;
            var options = $.map(this.listEvents, function(val, key) {
                console.log(_this.props.state.selectedEvent.trim(), val.event.trim(), _this.props.state.selectedEvent.trim() === val.event.trim())
                return div({ className: _this.props.state.selectedEvent.trim() === val.event.toLowerCase().trim() ? 'option active' : 'option' }, val.event)
            })

            return div({ className: 'listEvents' },
                h1({ className: 'title' }, 'Selecciona un evento!'), options
            )
        },
        render: function() {
            return this.props.state.listEvents ? this.buildEvents() : null
        }
    });
})();