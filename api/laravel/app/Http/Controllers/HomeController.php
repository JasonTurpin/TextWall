<?php
/**
 * Home Controller - Used to control most actions
 * File : /laravel/app/Http/Contollers/HomeController.php
 *
 * PHP version 5.3
 *
 * @category TextWall
 * @package  TextWall
 * @author   Jason Turpin <jasonaturpin@gmail.com>
 */

// Define namespace
namespace App\Http\Controllers;

// Include models
use \Illuminate\Support\Facades\Request;
use \App\Text;

/**
 * HomeController - base controller for all API calls
 *
 * @category TextWall
 * @package  TextWall
 * @author   Jason Turpin <jasonaturpin@gmail.com>
 */
class HomeController extends Controller {
    /**
     * Landing Page For A New Incoming Message
     *
     * @return void
     */
    public function do_incoming() {
        // Message Body
        $msg   = Request::input('Body');

        // Phone Number
        $phone = Request::input('From');

        // IF message and phone number are not empty
        if (!empty($msg) && !empty($phone)) {
            $text = new Text();
            $text->message     = $msg;
            $text->phoneNumber = $phone;
            $text->save();
        }

        // Kill Execution
        die;
    }
}
