<?php
/**
 * Text Model - stores text data
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

/**
 * Text - base model for an incoming text message
 *
 * @category TextWall
 * @package  TextWall
 * @author   Jason Turpin <jasonaturpin@gmail.com>
 */
class Text extends Model {
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'Texts';

    /**
     * The primary key used by the model.
     *
     * @var string
     */
    protected $primaryKey = 'text_id';

    /**
     * Only queries the clean text messages
     *
     * @param Object $query Query object
     *
     * @return mixed
     */
    public function scopeClean($query) {
        return $query->where('isProfane', '=', '0');
    }

    /**
     * Translates object values to new keys
     *
     * @return array
     */
    public function translate() {
        // Replace phone number
        $phoneNumber = preg_replace('/[^\d]+/', '', $this->phoneNumber);
        $phoneNumber = preg_replace('/^(0|1)/', '', $phoneNumber);
        $phoneNumber = '('.substr($phoneNumber, 0, 3).') ***-****';

        return array(
            'id'       => $this->text_id,
            'from'     => $phoneNumber,
            'msg'      => $this->message,
            'dateTime' => $this->created_at,
        );
    }
}
