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
}
