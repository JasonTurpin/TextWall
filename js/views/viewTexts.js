define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/viewTexts.html',
    'collections/textMessages'
], function($, _, Backbone, ViewTexts, TextMsgs) {
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

            // Set context
            var that = this;

            // Initialize text messaging screens
            this.reloadTexts();

            // Set a 5 second timer
            setInterval(function() {
                that.reloadTexts();
            }, 5000);
        },

        /**
         * Renders new text messages for the page
         *
         * @return void
         */
        renderTexts: function() {
            console.log(this.TextMessages.models);
        },

        /**
         * Reloads the text messages for the page
         *
         * @return void
         */
        reloadTexts: function() {
            // Initialize GradeLevels
            this.TextMessages = new TextMessages({
                "num": 10
            });

            // Set Context
            var that = this;

            // Fetch GradeLevels
            this.TextMessages.fetch({
                // Turn cache off
                cache: false,

                // AJAX success
                success: function () {
                    that.renderTexts();
                },

                // IF an error occurred
                error: function (jqXHR, textStatus, errorThrown) {
                    // @todo handle errors
                    console.log('an error occurred');
                }
            });
        }
    });
    return AppManagerViewsAddon;
});
