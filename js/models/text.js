define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    text = Backbone.Model.extend({
        /**
         * Sets default values to text object
         */
        defaults: {
            id      : null,
            from    : null,
            msg     : null,
            dateTime: null
        }
    });
    return text;
});
