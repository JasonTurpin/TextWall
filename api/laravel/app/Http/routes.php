<?php
/**
 * Application routing
 */
Route::get('/api/', 'WelcomeController@index');
Route::get('/api/incoming', 'HomeController@do_incoming');
Route::get('/api/config', 'HomeController@do_config');
Route::any('/api/fetchTexts/{num}/', 'HomeController@do_fetchTexts')->where('num', '\d+');
