require.config({
    // Set paths
    paths: {
        jquery    : '../vendor/jquery/1.11.1/jquery-1.11.1.min',
        underscore: '../vendor/underscore/1.6.0/underscore-min',
        backbone  : '../vendor/backbone/1.1.2/backbone-min',
        moment    : '../vendor/moment/moment',
        text      : '../vendor/require/text',
        templates : '../html/templates'
    },
    
    shim: {}
});

require(['app'], function(App){
    App.start();
});