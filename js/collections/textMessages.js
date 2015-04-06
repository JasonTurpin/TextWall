define([
    'jquery',
    'underscore',
    'backbone',
    'models/text'
], function($, _, Backbone, Text){
    TextMessages = Backbone.Collection.extend({
        /**
         * Initialize Collection
         *
         * @param Object options Collection options
         *
         * @return void
         */
        initialize : function (options) {
            this.options = options || {};
        },

        /**
         * Sets AJAX URL
         *
         * @returns string
         */
        url: function () {
            return '/api/fetchTexts/' + this.options.num + '/';
        },

        /**
         * Indicates what model to use for collection
         */
        model: Text,

        /**
         * Parses the AJAX results
         *
         * @param array resp Response array
         *
         * @returns mixed
         */
        parse: function(resp) {
            return resp;
        }
    });
    return TextMessages;
});
