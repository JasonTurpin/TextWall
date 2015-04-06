define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'models/config',
    'text!templates/viewTexts.html',
    'text!templates/header.html',
    'collections/textMessages'
], function($, _, Backbone, Bootstrap, Config, ViewTexts, Header, TextMsgs) {
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

            // The last ID used
            lastID   = 0;

            // Initialize GradeLevels
            this.config = new config({});

            // Fetch GradeLevels
            this.config.fetch({
                // Turn cache off
                cache: false,

                // AJAX success
                success: function () {
                    that.renderHeader();
                },

                // IF an error occurred
                error: function (jqXHR, textStatus, errorThrown) {
                    // @todo handle errors
                    console.log('an error occurred');
                }
            });

            // Initialize text messaging screens
            this.reloadTexts();

            // Set a 5 second timer
            setInterval(function() {
                that.reloadTexts();
            }, 5000);
        },

        /**
         * Renders the header template
         *
         * @return void
         */
        renderHeader: function() {
            // Set Context
            var that = this;

            // Populate header
            $('#headerData').html(_.template(Header, {config: that.config}));
        },

        /**
         * Renders new text messages for the page
         *
         * @return void
         */
        renderTexts: function() {
            // Text Messages
            if (this.TextMessages.length > 0 && this.TextMessages.models[0].get('id') != lastID) {
                // Reset last ID
                lastID = this.TextMessages.models[0].get('id');

                // Populate template
                $('#textsContainer').html(_.template(ViewTexts, {TextMessages: this.TextMessages.models}));
            }
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
