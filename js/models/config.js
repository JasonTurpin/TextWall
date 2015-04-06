define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    config = Backbone.Model.extend({
        /**
         * Sets default values to text object
         */
        defaults: {
            phoneNumber: null
        },

        /**
         * Sets AJAX URL
         *
         * @returns string
         */
        url: function () {
            return '/api/config';
        },

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
    return config;
});
