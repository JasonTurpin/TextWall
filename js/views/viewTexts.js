define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/viewTexts.html'
], function($, _, Backbone, ViewTexts) {
    var AppManagerViewsAddon = Backbone.View.extend({
        /**
         * Initialize the view
         *
         * @param array options Options array
         *
         * @return void
         */
        initialize: function(options) {
            // Sets options
            this.options = options;
        }
    });
    return AppManagerViewsAddon;
});
