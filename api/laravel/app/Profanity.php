<?php
/**
 * Profanity Model - stores profanity regular expressions
 * File : /laravel/app/Text.php
 *
 * PHP version 5.3
 *
 * @category TextWall
 * @package  TextWall
 * @author   Jason Turpin <jasonaturpin@gmail.com>
 */

// Define namespace
namespace App;

// Include models
use \Illuminate\Database\Eloquent\Model;
use League\Flysystem\Exception;

/**
 * Stores regular expressions used for detecting profanity
 *
 * @category TextWall
 * @package  TextWall
 * @author   Jason Turpin <jasonaturpin@gmail.com>
 */
class Profanity extends Model {
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'Profanity';

    /**
     * The primary key used by the model.
     *
     * @var string
     */
    protected $primaryKey = 'profanity_id';

    /**
     * IF a string contains the profane word
     *
     * @param string $str String being tested
     *
     * @return bool
     */
    public function isMatch($str) {
        // Tests the regular expression using word boundaries
        $regex = '/\b'.$this->regex.'\b/i';

        // IF a profane word is found
        if (preg_match($regex, $str, $dontCare)) {
            return true;
        }
        return false;
    }
}
