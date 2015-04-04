<?php
/**
 * Application routing
 */
Route::get('/api/', 'WelcomeController@index');
Route::get('/api/incoming', 'HomeController@do_incoming');
