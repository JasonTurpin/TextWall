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
use \Illuminate\Support\Facades\Cache;
use \App\Text;
use \App\Profanity;

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
            // Fetch the Profanity regular expressions
            $Regexes = Cache::rememberForever('profanityRegularExpressions', function() {
                return Profanity::all();
            });

            // Set values
            $text = new Text();
            $text->message     = $msg;
            $text->phoneNumber = $phone;

            // Searches for profane words in the text message
            foreach ($Regexes as $regex) {
                // IF a profane word is found
                if ($regex->isMatch($msg)) {
                    $text->isProfane = 1;
                    break;
                }
            }

            // Save text
            $text->save();

            // Clear the text message cache
            Cache::forget('fetchTexts');
        }

        // Kill Execution
        die;
    }

    /**
     * Configuration details for view
     *
     * @return Response
     */
    public function do_config() {
        return array(
            'phoneNumber' => config('app.phoneNumber'),
        );
    }

    /**
     * Fetches the latest text messages
     *
     * @param int $num Number of text messages desired
     *
     * @return Response
     */
    public function do_fetchTexts($num) {
        return Cache::remember(
            // Cache identifier
            'fetchTexts',

            // Set cache lifetime
            config('app.cacheLife'),

            // Returns institution data
            function() use ($num) {
                // Fetch last $num text messages
                $Texts = Text::clean()
                    ->orderBy('created_at', 'desc')
                    ->take($num)
                    ->get();

                // Build a results array
                $resultArr = array();
                foreach($Texts as $text) {
                    $resultArr[] = $text->translate();
                }
                return $resultArr;
            });
    }
}
