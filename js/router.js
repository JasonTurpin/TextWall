define([
    'jquery',
    'underscore',
    'backbone',
    'util',
    'views/viewTexts',
    'views/404'
], function ($, _, Backbone, util, ViewTexts, FourOhFour) {
    // Build router
    AppManagerRouter = Backbone.Router.extend({
        // Define Routes
        routes: {
            ''         : 'viewTexts',
            '*notFound': 'notFound'
        },

        /**
         * Load texts view
         *
         * @return void
         */
        viewTexts : function() {
            this.loadView(new ViewTexts({}));
        },

        /**
         * Page Not Found
         *
         * @return void
         */
        notFound : function() {
            this.loadView(new FourOhFour({}));
        },

        /**
         * Loads the requested view
         *
         * @param view
         *
         * @return void
         */
        loadView : function(view) {
            this.view && (this.view.close ? this.view.close() : this.view.remove());
            this.view = view;
        }
    });
    return AppManagerRouter;
});
