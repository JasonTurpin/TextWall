define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'router',
    'scrollTo',
    'niceScroll',
    'respond',
    'load'
], function($, _, Backbone, Bootstrap, AppManagerRouter, ScrollTo, NiceScroll, Respond, load){

    var AppManager = {
        Models      : {},
        Collections : {},
        Views       : {},

        start: function() {
            // Build router
            var router = new AppManagerRouter();

            // Sets Backbone to use web root
            Backbone.history.start({pushState: true, root: '/'});

            load.initialize();
        }
    };
    return AppManager;
});
