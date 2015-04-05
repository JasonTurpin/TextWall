({
    paths: {
        jquery           : '../vendor/jquery/1.11.1/jquery-1.11.1.min',
        underscore       : '../vendor/underscore/1.6.0/underscore-min',
        backbone         : '../vendor/backbone/1.1.2/backbone-min',
        moment           : '../vendor/moment/moment',
        text             : '../vendor/require/text',
        bootstrap        : '../vendor/bootstrap/dist/js/bootstrap.min',
        scrollTo         : '../theme/admin/js/jquery.scrollTo.min',
        niceScroll       : '../theme/admin/js/jquery.nicescroll',
        respond          : '../theme/admin/js/respond.min',
        templates        : '../html/templates'
    },
    shim: {
        niceScroll: {
            deps: ['jquery'],
            exports: 'niceScroll'
        },
        scrollTo: {
            deps: ['jquery'],
            exports: 'scrollTo'
        },
        respond: {
            deps: ['jquery'],
            exports: 'respond'
        },
        bootstrap: {
            deps: ['jquery', 'underscore'],
            exports: 'bootstrap'
        }
    },
    baseUrl                : "js",
    name                   : "main",
    out                    : "dist/main.js",
    removeCombined         : true,
    findNestedDependencies : true
})